import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

type SocialLink = "linkedin" | "email" | "github";

type LinkNameToInfoType = {
  [key in SocialLink]: {
    text: string;
    href: string;
    icon: Icon;
  };
};

const linkNameToInfo: LinkNameToInfoType = {
  linkedin: {
    text: "/in/owengretzinger",
    href: "https://www.linkedin.com/in/owengretzinger/",
    icon: IconBrandLinkedin,
  },
  email: {
    text: "owengretzinger@gmail.com",
    href: "mailto:owengretzinger@gmail.com",
    icon: IconMail,
  },
  github: {
    text: "/owengretzinger",
    href: "https://github.com/owengretzinger",
    icon: IconBrandGithub,
  },
};

export default function SocialLink({ link }: { link: SocialLink }) {
  const SocialIcon = linkNameToInfo[link].icon;

  return (
    <Link
      href={linkNameToInfo[link].href}
      target="_blank"
      rel="noreferrer"
      className="group/link flex w-fit items-center gap-[4px] rounded-full border border-grey px-[10px] py-[4px] transition hover:border-darkTeal hover:bg-lightTeal/20"
    >
      <SocialIcon
        size={19}
        stroke={1.25}
        className="text-grey transition group-hover/link:-translate-y-0.5 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-0.5"
      />
      <p className="text-xs text-grey group-hover/link:text-darkTeal md:text-sm">
        {linkNameToInfo[link].text}
      </p>
    </Link>
  );
}
