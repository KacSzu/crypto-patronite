import Link from "next/link";
import { Artist } from "../../../types/supabase";
import Image from "next/image";
import { MutableRefObject } from "react";
interface IArtistsDisplayCard extends Artist {
  isotopeRef: MutableRefObject<Isotope | null>;
}
const ArtistsDisplayCard = ({
  artist_type,
  full_name,
  id,
  image_url,
  isotopeRef,
}: IArtistsDisplayCard) => (
  <div className={`w-full md:w-1/2 lg:w-1/3 p-1 ${artist_type} grid-item`}>
    <Link href={`/artists/${id}`}>
      <div className="relative group cursor-pointer overflow-hidden">
        <Image
          src={image_url}
          width={300}
          height={300}
          alt="Gallery item"
          layout="responsive"
          objectFit="cover"
          onLoadingComplete={() => {
            if (isotopeRef.current) {
              isotopeRef.current.layout();
            }
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out bg-black bg-opacity-70">
          <p className="text-2xl font-normal pb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            {full_name}
          </p>
          <p className="uppercase text-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            {artist_type}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default ArtistsDisplayCard;
