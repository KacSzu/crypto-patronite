import { supabase } from "@/lib/supabase";
import HomepageBestArtistsDisplay from "./homepage-best-artists-display";
import AnimatedButton from "../buttons/animated-button";
import Link from "next/link";

export const getBestArtists = async () => {
  try {
    const { data, error } = await supabase
      .from("artists")
      .select(
        "full_name,description,id,total_earned,image_url,wallet,artist_type"
      )
      .range(0, 2);
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
  const { data, error } = await getBestArtists();
  if (error || !data || data.length < 1) {
    console.error(error);
    return <p>Error loading artists</p>;
  }

  return (
    <section id="best_artists" className="max-w-5xl xl:max-w-6xl mx-auto px-4">
      <div className="flex items-center space-x-4  justify-center my-12">
        <div className="space-y-3">
          <div className="flex gap-4 h-[70px] items-center justify-center  ">
            <img
              src="/12.jpg"
              alt="Our team"
              width={150}
              className="rounded-full hidden md:block shadow-xl   "
            />
            <h2 className="text-6xl xl:text-7xl font-bold tracking-tight text-center  ">
              Meet <span className="font-thin ">our</span>
            </h2>
          </div>
          <div className=" flex gap-8 items-center">
            <h2 className="text-6xl xl:text-7xl font-bold tracking-tight   text-center">
              best <span className="font-thin">artists</span>
            </h2>
            <Link className="hidden md:block " href={"/artists"}>
              <AnimatedButton backgroundColor="#be123c">
                <span className="uppercase font-semibold text-sm">
                  More artists
                </span>
              </AnimatedButton>
            </Link>
          </div>
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
