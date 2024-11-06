// Generated with Ion on 11/5/2024, 7:52:14 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1:10602
"use client";
import {
  ArrowDown,
  ArrowUp,
  CalendarBlank,
  CaretDown,
  CurrencyDollar,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { LineChart } from "@tremor/react";
import { type MouseEvent, useState } from "react";

import Badge from "@/components/ion/Badge";
import Button from "@/components/ion/Button";
import Datepicker from "@/components/ion/Datepicker";
import Input from "@/components/ion/Input";
import SideNavigation from "@/components/ion/SideNavigation";
import { Tab, Tabs, TabsList } from "@/components/ion/Tabs";
import TokenMetric from "@/components/ion/TokenMetric";

function DashboardExample() {
  const [inputValue, setInputValue] = useState("");

  function buyClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("buyClickHandler fired");
  }

  return (
    <div className="bg-white w-[1200px] flex">
      <SideNavigation />
      <div className="bg-white flex-1 w-full flex flex-col gap-5 p-10">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit flex items-center gap-5">
            <div className="bg-[#1e242e] w-fit flex flex-col justify-center items-center p-2.5 rounded">
              <img
                src="/images/dashboard-example/Logo-1-10607.svg"
                alt="Logo"
                className="h-4 w-4"
              />
            </div>
          </div>
          <div className="w-fit flex items-center gap-5">
            <Input
              placeholder="Search"
              iconLeading={<MagnifyingGlass size={16} weight={"bold"} />}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[250px]"
            />
            <Button
              iconLeading={<CurrencyDollar size={16} weight={"bold"} />}
              variant="filled"
              color="primary"
              size="md"
              onClick={buyClickHandler}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="w-fit flex items-start gap-5">
          <TokenMetric
            metric="$1.35b"
            badge={
              <Badge
                iconLeading={<ArrowUp size={12} weight={"bold"} />}
                variant="soft"
                color="green"
                size="md"
              >
                8.23%
              </Badge>
            }
            title="Volume 24H"
          />
          <TokenMetric
            metric="$4.56"
            badge={
              <Badge
                iconLeading={<ArrowDown size={12} weight={"bold"} />}
                variant="soft"
                color="red"
                size="md"
              >
                4.28%
              </Badge>
            }
            title="TVL"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="text-lg font-semibold text-[#0b0707]">Overview</div>
          <div className="bg-white w-full flex flex-col items-center gap-5 p-5 rounded-lg border border-[#d2d7e1]">
            <div className="w-full flex justify-between items-center">
              <div className="w-fit flex flex-col justify-center">
                <div className="text-sm text-[#60718f]">TVL</div>
                <div className="text-3xl font-semibold text-[#0b0707]">
                  $2.54b
                </div>
              </div>
              <div className="w-fit flex items-start gap-5">
                <Datepicker
                  iconTrailing={<CaretDown size={16} weight={"bold"} />}
                  iconLeading={<CalendarBlank size={16} weight={"regular"} />}
                  className="w-[250px]"
                />
                <Tabs defaultValue="D">
                  <TabsList>
                    <Tab value="D">D</Tab>
                    <Tab value="W">W</Tab>
                    <Tab value="M">M</Tab>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <LineChart
              valueFormatter={(number) =>
                `$${Intl.NumberFormat().format(number).toString()}`
              }
              index={"number"}
              data={[
                {
                  number: 1,
                  Ether: 164,
                  USDC: 184,
                },
                {
                  number: 2,
                  Ether: 292,
                  USDC: 294,
                },
                {
                  number: 3,
                  Ether: 295,
                  USDC: 295,
                },
                {
                  number: 4,
                  Ether: 356,
                  USDC: 472,
                },
                {
                  number: 5,
                  Ether: 590,
                  USDC: 555,
                },
              ]}
              categories={["Ether", "USDC"]}
              yAxisWidth={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardExample;
