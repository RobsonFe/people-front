import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from ".";
import { People } from "@/types/People";

//Listar Dados
const fetchData = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${API_URL}/list`, {
      params: {
        page,
        page_size: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Falha ao carregar os dados");
  }
};

// Hook para a mutação de listagem
export function usePeopleData(page = 1, pageSize = 10) {
  return useQuery({
    queryFn: () => fetchData(page, pageSize),
    queryKey: ["peopleList", page, pageSize],
  });
}

// Criar Dados
const createData = async (data: People) => {
  const create = await axios.post(`${API_URL}/create/`, data);
  return create;
};

// Hook para a mutação de criação
export function usePeopleMutation() {
  const mutate = useMutation({
    mutationFn: createData,
    mutationKey: ["peopleCreate"],
  });
  return mutate;
}

// Função para atualizar dados
const updateData = async (data: People) => {
  const response = await axios.put(`${API_URL}/update/${data.id}/`, data);
  return response.data;
};

// Hook para a mutação de atualização
export function useUpdatePeopleMutation() {
  const mutate = useMutation({
    mutationFn: updateData,
    mutationKey: ["peopleUpdate"],
  });
  return mutate;
}

// Função para deletar dados
const deleteData = async (id: string) => {
  await axios.delete(`${API_URL}/delete/${id}/`);
};

// Hook para a mutação de deleção
export function useDeletePeopleMutation() {
  const mutate = useMutation({
    mutationFn: deleteData,
    mutationKey: ["peopleDelete"],
  });
  return mutate;
}
