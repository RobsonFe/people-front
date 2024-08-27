import BasicChart from "../components/Charts/BasicChart";

export default function Charts() {
  return (
    <>
      <h1 className="mt-6 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Gráficos
      </h1>
      <div className="contain-layout">
        <BasicChart />
      </div>
    </>
  );
}
