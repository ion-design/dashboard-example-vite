// Generated with Ion on 11/5/2024, 7:43:17 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1583:3137
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

import Badge from "@/components/ion/Badge";
import BuyCard from "@/components/ion/BuyCard";
import SideNavigation from "@/components/ion/SideNavigation";
import TokenMetric from "@/components/ion/TokenMetric";

function BuyExample() {
  return (
    <div className="bg-white h-[716px] w-[1200px] flex">
      <SideNavigation />
      <div className="bg-white flex-1 h-full w-full flex flex-col gap-5 p-10">
        <div className="w-fit flex items-center gap-5">
          <div className="bg-[#1e242e] w-fit flex flex-col justify-center items-center p-2.5 rounded">
            <img
              src="/images/buy-example/Logo-1629-3916.svg"
              alt="Logo"
              className="h-4 w-4"
            />
          </div>
        </div>
        <TokenMetric
          metric="$52,035"
          badge={
            <Badge
              iconLeading={<ArrowUp size={12} weight={"bold"} />}
              variant="soft"
              color="green"
              size="md"
            >
              16%
            </Badge>
          }
          title="Portfolio"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="text-lg font-semibold text-[#0b0707]">Assets</div>
          <div className="w-full flex flex-wrap items-start gap-10">
            <BuyCard
              asset="Ethereum"
              confidence="40%"
              marketCap="297.52B"
              weekGain="2.30%"
              trend="positive"
            />
            <BuyCard
              weekGain="4.23%"
              marketCap="1.41T"
              confidence="36%"
              asset="Bitcoin"
              trend="positive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyExample;
