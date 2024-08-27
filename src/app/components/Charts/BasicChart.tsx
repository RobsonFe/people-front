"use client";

import { Breadcrumb } from "flowbite-react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";

const BasicChart: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        {/* <ChartTwo /> */}
        {/* <ChartThree /> */}
      </div>
    </>
  );
};

export default BasicChart;
