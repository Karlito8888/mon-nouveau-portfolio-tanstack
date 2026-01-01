import { createFileRoute } from '@tanstack/react-router'
import { RenderModel } from '../../components/RenderModel'
import { Staff } from '../../components/models'
import { ProjectList } from '../../components/projects'
import { projectsData } from '../../data'

export const Route = createFileRoute('/_subpages/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
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

      {/* 3D Staff model - fixed position */}
      <div className="projects-model-container">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>

      {/* Projects list */}
      <div className="subpage-content">
        <ProjectList projects={projectsData} />
      </div>
    </>
  )
}
