import Categoria from "./Categoria";

interface Produto{
  id: number;
  nome_produto: string;
  valor_produto: number;
  descricao_produto: string;
  fotoProduto: string;
  categorias?: Categoria|null;
}

export default Produto;