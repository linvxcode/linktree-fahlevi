"use client";

import clsx from "clsx";
import { useState } from "react";
import { BiRocket as RocketIcon } from "react-icons/bi";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

import BottomSheet from "@/common/components/BottomSheet";
import { LinkProps } from "@/common/types/link";

import BuyACoffee from "./BuyACoffee";

const LINKS: LinkProps[] = [
  {
    label: "Website & Portfolio",
    icon: <RocketIcon size={20} />,
    href: "https://personal-website-linvxcode.vercel.app/",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Github",
    icon: <GithubIcon size={20} />,
    href: "https://personal-website-linvxcode.vercel.app/",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon size={20} />,
    href: "https://personal-website-linvxcode.vercel.app/",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Linkedin",
    icon: <LinkedinIcon size={20} />,
    href: "https://personal-website-linvxcode.vercel.app/",
    className: "bg-white",
    target: "_blank",
  },
];

const ButtonLink = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleClick = (url: string, target: string | undefined) => {
    if (url !== "#") {
      window.open(url, target);
    } else {
      setBottomSheetOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-col  gap-3 items-center justify-center py-3">
        {LINKS?.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "flex items-center justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 transition-all duration-300 w-60  shadow-sm",
              item.className,
            )}
            onClick={() => handleClick(item.href, item.target)}
          >
            {item.icon}
            <span >{item.label}</span>
          </button>
        ))}
      </div>

      {/* <BottomSheet
        key={isBottomSheetOpen ? "bottom-sheet-open" : "bottom-sheet-closed"}
        title="Buy me a Coffee"
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <BuyACoffee />
      </BottomSheet> */}
    </>
  );
};

export default ButtonLink;
