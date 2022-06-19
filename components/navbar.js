import Image from "next/dist/client/image";

export default function NavBar(props){
    return(
    <div className="h-[60px] w-[100%] bg-[#F1F1F5] border-b-[1px] border-b-[#bebcbe]">
            <div className="h-[100%] flex justify-between items-center pl-[15px] pr-[15px]">
                <div className="flex items-center">
                    <div className="w-fit p-[5px] font-bold pl-[12px] pr-[12px] rounded-lg bg-[#fafcff]">
                        <span className="text-[gray] mr-[5px]">@appzstudio</span> 
                        <span className="text-[#1673ff]">/</span> 
                        <span className="ml-[5px]">{props.currentOption}</span>
                    </div>
                    <div className="bg-[#bababa] h-[25px] w-[25px] ml-[10px] flex items-center justify-center rounded-full">
                        <Image src={'/static/images/info.png'} height={'12px'} width={'12px'}></Image>
                    </div>
                </div>
                <div className="flex">
                    <button className="bg-[#dc3545] flex items-center justify-center p-[6px] pl-[15px] pr-[15px] mr-[10px] text-[15px] text-[white] rounded-lg">
                             <div className="flex items-center"><Image src={'/static/images/warning.png'} height={'14px'} width={'14px'}></Image></div>
                    </button>
                    <button className="flex items-center bg-[#0165E1] text-[15px] text-[white] rounded-lg p-[6px] pl-[15px] pr-[15px]">
                             <div className="flex items-center mr-[5px]"><Image src={'/static/images/messenger.png'} height={'14px'} width={'14px'}></Image></div>
                             Preview on messsenger
                    </button>
                </div>
            </div>
    </div>);
}