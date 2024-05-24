import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export default function LinkWithUpRightArrow({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link flex w-fit items-center gap-[2px]"
    >
      <p className="text-lg text-black underline-offset-2 transition group-hover/link:text-darkTeal">
        {text}
      </p>
      <IconArrowUpRight
        size={24}
        stroke={1.25}
        className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:text-darkTeal"
      />
    </Link>
  );
}

export function ButtonWithUpRightArrow({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group/link flex w-fit items-center gap-[2px]"
    >
      <p className="text-lg text-black underline-offset-2 transition group-hover/link:text-darkTeal">
        {text}
      </p>
      <IconArrowUpRight
        size={24}
        stroke={1.25}
        className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:text-darkTeal"
      />
    </button>
  );
}
