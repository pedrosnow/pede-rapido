import './style.css'

export default () => {
    return(
        <div>
            <div className="flex justify-center items-center bg-[#ffffff] rounded-medium p-3 h-[385px]">
                <div className="skeleton rounded-medium"></div>
            </div>
            <div className="mt-3">
                <div className="bg-[#ffffff] w-[100%] h-8 p-2 rounded-full"><div className="skeleton  rounded-[10px] W-[100%] "></div></div>
                <div className="bg-[#ffffff] w-[60%] h-8 p-2 rounded-full mt-2" ><div className="skeleton rounded-[10px] W-[100%]"></div></div>
                <div className="bg-[#ffffff] w-[30%] h-8 p-2 rounded-full mt-2"><div className=" skeleton W-[100%] rounded-[10px] W-[100%] "></div></div>
            </div>
            <div className='mt-5'>
                <div className="w-[100%] rounded-full mt-3 p-2 h-12 bg-[#ffffff]">
                    <div className="skeleton rounded-full W-[100%] h-10"></div>
                </div>
                
                <div className="w-[100%] rounded-full mt-3 p-2 h-12 bg-[#ffffff]">
                    <div className="skeleton rounded-full W-[100%] h-10"></div>
                </div>
                
            </div>
        </div>
    )
}