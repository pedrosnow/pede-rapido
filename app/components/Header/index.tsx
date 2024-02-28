'use client'
import { useState } from "react"
import Image from "next/image"
import { Button, Input } from "@nextui-org/react"
import MenuMobile from "../MenuMobile"



export default function Header(){

    const [show, setishow] = useState(false)


    const SowMenu = () => {
        setishow(true)
    }

    const hiddenMenu = () => {
        setishow(false)
        console.log('pça')
    }

    return(
        <div className="flex justify-between">
            <div className="me-3">
                <Image
                    onClick={SowMenu} 
                    width={50} 
                    height={54} 
                    src={"/menu.svg"} 
                    alt="Menu"
                    ></Image>
            </div>
            <div >
                {/* <Input
                    className="w-full"
                    type="text"
                    placeholder="O que Procura ?"
                    labelPlacement="outside"
                    startContent={
                        <Image className="" src={"/buscar.png"} alt="buscar" width={30} height={30} ></Image>
                    }
                /> */}
                <Image src={"/image 21.png"} alt='logo' width={80} height={40} ></Image>
            </div>
            <MenuMobile isshow={show} funclose={setishow} ></MenuMobile>
        </div>
    )
}