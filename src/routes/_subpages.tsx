import { createFileRoute, Outlet } from '@tanstack/react-router'
import { HomeBtn } from '../components/HomeBtn'

export const Route = createFileRoute('/_subpages')({
  component: SubpagesLayout,
})

/**
 * Layout for sub-pages (About, Projects, Contact)
 * Provides HomeBtn and consistent padding/styling
 */
function SubpagesLayout() {
  return (
    <main className="subpages-layout">
      <HomeBtn />
      <Outlet />
    </main>
  )
}
