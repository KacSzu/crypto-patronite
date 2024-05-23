"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { Artist } from "../../../types/supabase";
import Link from "next/link";

interface IArtistsDisplay {
  artists: Artist[];
}
export default function ArtistsDisplay({ artists }: IArtistsDisplay) {
  const [filter, setFilter] = useState("*");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isotopeRef = useRef<Isotope | null>(null);

  useEffect(() => {
    const loadIsotope = async () => {
      if (typeof window !== "undefined" && containerRef.current) {
        const Isotope = (await import("isotope-layout")).default;
        isotopeRef.current = new Isotope(containerRef.current, {
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
        });
      }
    };

    loadIsotope();

    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({
        filter: filter === "*" ? "*" : `.${filter}`,
      });
    }
  }, [filter]);
  if (!artists) return <p>Artists not found.</p>;
  return (
    <div className="px-2 max-w-5xl mx-auto mb-8">
      <div className="text-center py-10">
        {["*", "painter", "photographer", "sculpturer", "digital_artist"].map(
          (cat) => (
            <button
              key={cat}
              className={`mx-2 text-base font-light uppercase ${
                filter === cat ? "text-foreground" : "opacity-50"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat === "*" ? "All" : cat}
            </button>
          )
        )}
      </div>

      <div ref={containerRef} className="flex justify-center ">
        {artists.map(
          (
            { artist_type, full_name, description, id, image_url, wallet },
            index
          ) => (
            <div
              key={index}
              className={`w-full md:w-1/2 lg:w-1/3 p-1 ${artist_type} grid-item `}
            >
              <Link href={`/artists/${id}`}>
                <div className="relative group cursor-pointer overflow-hidden">
                  <Image
                    src={image_url}
                    width={300}
                    height={300}
                    alt="Gallery item"
                    layout="responsive"
                    objectFit="cover"
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
          )
        )}
      </div>
    </div>
  );
}
