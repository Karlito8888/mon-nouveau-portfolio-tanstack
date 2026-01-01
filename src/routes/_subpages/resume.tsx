import { createFileRoute } from "@tanstack/react-router";
import { ResumeTimeline } from "../../components/resume";
import { resumeData } from "../../data";

export const Route = createFileRoute("/_subpages/resume")({
  component: ResumePage,
});

function ResumePage() {
  return (
    <>
      <picture>
        <source
          type="image/webp"
          srcSet="
            /background/projects-background-480w.webp 480w,
            /background/projects-background-768w.webp 768w,
            /background/projects-background-1024w.webp 1024w
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

      {/* Resume content */}
      <div className="subpage-content">
        <ResumeTimeline items={resumeData} />
      </div>
    </>
  );
}
