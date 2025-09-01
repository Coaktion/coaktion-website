type DotPaginationProps = {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
};

export const DotPagination = ({
  total,
  activeIndex,
  onDotClick,
}: DotPaginationProps) => {
  return (
    <div className="flex gap-3 cursor-pointer items-center justify-center mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          onClick={() => onDotClick(i)}
          className={`
            w-4 h-4 rounded-full border border-white
            ${i === activeIndex ? "bg-white" : "bg-transparent"}
            transition-all duration-300
          `}
        />
      ))}
    </div>
  );
};
