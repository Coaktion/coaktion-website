import Image from "next/image";
import { CountrySelect } from "../language-select";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  pathToResource: string;
};
export const Header = ({ pathToResource }: Props) => {
  const locale = useLocale();

  const t = useTranslations("Texts");
  const options = [
    { name: "PT", imgLink: "/brazil.svg" },
    { name: "EN", imgLink: "/usa.svg" },
  ];
  return (
    <header className="w-full py-6 px-4 md:px-4 lg:px-32 bg-black">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={pathToResource}>
          <div>
            <Image
              src="/logo-co-aktion.svg"
              alt="Logo"
              className="md:h-10  h-6 w-auto"
              width={120}
              height={40}
            />
          </div>
        </Link>

        {/* Links */}
        <nav className="flex gap-6 items-center">
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
          <CountrySelect options={options} value={locale} />
        </nav>
      </div>
    </header>
  );
};
