import img from "@/assets/file (5).png";
import { Button } from "@nextui-org/react";
import Image from 'next/image';
// import bg1 from '@/assets/project-bg.jpg'

const HeroArea = () => {
  return (
    <div className=" bg-[#151515] relative" id="home">
      <div className="flex h-auto justify-between items-center max-w-7xl mx-auto px-10 max-h-[650px] z-10">
        <div className="flex-1 space-y-1 px-2">
          <h1 className="leading-4 tracking-wide font-mono text-3xl">
            I'M{" "}
            <span className="text-5xl font-bold text-primaryColor">
              Tajul Islam Tanvir
            </span>
          </h1>
          <h1 className="tracking-widest pb-2 font-thin text-wrap ">
            A full stack Web Developer.Transforming ideas into dynamic
            high-performance website.sdfsdf
          </h1>
          <Button
            variant="bordered"
            className="text-default-50 border-primaryColor "
          >
            Contact me
          </Button>
        </div>
        <div className="w-[50%] flex justify-end">
          <Image src={img.src} className="w-[82%] rounded-b-full" alt="image" width={500} height={500} priority />
        </div>
      </div>
      {/* <div className="absolute inset-0  bg-cover" style={{backgroundImage:`url(${bg1.src})`}}></div> */}
    </div>
  );
};

export default HeroArea;
