"use client";
import React, { useState, useCallback } from "react";
import HomepageCategoryCard from "./homepage-category-card";

export interface Category {
  title: string;
  description: string;
  imageSrc: string;
}

const categories: Category[] = [
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

const HomepageCategories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="hidden lg:block py-12 px-8 max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold my-12">Categories</h2>
      <div className="flex flex-wrap -mx-2">
        {categories.map((item, index) => (
          <HomepageCategoryCard
            key={index}
            item={item}
            isActive={activeIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
};

export default HomepageCategories;
