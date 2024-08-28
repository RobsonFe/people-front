import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from ".";

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

export function usePeopleData(page = 1, pageSize = 10) {
  return useQuery({
    queryFn: () => fetchData(page, pageSize),
    queryKey: ["people", page, pageSize],
  });
}
