interface Props {
  params: { ID: string };
}

export default function TabelaDinamica({ params }: Props) {
  return (
    <>
      <h1 className="container bg-white">ID:{params.ID} </h1>
    </>
  );
}
