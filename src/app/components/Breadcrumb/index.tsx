"use client";

import { Breadcrumb } from "flowbite-react";
import BreadcrumbOne from "./BreadcrumbOne";
import BreadcrumbTwo from "./BreadcrumbTwo";
import BreadcrumbThree from "./BreadcrumbThree";

const Breadcrumbs: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="flex flex-col gap-7.5">
        <BreadcrumbOne />
        <BreadcrumbTwo />
        <BreadcrumbThree />
      </div>
    </>
  );
};

export default Breadcrumbs;
