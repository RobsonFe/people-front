"use client";

import { Breadcrumb } from "flowbite-react";
import ChartPeopleTwo from "./ChartPeopleTwo";
import ChartPeopleThree from "./ChartPeopleThree";
import ChartPeople from "./ChartPeople";
import Loader from "../common/Loader";
import { useState } from "react";

const BasicChart: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Breadcrumb />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {loading ? (
          <Loader />
        ) : (
          <>
            <ChartPeople />
            <ChartPeopleTwo />
            <ChartPeopleThree />
          </>
        )}
      </div>
    </>
  );
};

export default BasicChart;
