import Image from "next/image";
import myImage from '../../public/myImg.png';
import AutoType from "@/components/AutoType";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConnectButton from "@/components/ConnectButton";


export default function Home() {
  return (
    <div className="relative" style={{ height: "95vh" }}>
      <Image src={myImage} alt="." className="z-10 absolute overflow-hidden object-contain shadow-cyan-950 myImg" />
      <div className="absolute p-2 mt-20 sm:right-36 md:top-20 ">

        <div className="intro-tags flex flex-col justify-center items-center opacity-70 ">
          <h1 className="font-semibold text-3xl"><span className="font-mono text-2xl">Hey There! I am </span><span className="text-stone-300">Sam Malik</span>, </h1>
          <AutoType />
        </div>
      </div>
      <ConnectButton />
    </div>
  );
}
