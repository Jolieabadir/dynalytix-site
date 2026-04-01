import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Dynalytix — Movement is data. Patterns are prevention.",
  description: "Computer vision-powered movement analysis for climbing and functional movement screening. Upload video, get instant pose analysis, and receive research-backed clinical reports.",
  openGraph: {
    title: "Dynalytix — Movement is data. Patterns are prevention.",
    description: "Computer vision-powered movement analysis for climbing and functional movement screening.",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
