// Generated with Ion on 11/6/2024, 8:43:33 AM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1629:4101
"use client";
import { CurrencyDollar, Star } from "@phosphor-icons/react/dist/ssr";
import { SparkAreaChart } from "@tremor/react";
import clsx from "clsx";
import { type MouseEvent } from "react";

import Button from "@/components/ion/Button";
type BuyCardProps = {
  asset?: string;
  marketCap?: string;
  confidence?: string;
  weekGain?: string;
  trend?: "positive" | "negative";
  className?: string;
};

function BuyCard({
  asset = "Ethereum",
  marketCap = "297.52B",
  confidence = "40%",
  weekGain = "2.30%",
  trend = "positive",
  className = "",
}: BuyCardProps) {
  function buyClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("buyClickHandler fired");
  }
  function moreInfoClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("moreInfoClickHandler fired");
  }
  function starOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("starOnClickHandler fired");
  }

  return (
    <div
      className={clsx(
        "bg-white w-[400px] flex flex-col gap-6 p-5 rounded-[10px] border border-[#d2d7e1]",
        className
      )}
    >
      <div className="w-full flex justify-between items-start">
        <div className="w-fit flex items-start gap-3">
          <div className="bg-[#ecf0ff] h-12 w-12 flex justify-center items-center rounded-2xl">
            <CurrencyDollar size={32} weight={"bold"} />
          </div>
          <div className="w-fit flex flex-col">
            <div className="text-xl font-semibold text-[#0b0707]">{asset}</div>
            <div className="w-fit flex items-start gap-1 text-sm text-[#384355]">
              <div>{confidence}</div>
              <div>Confidence</div>
            </div>
          </div>
        </div>
        <Button
          iconLeading={<Star size={20} weight={"fill"} />}
          variant="ghost"
          color="neutral"
          size="lg"
          onClick={starOnClickHandler}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-fit flex flex-col gap-2">
          <div className="w-fit flex items-start gap-2 text-sm text-[#60718f]">
            <div>{marketCap}</div>
            <div>Market Cap</div>
          </div>
          <div
            className={clsx({
              "text-4xl font-semibold": true,
              "text-[#006c4c]": trend === "positive",
              "text-[#b91a24]": trend === "negative",
            })}
          >
            {weekGain}
          </div>
          <div className="text-xs text-[#384355]">1 week</div>
        </div>
        <SparkAreaChart
          data={[
            {
              month: "Jan 21",
              Performance: 4000,
            },
            {
              month: "Feb 21",
              Performance: 3000,
            },
            {
              month: "Mar 21",
              Performance: 2000,
            },
            {
              month: "Apr 21",
              Performance: 2780,
            },
            {
              month: "May 21",
              Performance: 1890,
            },
            {
              month: "Jun 21",
              Performance: 2390,
            },
            {
              month: "Jul 21",
              Performance: 3490,
            },
          ]}
          colors={["green"]}
          index={"date"}
          categories={["Performance", "Benchmark"]}
        />
      </div>
      <div className="w-full flex items-start gap-5">
        <Button
          variant="soft"
          color="primary"
          size="md"
          onClick={moreInfoClickHandler}
          className="w-full"
        >
          More Info
        </Button>
        <Button
          variant="filled"
          color="primary"
          size="md"
          onClick={buyClickHandler}
          className="w-full"
        >
          Buy
        </Button>
      </div>
    </div>
  );
}
export default BuyCard;
