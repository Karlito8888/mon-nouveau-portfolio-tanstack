import { startWhenIdle, type Scene } from "./webgl-gate";
import { CONTACT } from "../site";

// One firefly scene per page that has a canvas.scene: start on every page-load, dispose before every swap.
let scene: Promise<Scene | null> | null = null;
document.addEventListener("astro:page-load", () => {
  const canvas = document.querySelector<HTMLCanvasElement>("canvas.scene");
  scene = canvas ? startWhenIdle(canvas, () => import("./firefly-scene")) : null;
});
document.addEventListener("astro:before-swap", () => {
  scene?.then((s) => s?.dispose());
  scene = null;
});

// Ambient sound: <audio> and its button persist across navigations (transition:persist), so they are wired once.
const audio = document.querySelector<HTMLAudioElement>("#ambient")!;
const toggle = document.querySelector<HTMLButtonElement>(".sound-btn")!;
const play = () => void audio.play().catch(() => {});
const show = (on: boolean) => {
  toggle.setAttribute("aria-pressed", String(on));
  toggle.setAttribute("aria-label", on ? "Mute ambient sound" : "Play ambient sound");
};
toggle.addEventListener("click", () => {
  const on = toggle.getAttribute("aria-pressed") !== "true";
  show(on);
  localStorage.setItem("musicConsent", String(on));
  if (on) play();
  else audio.pause();
});
if (localStorage.getItem("musicConsent") === "true") {
  show(true);
  addEventListener("pointerdown", play, { once: true }); // browsers only start audio after a gesture
}

// Demo contact form: native validation runs first, so a submit event means valid input.
document.addEventListener(
  "submit",
  (e) => {
    const form = e.target as HTMLFormElement;
    if (!form.matches(".contact-form")) return;
    e.preventDefault();
    form.querySelector(".contact-status")!.textContent = CONTACT.sent;
  },
  { capture: true },
);
