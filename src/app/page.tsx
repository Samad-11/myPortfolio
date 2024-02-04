import Image from "next/image";
import myImage from '../../public/myImg.png';
import AutoType from "@/components/AutoType";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="relative " style={{ height: "100vh" }}>
      <Image src={myImage} alt="." className="z-10 absolute object-contain shadow-cyan-950 myImg" />
      <div className="absolute p-5 mt-5 md:right-36 md:top-52">

        <div className="intro-tags flex flex-col justify-center items-center opacity-70 ">
          <h1 className="font-semibold text-3xl">Hey There! I am <span className="text-stone-300">Sam Malik</span>, </h1>
          <AutoType />
        </div>
      </div>
      <Button className="btn vibrate-1 appointmentBtn z-20 sm:z-0 absolute hover:bg-stone-500 font-bold hover:bg-opacity-50 border border-stone-500" >Contact </Button>
    </div>
  );
}
