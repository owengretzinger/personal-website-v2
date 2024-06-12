"use client";

import { incrementGlobalCounterClicks } from "@/lib/clickCounterApi";
import { useEffect, useRef, useState } from "react";
import { ButtonWithUpRightArrow } from "./LinkWithUpRightArrow";

export default function ButtonWithClickCounterClient({
  initialCount,
}: {
  initialCount: number;
}) {
  const [showCounter, setShowCounter] = useState(false);
  const [clickCount, setClickCount] = useState(initialCount);

  // batch requests and send every 3s to reduce network requests
  const unsentClicks = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (unsentClicks.current > 0) {
        incrementGlobalCounterClicks(unsentClicks.current);
        unsentClicks.current = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-[40px]">
      <ButtonWithUpRightArrow
        text="Click a link that doesn't do anything"
        onClick={() => {
          unsentClicks.current += 1;
          setClickCount((prev) => prev + 1);
          setShowCounter(true);
        }}
      />
      <p
        className={`text-base text-grey transition md:text-lg ${showCounter ? "opacity-100" : "translate-y-1 opacity-0"}`}
      >
        {clickCount.toLocaleString()} clicks &#127881;
      </p>
    </div>
  );
}
