import { createFileRoute } from '@tanstack/react-router'
import { RenderModel } from '../../components/RenderModel'
import { HatModel } from '../../components/models'
import { AboutDetails } from '../../components/about'

export const Route = createFileRoute('/_subpages/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <picture>
        <source
          type="image/webp"
          srcSet="
            /background/about-background-480w.webp 480w,
            /background/about-background-768w.webp 768w,
            /background/about-background-1024w.webp 1024w
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
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      {/* About content */}
      <div className="subpage-content">
        <AboutDetails />
      </div>
    </>
  )
}
