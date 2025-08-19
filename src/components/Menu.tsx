"use client";

// src/components/Menu.tsx
import Link from "next/link";
import estilos from "./Menu.module.css";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  return (
    <nav className={estilos.menu}>
      <Link href="/" className={pathname === "/" ? estilos.ativo : ""}>
        Blog
      </Link>
      <Link
        href="/produtos"
        className={pathname === "/produtos" ? estilos.ativo : ""}
      >
        Produtos
      </Link>
      <Link
        href="/sobre"
        className={pathname === "/sobre" ? estilos.ativo : ""}
      >
        Sobre
      </Link>
      <Link
        href="/contato"
        className={pathname === "/contato" ? estilos.ativo : ""}
      >
        Contato
      </Link>
    </nav>
  );
}
