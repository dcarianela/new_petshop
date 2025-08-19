// src/components/ListaPosts.tsx

"use client";

import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";
import { useState } from "react";
import SemPosts from "./SemPosts";

type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  /* Gerando um novo array de categorias usando map e garantindo
  que não há repetição de categorias usando spread e new Set. */
  const categorias = [...new Set(posts.map((post) => post.categoria))];

  /* Definindo o state com tipos null (quando não há categoria selecionada)
  ou string (que é o tipo para nomes/textos referentes às categorias).
  Passamos null entre parênteses indicando que por padrão não há categoria selecionada. */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  /* Gerando uma nova lista de posts podendo ter
  o filtro de categoria aplicado. Caso contrário, retorna todos os posts. */
  const postsFiltrados = categoriaAtiva
    ? posts.filter((post) => post.categoria === categoriaAtiva)
    : posts;

  return (
    <>
      <FiltroCategorias
        categorias={categorias} // array de categorias
        categoriaAtiva={categoriaAtiva} // string/null da categoriaAtiva
        aoSelecionar={setCategoriaAtiva} // passa a função para atualizar o state
      />

      {/* Caso não tenha posts, renderiza SemPosts */}
      {postsFiltrados.length === 0 && <SemPosts />}

      <div className={estilos.posts}>
        {postsFiltrados.map(({ id, titulo, subtitulo }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <h3>{titulo}</h3>
              <p>{subtitulo}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
