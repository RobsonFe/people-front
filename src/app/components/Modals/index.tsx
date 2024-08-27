"use client";

import ModalOne from "./ModalOne";
import ModalTwo from "./ModalTwo";
import ModalThree from "./ModalThree";
import { Breadcrumb } from "flowbite-react";

const Modals: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap justify-center gap-5">
          <ModalOne />
          <ModalTwo />
          <ModalThree />
        </div>
      </div>
    </>
  );
};

export default Modals;
