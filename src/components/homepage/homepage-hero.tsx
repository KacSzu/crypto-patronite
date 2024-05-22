import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { PiCheckCircleLight } from "react-icons/pi";

const HomepageHero = () => {
  return (
    <section className=" grid grid-cols-12 max-w-5xl xl:max-w-6xl mx-auto pt-[116px]">
      <div className="pt-8 text-center px-4 space-y-6 col-span-12 lg:col-span-5 lg:text-left lg:flex lg:flex-col lg:justify-center">
        <h1 className=" text-7xl tracking-tight font-bold  ">
          Crypto <span className="font-thin ">Patronite</span>
        </h1>
        <p className="text-muted-foreground text-sm md:w-[50%] mx-auto lg:w-full ">
          Crypto Patronite is a revolutionary platform that allows you to
          support your favorite creators and projects using cryptocurrency.
        </p>
        <div className="flex flex-col lg:flex-row gap-2 items-center  justify-center lg:justify-start">
          <Button className="text-base bg-red-200 border-red-300 border hover:bg-red-300 text-black  w-[150px] space-x-3">
            <span className="text-xl">
              <CiHeart />
            </span>
            <span>Support now</span>
          </Button>
          <Button
            variant="ghost"
            className="text-base  text-black border  w-[150px] space-x-3  "
          >
            <span className="text-xl">
              <PiCheckCircleLight />
            </span>
            <span> See more</span>
          </Button>
        </div>
      </div>
      <div className="col-span-12 flex items-end justify-center h-[500px] lg:h-[500px] lg:col-span-7">
        <Image
          className="animate-bounce"
          style={{ animation: "bounce 2s infinite" }}
          src="/hero-robot-l.png"
          alt="hero"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default HomepageHero;
