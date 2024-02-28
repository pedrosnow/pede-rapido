import { ImagemType } from "./ImagemType"


export type ProdutosType = {
    id:number,
    imagem: ImagemType,
    descricao: string,
    preco: string,
    parcelado: string
}