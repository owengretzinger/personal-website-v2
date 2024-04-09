"use client";

import { ScrollingDisabledContext } from "../providers/scrolling-disabled-provider";
import handleClickScroll from "../lib/clickScroll";
import { useContext } from "react";

export default function NavButton({ ...props }: any) {
  const [, setScrollingDisabled] = useContext(ScrollingDisabledContext);

  return (
    <button
      onClick={() => {
        handleClickScroll(props.text.toLowerCase());
        setScrollingDisabled(false);
      }}
      className="group flex"
    >
      <p className="text-orange">{props.number}.&nbsp;</p>
      <p className="group-hover:text-orange transition">{props.text}</p>
    </button>
  );
}
