"use client";
import MP from "../../../../public/mp-dark.png";
import BR from "../../../../public/brazil.svg";
import US from "../../../../public/usa.svg";

import Image from "next/image";
import React from "react";
import { CountrySelect } from "../language-select";
import Link from "next/link";
import RandomLetterSwapForward from "../fancy/letter-swap-hover";
import { SocialNav } from "./nav/social";
import { Menu } from "./nav/menu";
import { useLocale } from "next-intl";

type Props = {
  navHover: { socials: boolean; menu: boolean };
  setNavHover: (hoverOptions: { socials: boolean; menu: boolean }) => void;
};

export const Header = ({ navHover, setNavHover }: Props) => {
  const locale = useLocale();
  const options = [
    { name: "PT", imgLink: BR },
    { name: "EN", imgLink: US },
  ];

  return (
    <header className="flex justify-center md:h-[92px] w-full py-0 px-0 md:px-16 border-b border-gray-700/50">
      <div className="w-full flex flex-wrap px-0 md:px-12 items-center justify-between">
        {/* Logo And "Web Developer" */}
        <div className="flex items-center space-x-4 min-w-[120px] md:min-w-[200px]">
          <Link href="/mp">
            <Image
              src={MP}
              alt="MP"
              className="md:w-[110px] md:h-[110px] w-12 h-12 cursor-pointer"
            />
          </Link>
          <RandomLetterSwapForward
            className="text-gray-300 text-xs md:text-xl font-light"
            label="Web Developer"
          />
        </div>

        <div className="flex">
          <Menu navHover={navHover} setNavHover={setNavHover} />
          <SocialNav navHover={navHover} setNavHover={setNavHover} />
        </div>

        {/* Icons and Language Selector */}
        <div className="flex flex-row items-center mr-6 md:mr-0 gap-4 md:gap-8 md:mt-0">
          {/* Country Select */}
          <CountrySelect value={locale} options={options} />
        </div>
      </div>
    </header>
  );
};
