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
    <div className="flex gap-[40px]">
      <ButtonWithUpRightArrow
        text="Click a link that doesn't do anything"
        onClick={async () => {
          setClickCount((prev) => prev + 1);
          setShowCounter(true);
          await incrementCount();
          console.log("COUNT INCREMENTED");
        }}
      />
      <p
        className={`text-lg text-grey transition ${showCounter ? "opacity-100" : "translate-y-1 opacity-0"}`}
      >
        {clickCount.toLocaleString()} clicks &#127881;
      </p>
    </div>
  );
}
