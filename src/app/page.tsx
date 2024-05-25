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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-orange/5 to-darkTeal/5 p-24 pb-0 text-black bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between gap-[60px] text-sm lg:flex lg:flex-col">
        <div className="flex w-full gap-[20px]">
          <Image
            src="/pfp.png"
            width={108}
            height={108}
            className="aspect-square h-[108px] w-[108px] rounded-[10px] border border-lightGrey"
            alt="Headshot profile picture"
          />
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col">
              <h1 className="font-serif text-6xl">Owen Gretzinger</h1>
              <p className="font-serif text-2xl">
                CS undergrad, fullstack developer
              </p>
            </div>
            <p className="max-w-[500px] text-lg text-grey">
              I build meaningful software & lead teams to create impactful
              solutions through user-centric design
            </p>
            <div className="flex gap-[10px]">
              <SocialLink link="linkedin" />
              <SocialLink link="email" />
              <SocialLink link="github" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-4xl">Work Experience</h1>
          <div className="flex gap-[20px]">
            {Object.keys(experiences).map((experience) => (
              <WorkExperienceCard
                key={experience}
                company={experience as keyof typeof experiences}
              />
            ))}
          </div>
          <LinkWithUpRightArrow
            text="View resume for more details"
            href="/resume.pdf"
          />
        </div>
        <div className="flex w-full flex-col gap-[20px]">
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
        </div>
        <div className="flex w-full flex-col gap-[20px]">
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
        </div>
      </div>
      <Link
        href="https://github.com/owengretzinger"
        className="mb-[20px] mt-24 font-serif text-lg text-grey transition-colors hover:text-darkTeal"
      >
        Designed & built by Owen Gretzinger
      </Link>
    </main>
  );
}
