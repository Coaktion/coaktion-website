export const StickFooter: React.FC = () => {
  return (
    <div className="bottom-0 w-full max-h-[88px] bg-[#0a0a0a] flex justify-center items-center mt-6">
      <div className="relative overflow-hidden p-4 w-full h-full flex items-center justify-center text-gray-400 text-sm">
        <span>© {new Date().getFullYear()}All Rights Reserved By Coaktion</span>
        <div className="flex flex-row space-x-6 sm:space-x-12 md:space-x-16 text-sm sm:text-lg">
        </div>
      </div>
    </div>
  );
};
