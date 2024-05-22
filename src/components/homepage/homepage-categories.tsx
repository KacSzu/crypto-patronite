"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const categories = [
  {
    title: "Painter",
    description:
      "Creates visual art using mediums like oil, acrylic, or watercolor on surfaces such as canvas or paper, exploring styles like realism, abstract, and impressionism.",
    imageSrc: "/services/painter.jpg",
  },
  {
    title: "Sculptor",
    description:
      "Crafts three-dimensional art from materials like stone, metal, clay, or wood, producing works that range from classical figures to modern abstract forms.",
    imageSrc: "/services/sculptor.jpg",
  },
  {
    title: "Photographer",
    description:
      "Captures moments and scenes using digital or film cameras, working in genres like portrait, landscape, street, fashion, and wildlife photography.",
    imageSrc: "/services/photographer.jpg",
  },
  {
    title: "Digital Artist",
    description:
      "Uses digital tools and software to create art, including 2D digital paintings, 3D models, animations, and concept art, often for entertainment, advertising, or personal expression.",
    imageSrc: "/services/digital-artist.jpg",
  },
];

const HomepageCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-8 max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold my-12">Categories</h2>
      <div className="flex flex-wrap -mx-2">
        {categories.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(0)}
            className={`transition-all duration-700 ease-in-out border rounded-xl flex flex-col justify-end p-4 h-[500px] mx-2 ${
              activeIndex === i ? "w-2/5" : "w-1/6"
            }`}
            style={{
              backgroundImage: `url(${item.imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              flex: "1 0 auto",
            }}
          >
            <div
              className={cn(
                "opacity-0 transition-all ease-in-out duration-500",
                activeIndex === i && "opacity-100"
              )}
            >
              <h3 className="text-5xl font-bold  text-white  text-shadow">
                {item.title}
              </h3>
              <p className=" text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageCategories;
