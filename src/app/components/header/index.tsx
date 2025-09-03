import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  pathToResource: string;
};

export const Header = ({ pathToResource }: Props) => {
  const t = useTranslations("Texts");
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full min-h-[80px] py-6 px-4 md:px-4 lg:px-32 bg-black">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={pathToResource}>
          <div>
            <Image
              src="/logo-co-aktion.svg"
              alt="Logo"
              className="md:h-10 h-6 w-auto"
              width={120}
              height={40}
            />
          </div>
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-white rounded transition-all" />
        </button>

        {/* Links (desktop only) */}
        <nav className="hidden md:flex gap-6 items-center">
          <a
            href="https://coaktion.inhire.app/vagas"
            target="_blank"
            className="text-white text-sm md:text-[16px] hover:text-[#C4009F] transition duration-300 ease-out"
          >
            {t("navWorkWithUs")}
          </a>
          <Link
            href="/contato"
            className="text-white text-sm md:text-[16px] hover:text-[#C4009F] transition duration-300 ease-out"
          >
            {t("navContact")}
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-black px-4 py-4 flex flex-col gap-5 absolute top-[80px] left-0 w-full z-50 shadow-lg">
          <a
            href="https://coaktion.inhire.app/vagas"
            target="_blank"
            className="text-white text-base border p-2 transition duration-300 ease-out"
            onClick={() => setOpen(false)}
          >
            {t("navWorkWithUs")}
          </a>
          <Link
            href="/contato"
            className="text-white text-base border p-2 transition duration-300 ease-out"
            onClick={() => setOpen(false)}
          >
            {t("navContact")}
          </Link>
        </nav>
      )}
    </header>
  );
};
