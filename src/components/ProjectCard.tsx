import { projects } from "@/lib/projectsData";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import TechnologyTag from "./TechnologyTag";

export default function ProjectCard({
  project,
}: {
  project: keyof typeof projects;
}) {
  const info = projects[project];

  return (
    <div className="relative w-full rounded-[10px] border border-lightGrey text-sm transition-colors hover:bg-lightGrey/20 focus-visible:bg-lightGrey/20 md:h-[251px] md:min-h-[251px] md:w-[300px] md:min-w-[300px] dark:hover:bg-lightGrey/30 dark:focus-visible:bg-lightGrey/30">
      <div className="flex flex-col gap-[20px] px-[20px] py-[20px]">
        {/* image & links */}
        <div className="flex justify-between text-grey">
          <Image
            src={info.image}
            width={32}
            height={32}
            alt={`${info.title} logo`}
            className="h-[32px] w-[32px] rounded border border-lightGrey"
          />
          <Link
            href={info.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link relative z-10 flex items-center gap-[4px] text-grey transition-all hover:text-darkTeal focus-visible:text-darkTeal"
          >
            <IconBrandGithub
              size={19}
              stroke={1.25}
              className={`transition group-hover/link:-translate-y-1 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-1`}
            />
            <p className="">GitHub</p>
          </Link>
        </div>
        {/* title & desc */}
        <div className="flex flex-col gap-[6px]">
          <Link
            href={info.link || info.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link flex items-center gap-[2px] font-semibold text-black transition-all hover:text-darkTeal focus-visible:text-darkTeal"
          >
            <span className="absolute inset-0" />
            <span>{info.title}</span>
            <IconArrowUpRight
              size={16}
              stroke={1.5}
              className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1"
            />
          </Link>
          <p className="leading-5 text-grey">{info.description}</p>
        </div>
        {/* tags */}
        <div className="flex flex-wrap gap-[8px]">
          {info.tags.map((tag) => (
            <TechnologyTag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

// function ProjectLink({
//   LinkIcon,
//   href,
//   mainLink = false,
// }: {
//   LinkIcon: Icon;
//   href: string;
//   mainLink?: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       target="_blank"
//       rel="noreferrer noopener"
//       className="relative z-10 text-grey transition-all hover:text-orange"
//     >
//       <LinkIcon size={19} stroke={1.25} className={``} />
//     </Link>
//   );
// }
