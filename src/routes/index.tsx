import { createFileRoute } from "@tanstack/react-router";
import { AltPortfolio } from "@/components/alt/AltPortfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hàn Hằng | The Beginning of Light" },
      {
        name: "description",
        content:
          "The Beginning of Light - portfolio tương tác về cuộc sống đời thường của một cô giáo: thanh xuân, đại học, thói quen, tình yêu và ước mơ.",
      },
      { property: "og:title", content: "Hàn Hằng | The Beginning of Light" },
      {
        property: "og:description",
        content:
          "Portfolio tương tác bằng tiếng Việt với 6 khung cảnh kể chuyện về hành trình lớn lên và những điều làm Hàn Hằng rực rỡ.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <AltPortfolio />;
}
