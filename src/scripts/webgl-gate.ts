/**
 * Starts a three.js scene when it can and should run: no reduced-motion preference, WebGL 2,
 * after `load` and an idle slot. Runs only while the canvas is on screen, swallows every failure
 * (the painted background stays) and resolves to the scene, or `null`.
 */
export interface Scene {
  start(): void;
  stop(): void;
  dispose(): void;
}
export type SceneModule = { init(canvas: HTMLCanvasElement): Promise<Scene> };

export async function startWhenIdle(
  canvas: HTMLCanvasElement,
  load: () => Promise<SceneModule>,
): Promise<Scene | null> {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  try {
    if (!(window.WebGL2RenderingContext && document.createElement("canvas").getContext("webgl2")))
      return null;
  } catch {
    return null;
  }
  const idle = Promise.withResolvers<void>();
  const schedule = () =>
    "requestIdleCallback" in window
      ? requestIdleCallback(() => idle.resolve(), { timeout: 2000 })
      : setTimeout(idle.resolve, 200);
  if (document.readyState === "complete") schedule();
  else addEventListener("load", schedule, { once: true });
  await idle.promise;
  try {
    const scene = await (await load()).init(canvas);
    scene.start();
    canvas.classList.add("is-live");
    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? scene.start() : scene.stop(),
    );
    io.observe(canvas);
    return {
      start: scene.start,
      stop: scene.stop,
      dispose: () => (io.disconnect(), scene.dispose()),
    };
  } catch (err) {
    console.warn("Animation disabled:", err);
    return null;
  }
}
