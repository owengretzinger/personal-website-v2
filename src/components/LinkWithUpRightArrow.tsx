import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export default function LinkWithUpRightArrow({
  text,
  href,
  prefetch = true,
}: {
  text: string;
  href: string;
  prefetch?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link w-fit"
      prefetch={prefetch}
    >
      <LinkOrButtonContent text={text} />
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
    <div
      onClick={onClick}
      className="group/link w-fit"
      role="button"
      tabIndex={0}
    >
      <LinkOrButtonContent text={text} />
    </div>
  );
}

function LinkOrButtonContent({ text }: { text: string }) {
  // we render the last word separately so that the arrow is inline
  const textExceptLastWord = text.split(" ").slice(0, -1).join(" ").concat(" ");
  const lastWord = text.split(" ").pop();

  return (
    <>
      <span className="w-full border-b border-transparent text-base text-black transition group-hover/link:border-darkTeal group-hover/link:text-darkTeal group-focus-visible/link:border-darkTeal group-focus-visible/link:text-darkTeal md:text-lg">
        {textExceptLastWord}
      </span>
      <span className="whitespace-nowrap text-base md:text-lg">
        <span className="border-b border-transparent text-black transition-colors group-hover/link:border-darkTeal group-hover/link:text-darkTeal group-focus-visible/link:border-darkTeal group-focus-visible/link:text-darkTeal">
          {lastWord}
        </span>
        <IconArrowUpRight
          size={24}
          stroke={1.25}
          className="inline-block text-black transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:text-darkTeal"
        />
      </span>
    </>
  );
}
