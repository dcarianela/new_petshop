// src/components/Cabecalho.tsx
import Link from "next/link";
import Menu from "./Menu";
import estilos from "./Cabecalho.module.css";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Patinha dentro de um coração"
              width={48}
              height={48}
            />
            PetShop
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
}
