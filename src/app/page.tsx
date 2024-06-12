import ButtonWithClickCounterServer from "@/components/ButtonWithClickCounterServer";
import HiddenProjects from "@/components/HiddenProjects";
import LinkWithUpRightArrow from "@/components/LinkWithUpRightArrow";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { projects } from "@/lib/projectsData";
import { experiences } from "@/lib/workExperienceData";
import Image from "next/image";
import Link from "next/link";

export const tagline = "CS undergrad, fullstack developer";
export const headline =
  "I build software with purpose and create impactful solutions through user-centric design";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white bg-gradient-to-br from-orange/10 to-darkTeal/10 p-4 pb-0 text-black md:p-10 md:pb-0 md:pr-0 lg:p-16 lg:pb-0 lg:pr-0 xl:p-24 xl:pb-0 dark:from-orange/5 dark:to-darkTeal/5">
      <div className="z-10 flex w-full flex-col items-center justify-between gap-[60px] text-sm md:max-w-5xl">
        <section className="flex w-full flex-col gap-2 pt-[40px] md:flex-row md:gap-[20px]">
          <div className="relative h-[64px] w-[64px] md:h-[108px] md:w-[108px]">
            <Image
              src="/pfp.webp"
              sizes="(max-width: 768px) 64px, 108px"
              className="aspect-square rounded-[10px] border border-lightGrey"
              alt="Headshot profile picture"
              fill={true}
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="flex flex-col">
              <h1 className="font-serif text-4xl leading-9 md:text-6xl md:leading-none">
                Owen Gretzinger
              </h1>
              <p className="-mb-2 font-serif text-lg md:text-2xl">{tagline}</p>
            </div>
            <p className="max-w-[330px] text-sm text-grey md:max-w-[420px] md:text-lg">
              {headline}
            </p>
            <div className="flex flex-col gap-[10px] md:flex-row">
              <SocialLink link="linkedin" />
              <SocialLink link="email" />
              <SocialLink link="github" />
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-4xl">Work Experience</h1>
          <div className="flex flex-col gap-[20px] md:flex-row md:flex-wrap">
            {Object.keys(experiences).map((experience) => (
              <WorkExperienceCard
                key={experience}
                company={experience as keyof typeof experiences}
              />
            ))}
          </div>
          <LinkWithUpRightArrow
            text="View resume for more details"
            href="/Owen Gretzinger Resume.pdf"
            prefetch={false}
          />
        </section>
        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-4xl">Projects</h1>
          <div className="flex flex-wrap gap-[20px]">
            {Object.keys(projects)
              .slice(0, 5)
              .map((project) => (
                <ProjectCard
                  key={project}
                  project={project as keyof typeof projects}
                />
              ))}
            <HiddenProjects>
              {Object.keys(projects)
                .slice(5)
                .map((project) => (
                  <ProjectCard
                    key={project}
                    project={project as keyof typeof projects}
                  />
                ))}
            </HiddenProjects>
          </div>
          <LinkWithUpRightArrow
            text="View code for this website & star my projects on GitHub"
            href="https://github.com/owengretzinger"
          />
        </section>
        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-4xl">That&apos;s all</h1>
          <div className="flex flex-col gap-[10px]">
            <LinkWithUpRightArrow
              text="Add me on LinkedIn"
              href="https://www.linkedin.com/in/owengretzinger/"
            />
            <LinkWithUpRightArrow
              text="Add me on GitHub"
              href="https://github.com/owengretzinger"
            />
            <ButtonWithClickCounterServer />
          </div>
        </section>
      </div>
      <footer className="mb-[20px] mt-24">
        <Link
          href="https://github.com/owengretzinger"
          target="_blank"
          className="font-serif text-lg text-grey transition-colors hover:text-darkTeal focus-visible:text-darkTeal"
        >
          Designed & built by Owen Gretzinger
        </Link>
      </footer>
    </main>
  );
}
