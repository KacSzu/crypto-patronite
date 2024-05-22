import { supabase } from "@/lib/supabase";
import HomepageBestArtistsDisplay from "./homepage-best-artists-display";
import Image from "next/image";

export const getArtists = async () => {
  try {
    const { data, error } = await supabase
      .from("artists")
      .select("name,description,youtubeChannel,id");
    console.log(data);
    if (error) {
      throw new Error(error.message);
    }
    return { data, error: null };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: e.message };
  }
};

const HomepageBestArtists = async () => {
  const { data, error } = await getArtists();
  if (error) {
    console.error(error);
    return <p>Error loading artists</p>;
  }

  return (
    <section className="lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
      <div className="flex items-center space-x-4  justify-center my-12">
        <div className="space-y-3">
          <div className="flex gap-4 max-h-[70px] items-center  ">
            <Image
              src="/trap.jpg"
              alt="Our team"
              width={130}
              height={70}
              className="rounded-full hidden md:block"
            />
            <h2 className="text-6xl xl:text-7xl font-bold tracking-tight  px-2">
              Check <span className="font-thin ">our</span>
            </h2>
          </div>
          <h2 className="text-6xl xl:text-7xl font-bold tracking-tight   text-center">
            best <span className="font-thin">artists</span>
          </h2>
        </div>
      </div>
      {data && data.length > 0 ? (
        <HomepageBestArtistsDisplay artists={data} />
      ) : (
        <p>No artists found</p>
      )}
    </section>
  );
};

export default HomepageBestArtists;
