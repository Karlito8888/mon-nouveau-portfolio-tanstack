import { createFileRoute } from "@tanstack/react-router";
import { ProjectList } from "../../components/projects";
import { projectsData } from "../../data";

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

      {/* 3D Staff model is now handled by SceneManager in __root.tsx */}

      {/* Projects list */}
      <div className="subpage-content">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}
