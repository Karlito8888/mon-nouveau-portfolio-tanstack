import { createFileRoute } from "@tanstack/react-router";
import { AboutDetails } from "../../components/about";

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

      {/* 3D HatModel is now handled by SceneManager in __root.tsx */}

      {/* About content */}
      <div className="subpage-content">
        <AboutDetails />
      </div>
    </>
  );
}
