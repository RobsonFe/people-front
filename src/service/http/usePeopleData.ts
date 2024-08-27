import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from ".";

const fetchData = async () => {
  const response = await axios.get(`${API_URL}/list`);
  return response?.data ?? [];
};

export function usePeopleData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["people"],
    refetchInterval: 20000,
  });
  return query;
}
