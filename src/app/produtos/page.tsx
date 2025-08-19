// src/app/produtos/page.tsx
import Container from "@/components/Container";
import estilos from "./produtos.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Produtos disponíveis...",
};

export default function Produtos() {
  return (
    <section className={estilos.conteudo}>
      <h2>Produtos</h2>
      <Container>
        <p>
          Aqui você encontrará uma lista de produtos disponíveis no PetShop.
          Descubra tudo o que temos a oferecer para o seu pet!
        </p>

        <div className={estilos.produtos}>
          <article>
            <h3>Produtos em Destaque</h3>
            <ul>
              <li>Ração Premium para Cães</li>
              <li>Brinquedos Interativos para Gatos</li>
              <li>Acessórios de Higiene para Pets</li>
              <li>Suplementos Nutricionais</li>
            </ul>
            <p>
              Confira nossa seleção especial e cuide bem do seu amigo de quatro
              patas!
            </p>
          </article>

          <article>
            <h3>Novidades</h3>
            <p>
              Estamos sempre atualizando nosso estoque com os melhores produtos.
              Fique atento às novidades!
            </p>
            <ul>
              <li>Novas coleiras personalizadas</li>
              <li>Roupinhas para todas as estações</li>
              <li>Produtos ecológicos e sustentáveis</li>
            </ul>
          </article>

          <article>
            <h3>Promoções Especiais</h3>
            <p>
              Aproveite nossas promoções e descontos exclusivos. Visite nossa
              loja para mais detalhes!
            </p>
            <ul>
              <li>Desconto de 20% em rações selecionadas</li>
              <li>Compre 2, leve 3 em brinquedos</li>
              <li>Frete grátis em compras acima de R$100</li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
