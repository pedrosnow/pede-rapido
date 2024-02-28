import { ProdutosType } from "../types/ProdutosType";


export const ProdutosMock:Array<ProdutosType> = [
    {
        id:1,
        imagem: {
            url: "/image 10.png",
            select:{
                width: 35,
                height: 35
            },
            detalhes: {
                width: 35,
                height: 35
            }
        },
        descricao: "Cerveja Original Antartica 350ml ",
        preco: "R$: 4,40",
        parcelado: ""
    },
    {
        id:2,
        imagem: {
            url: "/image 17.png",
            select:{
                width: 35,
                height: 35
            },
            detalhes: {
                width: 35,
                height: 35
            }
        },
        descricao: "Cerveja Heineken Long Neck Gelada 330ml",
        preco: "R$: 0,00",
        parcelado: "até 1x R$:0,00"
    },
    {
        id:3,
        imagem: {
            url: "/image 12.png",
            select:{
                width: 35,
                height: 35
            },
            detalhes: {
                width: 35,
                height: 35
            }
        },
        descricao: "Fardo de Cerveja Skol Lata 473ml (12 Unidades)",
        preco: "R$: 0,00",
        parcelado: "até 1x R$:0,00"
    },
    {
        id:4,
        imagem: {
            url: "/image 13.png",
            select:{
                width: 35,
                height: 35
            },
            detalhes: {
                width: 300,
                height: 300
            }
        },
        descricao: "Cerveja Heineken Long Neck Gelada 330ml",
        preco: "R$: 0,00",
        parcelado: "até 1x R$:0,00"
    },
    {
        id:5,
        imagem: {
            url: "/image 15.png",
            select:{
                width: 35,
                height: 35
            },
            detalhes: {
                width: 35,
                height: 35
            }
        },
        descricao: "Cerveja Heineken Long Neck Gelada 330ml",
        preco: "R$: 0,00",
        parcelado: "até 1x R$:0,00"
    }
]