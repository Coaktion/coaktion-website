/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDownIcon } from "../icons/chevron.icon";

type Props = {
  className: string;
  next: any;
};

export const NextSection = ({ className, next }: Props) => {
  return (
    <a
      href={next}
      className={`${className} bg-[#171717]  hover:bg-gray-800 p-2 gap-1 justify-center items-center rounded-lg flex border border-gray-600 transition ease-out delay-75`}
    >
      {/* <span className="text-gray-300 text-[14px] hover:text-white">
        Proximo
      </span> */}
      <ChevronDownIcon />
    </a>
  );
};
