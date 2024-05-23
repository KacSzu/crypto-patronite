"use client";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { Artist } from "../../../types/supabase";
import ArtistsDisplayFilterButtons from "./artists-display-filter-buttons";
import ArtistsDisplayCard from "./artists-display-card";

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
        isotopeRef.current.layout();
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
    <div className="px-2 max-w-5xl xl:max-w-6xl mx-auto mb-8">
      <ArtistsDisplayFilterButtons filter={filter} setFilter={setFilter} />
      <div ref={containerRef} className="flex justify-center ">
        {artists.map((artist, index) => (
          <ArtistsDisplayCard isotopeRef={isotopeRef} key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}
