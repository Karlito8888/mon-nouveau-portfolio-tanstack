import { ClientOnly } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navigation } from "../components/navigation";

// Lazy load the entire RenderModel + Wizard to prevent SSR issues
const WizardScene = lazy(() => import("../components/scenes/WizardScene"));

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="home-page">
      {/* Circular navigation - only on home page */}
      <Navigation />

      {/* Background image with opacity */}
      <picture>
        <source
          type="image/webp"
          srcSet="
            /background/home-background-480w.webp 480w,
            /background/home-background-768w.webp 768w,
            /background/home-background-1024w.webp 1024w
          "
          sizes="100vw"
        />
        <img
          src="/background/home-background.png"
          alt=""
          className="home-background"
          aria-hidden="true"
        />
      </picture>

      {/* 3D Wizard model - client only with lazy loading */}
      <div className="home-canvas-container">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <WizardScene />
          </Suspense>
        </ClientOnly>
      </div>
    </main>
  );
}
