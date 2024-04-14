import { Eye } from "iconsax-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const WalletBalance = () => {
  return (
    <div className="w-[400px] h-[348px] rounded-[48px] border border-[#515151] px-[26px] py-[40px] flex flex-col gap-6 bg-[#00023380]/50 z-50">
      <div className="w-[259px] h-[124px] flex flex-col gap-3">
        <div className="flex gap-2 w-[115px] h-[18px]">
          <h3 className="font-normal text-[12px] leading-[18px] w-[91px] h-[18px] text-white">
            Wallet balance
          </h3>
          <Eye className="w-4 h-4" color="#ffffff" />
        </div>
        <p className="font-normal text-[#F3F3F3] text-[40px] leading-[60px] w-[259px] h-[60px]">
          $000,000,000
        </p>
        <div className="flex items-center w-[101px] h-[22px] border border-[#A2A2A2] rounded-[90px] gap-[7px] p-0 pl-2">
          <span className="w-[48px] h-[18px] text-[#FFFFFF] font-normal text-xs leading-[18px]">
            +3.4599
          </span>
          <div className="w-[37px] h-[22px] rounded-[90px] pt-[2px] pr-1 pb-[2px] gap-[10px] pl-1 border border-[#DBDBDB] font-normal text-[#DBDBDB] text-xs leading-[18px]">
            <p className="w-[29px] h-[18px]">+12%</p>
          </div>
        </div>
      </div>
      <Button className="w-[352px] h-[64px] rounded-[200px] px-[24px] py-[12px] bg-[#000AFF] flex items-center gap-2">
        {" "}
        <div className="w-[40px] h-[40px] flex items-center justify-center gap-[10px] rounded-[900px] p-2 bg-[#0009E8]">
          <Image
            src="/connect.svg"
            alt="connect"
            className="fill"
            width={24}
            height={24}
          />
        </div>
        <span className="w-[123px] h-[24px] font-semibold text-base ">
          Connect Wallet
        </span>
      </Button>
      <div className="w-[272px] h-[47px] font-normal text-sm leading-[21px] text-[#A2A2A2]">
        Connect your wallet to start swapping on SolanaSwap, no hidden fees.
      </div>
    </div>
  );
};
