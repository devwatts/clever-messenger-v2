import Image from "next/image"
export default function Error404(){
    return(
    <div>
        <div className="flex flex-col items-center">
        <Image src={'/static/images/development.png'} height={'250px'} width={'170px'} ></Image>
        <span className="text-[30px] font-bold">Sorry, This page is currently under developement!</span>
        <span className="text-[25px] font-bold">Please try later!</span>
        </div>
    </div>
    )
}