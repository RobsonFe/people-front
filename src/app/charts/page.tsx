"use client";
import ChartPeople from "../components/Charts/ChartPeople";

export default function Charts() {
  return (
    <>
      <h1 className="mt-6 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Gráficos
      </h1>
      <div className="container mx-auto px-4">
        <ChartPeople />
      </div>
    </>
  );
}
