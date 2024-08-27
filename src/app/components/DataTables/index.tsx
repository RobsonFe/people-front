"use client";

import { Breadcrumb } from "flowbite-react";
import React from "react";
import DataTableOne from "./DataTableOne";
import DataTableTwo from "./DataTableTwo";

const DataTables: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <DataTableOne />
        <DataTableTwo />
      </div>
    </>
  );
};

export default DataTables;
