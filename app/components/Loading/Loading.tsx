import './style.css'

type prop = {
    color: "vermelho" | "amarelo" | "verde" | "azul",
    titulo?:string
    descricao?:string
}

export default function Loading(loading: prop){
    return(
        <>
            <span className={`loader ${loading.color}`}></span>
            <div className='flex justify-start items-start flex-col ms-3'>
                {loading.titulo ? <div className='text-[1.2em] font-medium text-[#fff]'>{loading.titulo}</div>  : ''}
                {loading.descricao ? <div className='text-[0.9em] text-[#fff]'>{loading.descricao}</div> : ''}
            </div>
        </>
    )
}