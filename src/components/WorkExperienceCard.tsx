import { experiences } from "@/lib/workExperienceData";
import Image from "next/image";
import TechnologyTag from "./TechnologyTag";

export default function WorkExperienceCard({
  company,
}: {
  company: keyof typeof experiences;
}) {
  const info = experiences[company];

  return (
    <div className="w-full rounded-[10px] border border-lightGrey text-sm transition-colors hover:bg-lightGrey/20 md:h-[251px] md:min-h-[251px] md:w-[300px] md:min-w-[300px] dark:hover:bg-lightGrey/30">
      <div className="flex flex-col gap-[20px] px-[20px] py-[20px]">
        {/* job details */}
        <div className="flex flex-col gap-[4px]">
          <div className="flex justify-between text-grey">
            <span className="">{info.date}</span>
            {info.coop && <span className="">Co-op</span>}
          </div>
          <div className="flex gap-[10px]">
            <Image
              src={info.image}
              width={48}
              height={48}
              alt={`${info.company} logo`}
              className="h-[48px] w-[48px] rounded border border-lightGrey"
              priority
            />
            <div className="flex flex-col text-black">
              <span className="font-semibold">{info.title}</span>
              <span>{info.company}</span>
            </div>
          </div>
        </div>
        {/* description */}
        <p className="leading-5 text-grey">{info.description}</p>
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
