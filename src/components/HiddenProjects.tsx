"use client";

import { projects } from "@/lib/projectsData";
import Image from "next/image";
import { useState } from "react";

export default function HiddenProjects({
  children,
}: {
  children: React.ReactNode;
}) {
  const [additionalProjectsShown, setAdditionalProjectsShown] = useState(false);

  return additionalProjectsShown ? (
    <>{children}</>
  ) : (
    <div className="relative grid h-min grid-cols-4 gap-[20px] rounded-[10px] border border-lightGrey p-[20px]">
      {Object.keys(projects)
        .slice(5, 11)
        .map((project) => {
          const projectKey = project as keyof typeof projects;
          const info = projects[projectKey];
          return (
            <Image
              key={info.title}
              src={info.image}
              width={32}
              height={32}
              alt={`${info.title} logo`}
              className="h-[32px] w-[32px] rounded border border-lightGrey"
            />
          );
        })}
      <button
        onClick={() => setAdditionalProjectsShown(true)}
        className="col-span-2 flex h-full items-center justify-center rounded bg-lightGrey text-sm text-black"
      >
        <span className="absolute inset-0" />
        <span>Show all</span>
      </button>
    </div>
  );
}
