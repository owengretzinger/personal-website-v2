"use client";

import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { LoadingAnimationPlayingContext } from "../providers/loading-animation-provider";
import handleClickScroll from "../lib/clickScroll";

export default function HandleSectionSearchParam() {
  const searchParams = useSearchParams();

  const [loadingAnimationPlaying] = useContext(LoadingAnimationPlayingContext);

  useEffect(() => {
    if (loadingAnimationPlaying === false && searchParams.has("section")) {
      handleClickScroll(searchParams.get("section")!);
    }
  }),
    [loadingAnimationPlaying];

  return <></>;
}
