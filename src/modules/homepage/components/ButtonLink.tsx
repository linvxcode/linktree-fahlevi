"use client";

import clsx from "clsx";
import { useState } from "react";
import { BiRocket as RocketIcon } from "react-icons/bi";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

import { LinkProps } from "@/common/types/link";


const LINKS: LinkProps[] = [
  {
    label: "Portfolio",
    icon: <RocketIcon size={20} />,
    href: "https://personal-website-linvxcode.vercel.app/",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Github",
    icon: <GithubIcon size={20} />,
    href: "https://github.com/linvxcode",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon size={20} />,
    href: "https://www.instagram.com/viii_999_/?igshid=MzMyNGUyNmU2YQ%3D%3D",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Linkedin",
    icon: <LinkedinIcon size={20} />,
    href: "https://www.linkedin.com/in/m-fahlevi-921a1b26a/",
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
              "flex items-center overflow-hidden justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 w-60 transition-all duration-300   shadow-sm",
              item.className
            )}
            onClick={() => handleClick(item.href, item.target)}
          >
            <span className="flex justify-center items-center">
              {item.icon}
            </span>
            <span
              data-aos="zoom-in-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>


    </>
  );
};

export default ButtonLink;
