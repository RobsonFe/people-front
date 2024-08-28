import axios from "axios";
import { API_URL } from "./http";
import { People } from "@/types/People";
import { useMutation } from "@tanstack/react-query";

const createData = async (data: People) => {
  const create = await axios.post(`${API_URL}/create/`, data);
  return create;
};

export function usePeopleMutation() {
  const mutate = useMutation({
    mutationFn: createData,
    mutationKey: ["people"],
  });
  return mutate;
}
