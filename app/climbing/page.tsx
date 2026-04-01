import type { Metadata } from "next";
import ClimbingClient from "./ClimbingClient";

export const metadata: Metadata = {
  title: "Climbing Analysis — Dynalytix",
  description: "Pose estimation and machine learning to analyze your climbing movement. Understand your body, prevent injuries, and optimize performance through data-driven insights.",
  openGraph: {
    title: "Climbing Analysis — Dynalytix",
    description: "Pose estimation and machine learning to analyze your climbing movement.",
    type: "website",
  },
};

export default function ClimbingPage() {
  return <ClimbingClient />;
}
