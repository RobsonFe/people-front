import { usePeopleMutation } from "@/service/http/usePeopleData";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { inputs } from "@/types/Inputs";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputs>();

  const { mutate } = usePeopleMutation();

  const onSubmit = async (data: inputs) => {
    try {
      await mutate(data);
      console.log("Dados Salvos: ", data);
      toast.success("Registrado com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      toast.error("Erro ao preencher o Formulário");
    }
  };

  return (
    <div className="contain-layout mt-5 py-10">
      <h1 className="mt-6 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Registro de Colabrador
      </h1>
      <form
        className="max-w-sm mx-auto py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="João Silva"
            {...register("nome", { required: "Nome é obrigatório" })}
            className={`bg-gray-50 border ${
              errors.nome ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.nome && (
            <span className="text-red-500 text-sm">{errors.nome.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Seu E-mail
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: "Endereço de email inválido",
              },
            })}
            className={`bg-gray-50 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="name@email.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="idade"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Idade
          </label>
          <input
            type="number"
            id="idade"
            placeholder="30"
            {...register("idade", {
              required: "Idade é obrigatória",
              min: { value: 18, message: "Idade mínima é 18" },
              max: { value: 99, message: "Idade máxima é 99" },
            })}
            className={`bg-gray-50 border ${
              errors.idade ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.idade && (
            <span className="text-red-500 text-sm">{errors.idade.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="profissao"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Profissão
          </label>
          <input
            type="text"
            id="profissao"
            placeholder="Desenvolvedor"
            {...register("profissao", { required: "Profissão é obrigatória" })}
            className={`bg-gray-50 border ${
              errors.profissao ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.profissao && (
            <span className="text-red-500 text-sm">
              {errors.profissao.message}
            </span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="salario"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Salário
          </label>
          <input
            type="number"
            id="salario"
            placeholder="Salário"
            {...register("salario", { required: "Salário é obrigatório" })}
            className={`bg-gray-50 border ${
              errors.salario ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.salario && (
            <span className="text-red-500 text-sm">
              {errors.salario.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Registrar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
