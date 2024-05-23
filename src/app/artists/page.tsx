import ArtistsDisplay from "@/components/artists/artists-display";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const getArtists = async () => {
  try {
    const { data, error } = await supabase
      .from("artists")
      .select(
        "full_name,description,id,total_earned,image_url,wallet,artist_type"
      );
    if (error) {
      throw new Error(error.message);
    }
    return { data, error: null };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: e.message };
  }
};

async function ArtistsPage() {
  const { data, error } = await getArtists();
  if (error || !data) {
    console.error(error);
    return <p>Error loading artists</p>;
  }
  return (
    <section>
      <header className="grid grid-cols-12 mt-12 max-w-5xl xl:max-w-6xl mx-auto">
        <div className="lg:col-span-5 col-span-12 flex justify-center">
          <Image
            src="/hero-robot.png"
            width={350}
            height={350}
            alt="robot image"
          />
        </div>
        <div className="lg:col-span-7 col-span-12 flex flex-col justify-center items-center  text-center ">
          <h2 className="text-6xl xl:text-7xl font-bold tracking-tight ">
            Meet <span className=" font-thin">our</span>
          </h2>
          <h2 className="text-6xl xl:text-7xl font-bold tracking-tight   ">
            talented <span className="font-thin">members</span>
          </h2>
        </div>
      </header>

      <ArtistsDisplay artists={data} />
    </section>
  );
}

export default ArtistsPage;
