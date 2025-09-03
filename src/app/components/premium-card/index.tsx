/* eslint-disable @next/next/no-img-element */

export const PremiumCard = ({
  prize,
  highlighted = false,
}: {
  prize: { id: number; title: string; img: string };
  highlighted?: boolean;
}) => {
  const cardClasses = `
    flex-1 p-6 text-center
    rounded-xl
    max-h-[130px]
    ${highlighted ? "shadow-[0_0_24px_#C4009F] border border-[#C4009F]" : "border border-[#C4009F]"} 
    flex flex-col items-center justify-center gap-4
    min-h-[270px] backdrop-brightness-110
    ${highlighted ? "scale-105 z-50" : "z-10"}
  `;

  return (
    <div
      className={`flex w-full md:w-full px-6 py-6 items-center justify-center ${
        highlighted ? "z-20" : "z-10"
      } relative transition-transform duration-300`}
    >
      <div className={cardClasses}>
        <img
          src="/star.svg"
          alt="estrela"
          className="self-center md:w-24 h-16 w-16 md:h-24"
        />
        <h2 className="font-bold text-lg">{prize?.title}</h2>
        <img
          src={prize?.img}
          alt={prize?.title}
          className={"self-center h-[36px] mt-8 md:h-[36px]"}
        />
      </div>
    </div>
  );
};
