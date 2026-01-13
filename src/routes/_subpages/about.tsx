import { ClientOnly } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { AboutDetails } from "../../components/about";

const HatScene = lazy(() => import("../../components/scenes/HatScene"));

export const Route = createFileRoute("/_subpages/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <picture>
        <source
          type="image/webp"
          srcSet="
            /background/about-background-480w.webp 480w,
            /background/about-background-640w.webp 640w,
            /background/about-background-768w.webp 768w,
            /background/about-background-1024w.webp 1024w,
            /background/about-background-1366w.webp 1366w,
            /background/about-background-1920w.webp 1920w
          "
          sizes="100vw"
        />
        <img
          src="/background/about-background.png"
          alt=""
          className="subpage-background"
          aria-hidden="true"
        />
      </picture>

      {/* 3D HatModel - fixed position */}
      <div className="about-model-container">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <HatScene />
          </Suspense>
        </ClientOnly>
      </div>

      {/* About content */}
      <div className="subpage-content">
        <AboutDetails />
      </div>
    </>
  );
}
