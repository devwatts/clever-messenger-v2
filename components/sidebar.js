import Image from "next/image";

export default function SideNav(props){

return(
<div className="w-[80px] bg-[#F1F1F5] h-[100vh] flex flex-col items-center justify-between border-r-[1px] border-r-[#bebcbe]">
    <div className="flex flex-col items-center justify-center">
        <div className="h-[60px] w-[80px] flex items-center justify-center border-b-[1px] border-b-[#bebcbe]">
            <Image src={'/static/images/logo.png'} height={'40px'} width={'40px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Dashboard')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Dashboard'?'bg-[#fff]':''}`}>
            <Image  src={'/static/images/dashboard.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Contacts')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Contacts'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/contacts.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Message')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Message'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/message.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Magnet')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Magnet'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/magnet.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Broadcast')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Broadcast'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/broadcast.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Wand')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Wand'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/wand.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Layer')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Layer'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/layers.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Graph')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Graph'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/graph.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('Settings')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Settings'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/settings.png'} height={'23px'} width={'23px'}></Image>
        </div>
    </div>
    <div className="flex flex-col items-center w-[100%]">
        <div onClick={() => props.changeOption('Tube')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'Tube'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/tube.png'} height={'23px'} width={'23px'}></Image>
        </div>
        <div onClick={() => props.changeOption('User')} className={`h-[50px] w-[100%] flex justify-center items-center cursor-pointer ${props.currentOption == 'User'?'bg-[#fff]':''}`}>
            <Image src={'/static/images/user.png'} height={'23px'} width={'23px'}></Image>
        </div>
    </div>
</div>);
}