"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

export default function ArtistsDisplay() {
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

  const galleryItems = [
    { category: "design", brand: "Apple", src: "/artist.jpg" },
    { category: "design", brand: "Apple", src: "/climber.jpg" },
    { category: "development", brand: "Apple", src: "/climber.jpg" },
    { category: "development", brand: "Apple", src: "/climber.jpg" },
    { category: "development", brand: "Apple", src: "/climber.jpg" },
    { category: "logo", brand: "Apple", src: "/climber.jpg" },
  ];

  return (
    <section className="p-8">
      <div className="text-center py-10">
        {["*", "design", "development", "logo"].map((cat) => (
          <button
            key={cat}
            className={`mx-2 text-base font-light uppercase ${
              filter === cat ? "text-foreground" : "opacity-50"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat === "*" ? "All" : cat}
          </button>
        ))}
      </div>

      <div ref={containerRef} className="flex justify-center">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 lg:w-1/3 p-1 ${item.category} grid-item`}
          >
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src={item.src}
                alt="Gallery item"
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out bg-black bg-opacity-70">
                <p className="text-2xl font-normal pb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  {item.brand}
                </p>
                <p className="uppercase text-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  {item.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
