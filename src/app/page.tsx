// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import { Post } from "@/types/Post";
import SemPosts from "@/components/SemPosts";

export default async function Home() {
  const resposta = await fetch(`http://localhost:2112/posts`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar os posts: " + resposta.statusText);
  }

  const posts: Post[] = await resposta.json();

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>

      {/* Renderização condicional */}
      {posts.length === 0 ? <SemPosts /> : <ListaPosts posts={posts} />}
    </section>
  );
}
