export interface People {
  id?: number;
  nome: string;
  email: string;
  idade: number;
  profissao: string;
  salario: number;
}
export interface PeopleResponse {
  data: People[];
}
