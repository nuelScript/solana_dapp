import { Solana } from "iconsax-react";
import Image from "next/image";

export const SwapToken = () => {
  return (
    <div className="w-[591px] h-[348px] flex flex-col gap-[20px] rounded-[32px] border border-[#515151] bg-[#00023380]/50 p-6">
      <h3 className="w-[114px] h-[24px] font-semibold text-base text-[#FFFFFF]">
        Swap Tokens
      </h3>
      <div className="w-[522px] h-[147px] flex gap-5 border-b border-[#51515199]/60 pb-4">
        <div className="w-[280px] h-[131px] flex items-center gap-5">
          <div className="w-[212px] h-[131px] flex flex-col gap-2">
            <div className="w-[123px] h-[32px] flex items-center gap-2">
              <h3 className="w-[59px] h-[21px] font-normal text-sm leading-[21px] text-[#FFFFFF]">
                Pay with
              </h3>
              <Image src="" alt="" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
