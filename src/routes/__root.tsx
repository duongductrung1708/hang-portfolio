import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import hhLogo from "@/assets/hh_logo.png?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hàn Hằng | Portfolio đời thường của cô giáo" },
      {
        name: "description",
        content:
          "Portfolio cá nhân của Hàn Hằng - câu chuyện đời thường của một cô giáo qua 6 khung cảnh hoài niệm, vibrant và giàu cảm xúc.",
      },
      { name: "author", content: "Hàn Hằng" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#ede8df" },
      { property: "og:title", content: "Hàn Hằng | Portfolio đời thường của cô giáo" },
      {
        property: "og:description",
        content:
          "Khám phá hành trình, thói quen và những mảnh ghép yêu thương trong portfolio tương tác của Hàn Hằng.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "vi_VN" },
      { property: "og:site_name", content: "Hàn Hằng Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hàn Hằng | Portfolio đời thường của cô giáo" },
      {
        name: "twitter:description",
        content: "Portfolio tương tác kể về cuộc sống đời thường của một cô giáo trẻ.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: hhLogo },
      { rel: "apple-touch-icon", href: hhLogo },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&family=Caveat:wght@400;700&family=Abril+Fatface&family=DM+Serif+Display&family=Major+Mono+Display&family=Pacifico&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => {
    // Always reset scroll position on refresh/reload.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return <Outlet />;
}
