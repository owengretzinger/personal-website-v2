"use client";

import { incrementCount } from "@/lib/clickCounterApi";
import { useState } from "react";
import { ButtonWithUpRightArrow } from "./LinkWithUpRightArrow";

export default function ButtonWithClickCounterClient({
  initialCount,
}: {
  initialCount: number;
}) {
  const [showCounter, setShowCounter] = useState(false);
  const [clickCount, setClickCount] = useState(initialCount);

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-[40px]">
      <ButtonWithUpRightArrow
        text="Click a link that doesn't do anything"
        onClick={async () => {
          setClickCount((prev) => prev + 1);
          setShowCounter(true);
          await incrementCount();
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
