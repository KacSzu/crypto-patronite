import Image from "next/image";
import Link from "next/link";
import { Artist } from "../../../types/supabase";
import { cn } from "@/lib/utils";
interface IHomepageBestArtistsDisplayDesktop {
  artists: Artist[];
}

const HomepageBestArtistsDisplayDesktop = ({
  artists,
}: IHomepageBestArtistsDisplayDesktop) => {
  return (
    <div className="grid grid-cols-12 gap-4 px-2 justify-center  justify-items-center">
      {artists.map((artist, i) => (
        <Link
          href={`/artists/${artist.id}`}
          key={i}
          className={cn(
            "house-info col-span-6 lg:col-span-4 ",
            i === 2 && "col-start-4 lg:col-start-0",
            i % 2 === 0 && "lg:scale-95"
          )}
        >
          <div className="house-image ">
            <Image
              src={artist.image_url as string}
              alt="artist image"
              width={400}
              height={400}
            />
          </div>

          <div className="house-price bg-[#d4d4d4]	">
            <span className="uppercase text-sm text-center">
              Total earned {artist.total_earned}ETH
            </span>
          </div>

          <div className="house-meta bg-[#d4d4d4]	  p-4">
            <p className="text-2xl tracking-tight font-semibold">
              {artist.full_name}
            </p>
            <p className="text-sm">{artist.description.substring(0, 230)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomepageBestArtistsDisplayDesktop;
