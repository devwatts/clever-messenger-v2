import Image from "next/image";

export default function SideNav(){
return(
<div className="w-[80px] bg-[#F1F1F5] h-[100vh] flex flex-col items-center justify-between border-r-[1px] border-r-[#bebcbe]">
    <div className="flex flex-col items-center justify-center">
        <div className="h-[60px] w-[80px] flex items-center justify-center border-b-[1px] border-b-[#bebcbe]">
            <Image src={'/static/images/logo.png'} height={'40px'} width={'40px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/dashboard.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/contacts.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/message.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/magnet.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/broadcast.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/wand.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/layers.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/graph.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/settings.png'} height={'23px'} width={'23px'}></Image>
        </div>
    </div>
    <div className="flex flex-col items-center">
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/tube.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div className="h-[50px] flex items-center cursor-pointer">
            <Image src={'/static/images/user.png'} height={'23px'} width={'23px'}></Image>
        </div>
    </div>
</div>);
}