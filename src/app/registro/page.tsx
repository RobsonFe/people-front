"use client";
import { useState } from "react";

export default function Registro() {
  const [data, setData] = useState({
    nome: "",
    email: "",
    idade: "",
    profissao: "",
    salario: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dados = (e: any) => {
    e.preventDefault();
    console.log("Dados Salvos: ", data);
  };

  return (
    <div className="contain-layout mt-5 py-10">
      <h1 className="mt-6 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Registro
      </h1>
      <form className="max-w-sm mx-auto py-10" onSubmit={dados}>
        <div className="mb-5">
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="João Ninguém"
            value={data.nome}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seu E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@email.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="idade"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Idade
          </label>
          <input
            type="text"
            id="idade"
            name="idade"
            placeholder="30"
            value={data.idade}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="profissao"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profissão
          </label>
          <input
            type="text"
            id="profissao"
            name="profissao"
            placeholder="Desenvolvedor"
            value={data.profissao}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="salario"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Salário
          </label>
          <input
            type="text"
            id="salario"
            name="salario"
            placeholder="Salário"
            value={data.salario}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
