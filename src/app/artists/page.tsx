import ArtistsDisplay from "@/components/artists/artists-display";
import { getArtists } from "@/lib/get-artists";
import Image from "next/image";
import { Suspense } from "react";

async function ArtistsPage() {
  const { data, error } = await getArtists();
  if (error || !data) {
    console.error(error);
    return <p>Error loading artists</p>;
  }
  console.log(data);
  return (
    <section className="  ">
      <header className="grid grid-cols-12 mt-12 max-w-5xl xl:max-w-6xl mx-auto">
        <div className="lg:col-span-5 col-span-12 flex justify-center">
          <Image
            src="/hero-robot.png"
            width={350}
            height={350}
            alt="robot image"
          />
        </div>
        <div className="lg:col-span-7 col-span-12  ">
          <h2 className="text-6xl xl:text-7xl font-bold tracking-tight text-center ">
            Meet <span className=" font-thin">our</span>
          </h2>
          <h2 className="text-6xl xl:text-7xl font-bold tracking-tight  text-center ">
            talented <span className="font-thin">members</span>
          </h2>
        </div>
      </header>
      <ArtistsDisplay artists={data} />
    </section>
  );
}

export default ArtistsPage;
