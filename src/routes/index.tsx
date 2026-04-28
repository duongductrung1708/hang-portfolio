import { createFileRoute } from "@tanstack/react-router";
import { AltPortfolio } from "@/components/alt/AltPortfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALt. — a frontend developer's portfolio" },
      {
        name: "description",
        content:
          "ALt. is the interactive portfolio of Trung, a frontend developer from Vietnam. React, TypeScript, motion, and a flat white.",
      },
      { property: "og:title", content: "ALt. — a frontend developer's portfolio" },
      {
        property: "og:description",
        content: "Frontend developer from Vietnam. React, TypeScript, motion, and a flat white.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <AltPortfolio />;
}
