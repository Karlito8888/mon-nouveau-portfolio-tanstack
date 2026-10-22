import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DynamicDrawUsage,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from "three";
import wizard from "../assets/points/wizard.bin?url";
import hat from "../assets/points/hat.bin?url";
import staff from "../assets/points/staff.bin?url";
import type { Scene as GateScene } from "./webgl-gate";

/** Point clouds sampled from the CC BY models credited on /credits: int16 xyz normalised to [-1, 1]. */
const SHAPES: Record<string, string> = { wizard, hat, staff };
const FORM = 2.4; // seconds for one firefly to reach its place
const STAGGER = 0.8; // longest head start between fireflies
const DOT_PX = 3; // dot size in CSS px at the cloud's centre: the calibration knob
const CAMERA_Z = 5.5;

function dotTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.45, "rgba(255,255,255,0.85)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export async function init(canvas: HTMLCanvasElement): Promise<GateScene> {
  const target = new Int16Array(await (await fetch(SHAPES[canvas.dataset.shape!])).arrayBuffer());
  const small = innerWidth < 768;
  const n = Math.round((target.length / 3) * (small ? 0.6 : 1)); // samples are random: a prefix is a uniform subset

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1 : 1.5));
  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.z = CAMERA_Z;

  const pos = new Float32Array(n * 3);
  const start = new Float32Array(n * 3);
  const end = new Float32Array(n * 3);
  const delay = new Float32Array(n);
  const col = new Float32Array(n * 3);
  const gold = new Color("#fefe5b");
  const white = new Color("#ffffff");
  const c = new Color();
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < 3; k++) end[i * 3 + k] = target[i * 3 + k] / 32767;
    start.set([(Math.random() * 2 - 1) * 2.5, (Math.random() * 2 - 1) * 2, (Math.random() * 2 - 1) * 1.5], i * 3);
    delay[i] = Math.random() * STAGGER;
    c.copy(gold).lerp(white, Math.random() * 0.35);
    col.set([c.r, c.g, c.b], i * 3);
  }
  pos.set(start);
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3).setUsage(DynamicDrawUsage));
  geo.setAttribute("color", new BufferAttribute(col, 3));
  const mat = new PointsMaterial({
    map: dotTexture(),
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  const resize = () => {
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    if (!W || !H) return;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    mat.size = (DOT_PX * 2 * CAMERA_Z) / H; // with size attenuation, CSS px = size * (H / 2) / depth
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  let elapsed = 0;
  let last: number | undefined;
  let formed = false;
  const frame = (now: number) => {
    const dt = last === undefined ? 0 : Math.min((now - last) / 1000, 0.05);
    last = now;
    elapsed += dt;
    if (!formed) {
      formed = elapsed >= FORM + STAGGER; // this last pass lands every point exactly on its target
      for (let i = 0; i < n; i++) {
        const t = Math.min(Math.max((elapsed - delay[i]) / FORM, 0), 1);
        const k = 1 - (1 - t) ** 3;
        for (let j = i * 3; j < i * 3 + 3; j++) pos[j] = start[j] + (end[j] - start[j]) * k;
      }
      geo.attributes.position.needsUpdate = true;
    }
    points.rotation.y += dt * 0.4;
    points.position.y = Math.sin(elapsed) * 0.08;
    mat.opacity = 0.85 + 0.15 * Math.sin(elapsed * 2);
    renderer.render(scene, camera);
  };
  await renderer.compileAsync(scene, camera);
  const stop = () => renderer.setAnimationLoop(null);
  return {
    start: () => {
      last = undefined;
      renderer.setAnimationLoop(frame);
    },
    stop,
    dispose: () => {
      stop();
      ro.disconnect();
      geo.dispose();
      mat.map?.dispose();
      mat.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
