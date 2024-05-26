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
      className="group/link w-fit"
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
  // we render the last word separately so that the arrow is in line
  const textExceptLastWord = text.split(" ").slice(0, -1).join(" ").concat(" ");
  const lastWord = text.split(" ").pop();

  return (
    <>
      <span className="w-full text-base text-black underline-offset-2 transition group-hover/link:text-darkTeal group-focus-visible/link:text-darkTeal md:text-lg">
        {textExceptLastWord}
      </span>
      <span className="whitespace-nowrap text-base text-black underline-offset-2 transition group-hover/link:text-darkTeal group-focus-visible/link:text-darkTeal md:text-lg">
        <span className="">{lastWord}</span>
        <IconArrowUpRight
          size={24}
          stroke={1.25}
          className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1"
        />
      </span>
    </>
  );
}
