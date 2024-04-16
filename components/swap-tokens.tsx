import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SwapToken = () => {
  return (
    <div className="w-[591px] h-[348px] flex flex-col gap-[20px] rounded-[32px] border border-[#515151] bg-[#00023380]/50 p-6 z-50">
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
              <Image src="/Sollet.svg" alt="solana" width={32} height={32} />
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[543px] h-[89px] flex flex-col gap-2">
        <h3 className="w-[96px] h-[21px] font-normal text-sm ledaing-[21px] text-[#FFFFFF]">
          Enter Address
        </h3>
        <div className="w-[543px] h-[60px] flex items-center gap-4">
          <Input
            placeholder="Enter/paste Solana address"
            className="w-[291px] h-[56px] flex items-center gap-[10px] rounded-[90px] border text-white p-4 border-[#A2A2A2]/70 bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
          <Button className="w-[236px] h-[60px] flex items-center gap-[8px] rounded-[200px] py-3 px-4 bg-[#000AFF]">
            <div className="w-[40px] h-[40px] flex items-center justify-center gap-[10px] rounded-[900px] p-2 bg-[#0009E8]">
              <Image
                src="/arrow-data.svg"
                alt="connect"
                className="fill"
                width={24}
                height={24}
              />
            </div>
            <span className="w-[147px] h-[21px] font-semibold text-sm leading-[21px]">
              Approve token swap
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
