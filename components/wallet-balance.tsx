import { Eye } from "iconsax-react";

export const WalletBalance = () => {
  return (
    <div className="w-[400px] h-[348px] rounded-[48px] border border-[#515151] p-[24px] flex flex-col gap-6 bg-[#00023380]/50 z-50">
      <div className="w-[259px] h-[124px] flex flex-col gap-3">
        <div className="flex gap-2 w-[115px] h-[18px]">
          <h3 className="font-normal text-[12px] leading-[18px] w-[91px] h-[18px] text-white">
            Wallet balance
          </h3>
          <Eye className="w-4 h-4" color="#ffffff" />
        </div>
      </div>
    </div>
  );
};
