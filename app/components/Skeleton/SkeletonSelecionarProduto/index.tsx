import { Button, Card, CardBody, Image } from '@nextui-org/react'
import './style.css'

export default () => {

    const category = [0,1,2,3]

    return (
        <div className="mt-[10px] overflow-y-auto">
                <h1 className="text-[1.3em] font-medium">Menu</h1>
                <div className="flex w-full mt-3 overflow-x-scroll container">
                    {category.map((item, index) => (
                        <span key={index} className={`inline-block text-[#000] me-3 bg-[#e2e2e2] border-1 w-[300px] h-[42px] rounded-full border-[#e2e2e2]`}>
                            <div className='skeleton w-full rounded-full'></div>
                        </span>
                    ))}                    
                </div>
                
                <div className="mt-6">
                    <Card className="w-[47.6%] float-left me-2 shadow-none mb-5">
                        <CardBody>
                            <div  className="flex justify-center items-center mt-1 h-[130px]">
                                <div className='skeleton w-full rounded-[10px]'></div>
                            </div>
                            <div className="container-descricao mt-4">
                                <div className="h-2 mb-1 w-[60%]"><div className='skeleton w-[100%] rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[50%]"><div className='skeleton w-[100%] rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[60%]"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="mt-3 h-10 mb-1"><div className='skeleton w-full rounded-[10px]'></div></div>
                                
                                {/* <div className="text-[1em] font-medium truncate"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="text-[1em] font-bold"><div className='skeleton w-full rounded-full h-5'></div></div>
                                <div className="text-[0.8em] color-[#747474]"><div className='skeleton w-full rounded-full'></div></div>
                                <Button className="mt-[15px] w-full"><div className='skeleton w-full rounded-[10px]'></div></Button> */}
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-[47.6%] float-left me-2 shadow-none mb-5">
                        <CardBody>
                            <div  className="flex justify-center items-center mt-1 h-[130px]">
                                <div className='skeleton w-full rounded-[10px]'></div>
                            </div>
                            <div className="container-descricao mt-4">
                                <div className="h-2 mb-1"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[50%]"><div className='skeleton w-[100%] rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[60%]"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="mt-3 h-10 mb-1"><div className='skeleton w-full rounded-[10px]'></div></div>
                                
                                {/* <div className="text-[1em] font-medium truncate"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="text-[1em] font-bold"><div className='skeleton w-full rounded-full h-5'></div></div>
                                <div className="text-[0.8em] color-[#747474]"><div className='skeleton w-full rounded-full'></div></div>
                                <Button className="mt-[15px] w-full"><div className='skeleton w-full rounded-[10px]'></div></Button> */}
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-[47.6%] float-left me-2 shadow-none mb-5">
                        <CardBody>
                            <div  className="flex justify-center items-center mt-1 h-[130px]">
                                <div className='skeleton w-full rounded-[10px]'></div>
                            </div>
                            <div className="container-descricao mt-4">
                                <div className="h-2 mb-1"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[50%]"><div className='skeleton w-[100%] rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[60%]"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="mt-3 h-10 mb-1"><div className='skeleton w-full rounded-[10px]'></div></div>
                                
                                {/* <div className="text-[1em] font-medium truncate"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="text-[1em] font-bold"><div className='skeleton w-full rounded-full h-5'></div></div>
                                <div className="text-[0.8em] color-[#747474]"><div className='skeleton w-full rounded-full'></div></div>
                                <Button className="mt-[15px] w-full"><div className='skeleton w-full rounded-[10px]'></div></Button> */}
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-[47.6%] float-left me-2 shadow-none mb-5">
                        <CardBody>
                            <div  className="flex justify-center items-center mt-1 h-[130px]">
                                <div className='skeleton w-full rounded-[10px]'></div>
                            </div>
                            <div className="container-descricao mt-4">
                                <div className="h-2 mb-1"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[50%]"><div className='skeleton w-[100%] rounded-full'></div></div>
                                <div className="h-2 mb-1 w-[60%]"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="mt-3 h-10 mb-1"><div className='skeleton w-full rounded-[10px]'></div></div>
                                
                                {/* <div className="text-[1em] font-medium truncate"><div className='skeleton w-full rounded-full'></div></div>
                                <div className="text-[1em] font-bold"><div className='skeleton w-full rounded-full h-5'></div></div>
                                <div className="text-[0.8em] color-[#747474]"><div className='skeleton w-full rounded-full'></div></div>
                                <Button className="mt-[15px] w-full"><div className='skeleton w-full rounded-[10px]'></div></Button> */}
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* <div className="mt-6">
                    {Produtos.map((item, index) => (
                        <Card key={index} className="w-[47.6%] float-left me-2 shadow-none mb-5">
                            <CardBody>
                                <div  className="flex justify-center items-center mt-4 h-[100px]">
                                    <Image src={item.imagem.url} alt={item.descricao} width={item.imagem.select.width != 0 ? item.imagem.select.width : 40} height={item.imagem.select.height != 0 ? item.imagem.select.height : 40}></Image>
                                </div>
                                <div className="container-descricao mt-4">
                                    <div className="text-[1em] font-medium truncate">{item.descricao}</div>
                                    <div className="text-[1em] font-bold">{item.preco}</div>
                                    <div className="text-[0.8em] color-[#747474]">{item.parcelado == "" ? "Somente Avista" : item.parcelado}</div>
                                    <Button onClick={()=>{
                                        route.push(`detalhe/${item.id}`)
                                    }} className="mt-[15px] w-full bg-[#FBA834]">Pedir</Button>
                                </div>
                            </CardBody>
                        </Card>
                        // <div className="bg-[red] w-[47.6%] h-[200px] me-2 float-left p-4 rounded-[10px]">{item.id}</div>
                    ))}
                </div> */}
            </div> 
    )
}