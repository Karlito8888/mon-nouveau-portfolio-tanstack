import { createRouter, Link } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

function NotFoundComponent() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="not-found-link">
        Return Home
      </Link>
    </div>
  );
}

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFoundComponent,
  });

  return router;
};
