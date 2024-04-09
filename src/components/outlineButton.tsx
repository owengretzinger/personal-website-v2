"use client";

import Link from "next/link";
import { useContext } from "react";
import { ScrollingDisabledContext } from "../providers/scrolling-disabled-provider";

export default function OutlineButton({ ...props }: any) {
  const [, setScrollingDisabled] = useContext(ScrollingDisabledContext);

  return (
    <Link
      {...props}
      className="border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-orange/10 transition"
      onClick={() =>
        props.text == "Resume" ? setScrollingDisabled(false) : {}
      }
    >
      {props.text}
    </Link>
  );
}
