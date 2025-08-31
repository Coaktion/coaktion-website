type DotPaginationProps = {
  total: number;
  activeIndex: number;
};

export const DotPagination = ({ total, activeIndex }: DotPaginationProps) => {
  return (
    <div className="flex gap-3 cursor-pointer items-center justify-center mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`
            w-3 h-3 rounded-full border border-white
            ${i === activeIndex ? "bg-white" : "bg-transparent"}
            transition-all duration-300
          `}
        />
      ))}
    </div>
  );
};
