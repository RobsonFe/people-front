"use client";

import { Breadcrumb } from "flowbite-react";
import ChartPeopleTwo from "./ChartPeopleTwo";
import ChartPeopleThree from "./ChartPeopleThree";

const BasicChart: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartPeopleTwo />
        <ChartPeopleThree />
      </div>
    </>
  );
};

export default BasicChart;
