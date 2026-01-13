import { ClientOnly } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ProjectList } from "../../components/projects";
import { projectsData } from "../../data";

const StaffScene = lazy(() => import("../../components/scenes/StaffScene"));

export const Route = createFileRoute("/_subpages/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <picture>
        <source
          type="image/webp"
          srcSet="
            /background/projects-background-480w.webp 480w,
            /background/projects-background-640w.webp 640w,
            /background/projects-background-768w.webp 768w,
            /background/projects-background-1024w.webp 1024w,
            /background/projects-background-1366w.webp 1366w,
            /background/projects-background-1920w.webp 1920w
          "
          sizes="100vw"
        />
        <img
          src="/background/projects-background.png"
          alt=""
          className="subpage-background"
          aria-hidden="true"
        />
      </picture>

      {/* 3D Staff model - fixed position */}
      <div className="projects-model-container">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <StaffScene />
          </Suspense>
        </ClientOnly>
      </div>

      {/* Projects list */}
      <div className="subpage-content">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}
