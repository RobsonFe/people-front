"use client";

import { Breadcrumb } from "flowbite-react";
import React from "react";
import ChartFour from "./ChartFour";
import ChartSeven from "./ChartSeven";
import ChartEight from "./ChartEight";
import ChartSix from "./ChartSix";
import ChartNine from "./ChartNine";
import ChartTwelve from "./ChartTwelve";

const AdvancedChart: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSeven />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartEight />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartNine />
        </div>

        <ChartTwelve />
      </div>
    </>
  );
};

export default AdvancedChart;
