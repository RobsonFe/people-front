"use client";
import ChartPeople from "../components/Charts/ChartPeople";

export default function Greetings() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Tanstack Query
          </h1>
          <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 ">
            Aplicação de Teste com React Query
          </p>
          <ChartPeople />
        </div>
      </section>
    </>
  );
}
