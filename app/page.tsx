import { Details } from "@/components/details";
import { Navbar } from "@/components/navbar";
import { SwapToken } from "@/components/swap-tokens";
import { WalletBalance } from "@/components/wallet-balance";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 bg-[#000355] h-full">
      <Navbar />
      <div className="fixed left-[1500px] top-[-150px] opacity-80 bg-[#000AFF] w-[540px] h-[540px] rounded-full animate-blob blur-[200px]" />
      <div className="fixed top-[450px] left-[-50px] opacity-80 bg-[#000AFF] w-[540px] h-[540px] rounded-full animate-blob blur-[200px]" />
      <div className="w-full h-full flex items-center flex-col">
        <div className="w-[1011px] h-[616px] flex flex-col items-center gap-8">
          <Details />
          <div className="w-[1011px] h-[348px] flex gap-[20px]">
            <WalletBalance />
            <SwapToken />
          </div>
        </div>
      </div>
    </div>
  );
}
