import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";

interface IProduto {
  id: string;
  title: string;
}

interface HomeProps {
  produtosRecomendados: IProduto[];
}

export default function Home({ produtosRecomendados }: HomeProps) {
  return (
    <div>
      <section>
        <Title>Produtos</Title>
        <ul>
          {produtosRecomendados.map((produtos) => (
            <li key={produtos.id}>{produtos.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch("http://localhost:3333/recommended");
  const produtosRecomendados = await response.json();

  return {
    props: {
      produtosRecomendados,
    },
  };
};
