import { SearchNormal1 } from "iconsax-react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-between z-50 pb-[0.5px] bg-gradient-to-r from-[#8084FF00] via-[#000AFF] to-[#4D4F9900]">
      <div className="flex justify-between bg-[#000355] w-full px-[100px] py-[12px]">
        <div className="flex items-center w-[214px] h-[56px] gap-1">
          <div className="h-[55px] w-[56px] p-2 flex items-center justify-center bg-[#000AFF] rounded-2xl">
            <h3 className="font-bold text-[32px] leading-[48px] text-white">
              Ss
            </h3>
          </div>
          <h3 className="font-semibold text-2xl leading-9 text-white">
            Solana
            <span className="font-normal italic text-2xl leading-9 p-0">
              Swap
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-[16px] w-[124px] h-[40px]">
          <SearchNormal1 size="32" color="#FFFFF" />
        </div>
      </div>
    </div>
  );
};
