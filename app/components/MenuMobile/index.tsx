'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import './style.css'
import Image from 'next/image'


interface MenuMobileProps {
    isshow: boolean;
    funclose: Dispatch<SetStateAction<boolean>>;
}


export default function MenuMobile({ isshow, funclose }: MenuMobileProps){


    let menus = [
        {
            titulo: "Home",
            url: "/page/cardapio"
        },
        {
            titulo: "Meus Pedidos",
            url: "/page/meu/pedidos"
        },
        {
            titulo: "Sair",
            url: ""
        }
    ]
        
    return(
        <div className={`container-menu ${isshow ? 'show' : 'hidden'} p-[20px]`}>
            <div className="w-full">
                <div className='flex items-start justify-between'>
                    <Image src={"/close.png"} onClick={()=>{funclose(false)}} alt='close' width={40} height={40}></Image>
                    <Image src={"/image 21.png"} alt='logo' width={80} height={40} ></Image>
                </div>
                <ul className='mt-7'>
                    {menus.map((item, index) => (
                        <li className="mb-2 bg-[#cfcfcf] p-3 rounded-[10px] font-medium text-[#422f13]" key={index}>{item.titulo}</li>
                    ))}
                    {/* <li>Favorito</li>
                    <li>Meus pedidos</li>
                    <li>Sair</li> */}
                </ul>
            </div>
        </div>
    )
}