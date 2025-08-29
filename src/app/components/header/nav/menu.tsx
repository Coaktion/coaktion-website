/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import { MenuIcon } from "../../icons/menu";
import { useTranslations } from "next-intl";

type Props = {
  navHover: { socials: boolean; menu: boolean };
  setNavHover: (hoverOptions: { socials: boolean; menu: boolean }) => void;
};

export const Menu = ({ navHover, setNavHover }: Props) => {
  const t = useTranslations("Header");
  const handleHover = (e: any) => {
    e.stopPropagation();
    setNavHover({ ...navHover, menu: true, socials: false });
  };

  const handleLeave = (type: string, e: any) => {
    e.stopPropagation();
    setNavHover({ ...navHover, [type]: false });
  };

  return (
    <div className="relative p-4">
      {/* Navigation Trigger */}
      {/* <div className="text-gray-300 font-light cursor-pointer">Navegação</div> */}
      <div
        onMouseEnter={handleHover}
        className=" flex items-center gap-2 text-gray-300 font-light cursor-pointer"
      >
        <MenuIcon tClass="w-5 h-5 font-light text-gray-300" />
        <span className="hidden md:inline">{t("navigation")}</span>
      </div>

      {/* Dropdown Menu */}
      {navHover.menu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onMouseLeave={(e) => handleLeave("menu", e)}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute left-0 top-full mt-2 md:w-28 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50"
        >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="#landing"
                className="text-gray-300 font-light md:text-[14px]  cursor-pointer hover:text-primary-500"
              >
                Landing
              </a>
            </li>
            <li>
              <a
                href="#bio"
                className="text-gray-300 font-light md:text-[14px]  cursor-pointer hover:text-primary-500"
              >
                Bio
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 font-light md:text-[14px] cursor-pointer hover:text-primary-500"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#goals"
                className="text-gray-300 font-light  md:text-[14px] cursor-pointer hover:text-primary-500"
              >
                Experiência
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};
