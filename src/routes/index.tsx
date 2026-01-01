import { createFileRoute } from '@tanstack/react-router'
import { RenderModel } from '../components/RenderModel'
import { Wizard } from '../components/models'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="home-page">
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

      {/* 3D Wizard model */}
      <div className="home-canvas-container">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  )
}
