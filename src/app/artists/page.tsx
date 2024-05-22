import ArtistsDisplay from "@/components/artists/artists-display";
import Image from "next/image";
import React from "react";

function ArtistsPage() {
  return (
    <section>
      <header className="grid grid-cols-12 max-w-5xl xl:max-w-6xl mx-auto mt-12">
        <div className="col-span-5">
          <Image
            src="/hero-robot.png"
            width={350}
            height={350}
            alt="robot image"
          />
        </div>
        <div className="col-span-7">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-semibold lg:font-bold tracking-tight pt-4 px-2">
            Meet <span className=" lg:font-thin">our</span>
          </h2>
          <h2 className="text-5xl lg:text-6xl xl:text-7xl  font-semibold lg:font-bold tracking-tight lg:pt-4 px-2">
            talented <span className="lg:font-thin">members</span>
          </h2>
        </div>
      </header>
      <ArtistsDisplay />
    </section>
  );
}

export default ArtistsPage;
