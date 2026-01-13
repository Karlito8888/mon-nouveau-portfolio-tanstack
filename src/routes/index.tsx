import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";

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
            /background/home-background-640w.webp 640w,
            /background/home-background-768w.webp 768w,
            /background/home-background-1024w.webp 1024w,
            /background/home-background-1366w.webp 1366w,
            /background/home-background-1920w.webp 1920w
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

      {/* 3D Wizard model is now handled by SceneManager in __root.tsx */}
    </main>
  );
}
