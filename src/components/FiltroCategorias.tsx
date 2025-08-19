// src/components/FiltroCategorias.tsx
import estilos from "./FiltroCategorias.module.css";

// Configurações para os tipos das props
type FiltroCategoriasProps = {
  // categorias: tem que ser uma string vinda do array de categorias
  categorias: string[];

  // categoriaAtiva: pode ser null (quando não tem filtro) ou string (nome da categoria)
  categoriaAtiva: null | string;

  // Esta prop, na verdade, funciona como uma função callback
  // Ela está diretamente ligada ao setCategoriaAtiva existente no componente pai (ListaPosts)
  // Por isso, ela precisa receber como parâmetro a categoria (ou null) e repassa este dado
  // para o setCategoriaAtiva. Usamos void pois ela não retorna nada.
  aoSelecionar: (categoria: null | string) => void;
};

export default function FiltroCategorias({
  categorias,
  categoriaAtiva,
  aoSelecionar,
}: FiltroCategoriasProps) {
  return (
    <div className={estilos.categorias}>
      {categorias.map((categoria) => (
        <button
          className={categoria === categoriaAtiva ? estilos.ativo : ""}
          key={categoria}
          onClick={() => aoSelecionar(categoria)}
        >
          {categoria}
        </button>
      ))}

      {categoriaAtiva && (
        <button onClick={() => aoSelecionar(null)} className={estilos.limpar}>
          Limpar
        </button>
      )}
    </div>
  );
}
