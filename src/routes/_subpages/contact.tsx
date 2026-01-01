import { createFileRoute } from '@tanstack/react-router'
import { Form } from '../../components/contact'

export const Route = createFileRoute('/_subpages/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <picture>
        <source
          type="image/webp"
          srcSet="
            /background/contact-background-480w.webp 480w,
            /background/contact-background-768w.webp 768w,
            /background/contact-background-1024w.webp 1024w
          "
          sizes="100vw"
        />
        <img
          src="/background/contact-background.png"
          alt=""
          className="subpage-background"
          aria-hidden="true"
        />
      </picture>
      <div className="subpage-content flex-center">
        <Form />
      </div>
    </>
  )
}
