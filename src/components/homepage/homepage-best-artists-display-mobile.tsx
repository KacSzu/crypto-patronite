"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Artist } from "../../../types/supabase";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IHomepageBestArtistsDisplayMobile {
  artists: Artist[];
}

const HomepageBestArtistsDisplayMobile = ({
  artists,
}: IHomepageBestArtistsDisplayMobile) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi]);

  return (
    <>
      <Carousel className="w-[300px] mx-auto" setApi={setEmblaApi}>
        <CarouselContent>
          {artists.map((artist, i) => (
            <CarouselItem key={i}>
              <Link href={`/artists/${artist.id}`}>
                <div key={i} className={cn("house-info ")}>
                  <div className="house-image ">
                    <img src={artist.image_url as string} alt="" />
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
                    <p className="text-sm">
                      {artist.description.substring(0, 230)}...
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4">
        {artists.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 mx-1 rounded-full ${
              i === currentSlide ? "bg-neutral-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default HomepageBestArtistsDisplayMobile;
