"use client";

import { ProdutosMock } from "@/app/shared/mock/Produtos.mock";
import { ProdutosType } from "@/app/shared/types/ProdutosType";
import { useParams } from "next/navigation";
import { Button, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import DetalheProduto from "@/app/components/Skeleton/DetalheProduto";

export default function detalhe() {
  const prod: ProdutosType[] = ProdutosMock;
  const [produto, setProduto] = useState<Array<ProdutosType>>([]);
  const router = useParams<{ produtoid: string }>();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findProduto = prod.filter(function (value, key) {
      return value.id == parseInt(router.produtoid);
    });
    if (findProduto) {
      console.log(findProduto);
      setIsLoading(false);
      setProduto(findProduto);
    }
  }, []);

  const calcPreco = () => {
    console.log("ola");
  };

  const adicionar = () => {
    let number = count + 1;
    setCount(number);
    calcPreco();
  };
  const remover = () => {
    if (count > 0) {
      let number = count - 1;
      setCount(number);
      calcPreco();
    }
  };

  return (
    <div className="p-[20px]">
      <div>
        <Link href="/page/home">
          <Image
            src={"/voltar.png"}
            alt="voltar"
            width={30}
            height={30}
          ></Image>
        </Link>
      </div>
      <div className="mt-4">
        {isLoading ? (
          <DetalheProduto></DetalheProduto>
        ) : (
          <div>
            <div className="flex justify-center items-center bg-[#fff] rounded-medium pt-4 pb-4 h-[385px]">
              <Image
                src={produto[0].imagem.url}
                alt="produto"
                width={produto[0].imagem.detalhes.width}
                height={produto[0].imagem.detalhes.height}
              ></Image>
            </div>
            <div className="mt-3">
              <div className="text-[1.2em]">
                <strong>{produto[0].descricao}</strong>
              </div>
              <div className="text-[1.3em] font-bold text-[#FBA834]">
                {produto[0].preco}
              </div>
              <div>
                {produto[0].parcelado == ""
                  ? "Somente avista"
                  : produto[0].parcelado}
              </div>
            </div>
            <div>
              <div className="w-[100%] border-1 border-[#FBA834] flex justify-between items-center rounded-medium bg-[#FBA834] mt-3">
                <div
                  className="text-[25px] font-medium ms-3"
                  onClick={adicionar}
                >
                  +
                </div>
                <div className="text-[25px] font-medium">{count}</div>
                <div className="text-[30px] me-3" onClick={remover}>
                  -
                </div>
              </div>
              <Button className="w-full flex justify-between items-center rounded-full mt-3 p-6">
                <div>Adicionar ({count})</div>
                <div>R$:0,00</div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
