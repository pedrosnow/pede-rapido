"use client";
import "./style.css";
import Header from "@/app/components/Header";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { ProdutosMock } from "@/app/shared/mock/Produtos.mock";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SkeletonSelecionarProduto from "@/app/components/Skeleton/SkeletonSelecionarProduto";
import Modal from "@/app/components/Modal/Modal";
import Loading from "@/app/components/Loading/Loading";
import { ShowDetalhePedido } from "@/app/components/ShowDetalhePedido";

export default function cardapio() {
  const [isSkeleton, setSkeleton] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const pathname = usePathname();
  const route = useRouter();

  const configStore = {
    colorPrimary: "#FBA834",
    category: {
      bgActivate: "#FBA834",
      bgNotActivate: "#e2e2e2",
      border: "#e2e2e2",
    },
    buttons: {
      bg: "#FBA834",
    },
  };

  const categorias = [
    {
      id: 1,
      titulo: "Todos",
      url: "/page/home",
    },
    {
      id: 2,
      titulo: "Cerveja",
      url: "#",
    },
    {
      id: 3,
      titulo: "Refrigerante",
      url: "#",
    },
    {
      id: 4,
      titulo: "Petiscos",
      url: "#",
    },
  ];
  const Produtos = ProdutosMock;

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 100);
  }, []);

  return (
    <div className="p-[20px]">
      <Header></Header>
      <ShowDetalhePedido></ShowDetalhePedido>
      <Modal isopen={isLoading}>
        <section className="w-full h-full flex justify-center items-center">
          <Loading color="azul"></Loading>
        </section>
      </Modal>
      {isSkeleton ? (
        <SkeletonSelecionarProduto></SkeletonSelecionarProduto>
      ) : (
        <div className="mt-[10px] overflow-y-auto">
          <h1 className="text-[1.3em] font-medium">Menu</h1>
          <div className="flex w-full mt-3 overflow-x-scroll container">
            {categorias.map((item, index) => (
              <span
                key={index}
                className={`inline-block text-[#000] me-3 ${
                  pathname == item.url
                    ? `bg-[${configStore.category.bgActivate}]`
                    : `border-1 border-[${configStore.category.border}] bg-[${configStore.category.bgNotActivate}]`
                } ps-5 pe-5 pt-2 pb-2 rounded-full`}
              >
                {item.titulo}
              </span>
            ))}
          </div>
          <div className="mt-6">
            {Produtos.map((item, index) => (
              <Card
                key={index}
                className="w-[47.6%] float-left me-2 shadow-none mb-5"
              >
                <CardBody>
                  <div className="flex justify-center items-center mt-4 h-[100px]">
                    <Image
                      src={item.imagem.url}
                      alt={item.descricao}
                      width={
                        item.imagem.select.width != 0
                          ? item.imagem.select.width
                          : 40
                      }
                      height={
                        item.imagem.select.height != 0
                          ? item.imagem.select.height
                          : 40
                      }
                    ></Image>
                  </div>
                  <div className="container-descricao mt-4">
                    <div className="text-[1em] font-medium truncate">
                      {item.descricao}
                    </div>
                    <div className="text-[1em] font-bold">{item.preco}</div>
                    <div className="text-[0.8em] color-[#747474]">
                      {item.parcelado == "" ? "Somente Avista" : item.parcelado}
                    </div>
                    <Button
                      onClick={() => {
                        // setLoading(true);
                        // route.push(`detalhe/${item.id}`);
                      }}
                      className="mt-[15px] w-full bg-[#FBA834]"
                    >
                      Pedir
                    </Button>
                  </div>
                </CardBody>
              </Card>
              // <div className="bg-[red] w-[47.6%] h-[200px] me-2 float-left p-4 rounded-[10px]">{item.id}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
