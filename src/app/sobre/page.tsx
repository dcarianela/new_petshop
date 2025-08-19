// src/app/sobre/page.tsx
import Container from "@/components/Container";
import estilos from "./sobre.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Missão, visão e valores...",
};

export default function Sobre() {
  return (
    <section className={estilos.conteudo}>
      <h2>Sobre</h2>
      <Container>
        <h3>Missão</h3>
        <p>
          Nossa missão é proporcionar o melhor cuidado e bem-estar para os
          animais de estimação, oferecendo produtos e serviços de alta qualidade
          que atendam às necessidades dos nossos clientes e seus pets.
        </p>
        <h3>Visão</h3>
        <p>
          Nossa visão é ser reconhecida como a principal referência em cuidados
          para animais de estimação, promovendo a saúde, felicidade e
          longevidade dos nossos amigos de quatro patas.
        </p>
        <h3>Valores</h3>
        <p>
          Nossos valores incluem amor pelos animais, compromisso com a
          qualidade, respeito ao meio ambiente e dedicação ao atendimento ao
          cliente.
        </p>
      </Container>
    </section>
  );
}
