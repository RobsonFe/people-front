"use client";

import DataTablePeople from "../components/DataTables/DataTablePeople";

export default function Table() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        Tabela de Dados
      </h1>
      <DataTablePeople />
    </div>
  );
}
