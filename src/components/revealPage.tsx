"use client";

import { useContext } from "react";
import animations from "./loadingAnimation.module.css";
import { LoadingAnimationPlayingContext } from "../providers/loading-animation-provider";

export default function RevealPage() {
  const [loadingAnimationPlaying] = useContext(LoadingAnimationPlayingContext);

  return (
    <div
      className={`fixed z-[198] w-screen max-w-full h-screen pointer-events-none bg-white ${loadingAnimationPlaying === false ? animations.revealPage : ""}`}
    ></div>
  );
}
