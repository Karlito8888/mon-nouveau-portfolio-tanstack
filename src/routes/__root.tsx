import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { FireFliesBackground } from "../components/FireFliesBackground";
import { Sound } from "../components/Sound";
import globalsCss from "../styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Charles Bourgault | Portfolio",
      },
      {
        name: "description",
        content: "Creative portfolio showcasing web development projects with React, Three.js and modern technologies",
      },
      {
        name: "theme-color",
        content: "#1B1B1B",
      },
      {
        name: "author",
        content: "Charles Bourgault",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "Charles Bourgault | Portfolio",
      },
      {
        property: "og:description",
        content: "Creative portfolio showcasing web development projects with React, Three.js and modern technologies",
      },
      {
        property: "og:image",
        content: "/favicon-512x512.png",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Charles Bourgault | Portfolio",
      },
      {
        name: "twitter:description",
        content: "Creative portfolio showcasing web development projects",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "/favicon-192x192.png",
      },
      {
        rel: "stylesheet",
        href: globalsCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Madimi+One&display=swap",
      },
    ],
  }),

  shellComponent: RootDocument,
  component: RootComponent,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen relative">
      <FireFliesBackground />
      <Sound />
      <Outlet />
    </div>
  );
}
