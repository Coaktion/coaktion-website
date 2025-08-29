"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX, startTransition } from "react";
import { ChevronDownIcon } from "../icons/chevron.icon";
import { ChevronUpIcon } from "../icons/chevron-up.icon";
import Image from "next/image";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/app/utils/locale";

interface Options {
  imgLink?: string;
  name: string;
}
interface Props {
  options: Options[];
  value: any;
}

export const CountrySelect = ({ options, value }: Props): JSX.Element => {
  const [openDropDown, setOpenDropDown] = React.useState(false);

  const flag = options.find(
    (option) => option.name.toLowerCase() === value,
  ) as Options;
  const optionsButSelected = options.filter((option) => option.name !== value);

  function onChange(option: Options) {
    const locale = option.name.toLowerCase() as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative w-12 md:w-28">
      <div
        className="flex items-center justify-between bg-gray-800 p-1 md:p-2 rounded-lg border border-gray-600 cursor-pointer hover:border-[#C4009F]"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        {flag && (
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full w-4 h-4 md:w-6 md:h-6"
              width={24}
              height={24}
              alt={flag.name}
              src={flag.imgLink || ""}
            />
            <span className="text-gray-300 hidden md:block">{flag.name}</span>
          </div>
        )}
        <button className="text-[#A30084] hidden md:block hover:text-[#C4009F]">
          {openDropDown ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>

      {optionsButSelected.length > 0 && openDropDown && (
        <div className="absolute bg-gray-900 border border-gray-700 rounded-lg shadow-lg mt-2 w-full z-50 max-h-60 overflow-y-auto">
          <div className="flex flex-col">
            {optionsButSelected.map((option, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 hover:bg-[#C4009F] hover:text-white cursor-pointer transition-colors"
                onClick={() => {
                  onChange(option);
                  setOpenDropDown(false);
                }}
              >
                {option.imgLink && (
                  <Image
                    className="rounded-full w-4 h-4 md:w-6 md:h-6"
                    width={24}
                    height={24}
                    alt={option.name}
                    src={option.imgLink || ""}
                  />
                )}
                <span className="text-gray-300 hidden md:block">
                  {option.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
