import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { PiCheckCircleLight } from "react-icons/pi";

const HeroTitle = () => (
  <h1 className="text-7xl tracking-tight font-bold">
    Crypto <span className="font-thin">Patronite</span>
  </h1>
);

const HeroDescription = () => (
  <p className="text-muted-foreground text-sm md:w-[50%] mx-auto lg:w-full">
    Crypto Patronite is a revolutionary platform that allows you to support your
    favorite creators and projects using cryptocurrency.
  </p>
);

const HeroButtons = () => (
  <div className="flex flex-col lg:flex-row gap-2 items-center justify-center lg:justify-start">
    <Link
      href="/artists"
      className={cn(
        buttonVariants({ variant: "default" }),
        "text-base bg-red-200 border-red-300 border hover:bg-red-300 text-black w-[150px] space-x-3"
      )}
    >
      <span className="text-xl">
        <CiHeart />
      </span>
      <span>Support now</span>
    </Link>
    <Link
      href="/#best_artists"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "text-base text-black border w-[150px] space-x-3"
      )}
    >
      <span className="text-xl">
        <PiCheckCircleLight />
      </span>
      <span>See more</span>
    </Link>
  </div>
);

const HeroImage = () => (
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
);

const HomepageHero = () => {
  return (
    <section className="grid grid-cols-12 max-w-5xl xl:max-w-6xl mx-auto">
      <div className="pt-8 text-center px-4 space-y-6 col-span-12 lg:col-span-5 lg:text-left lg:flex lg:flex-col lg:justify-center">
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </div>
      <HeroImage />
    </section>
  );
};

export default HomepageHero;
