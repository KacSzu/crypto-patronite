"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Artist } from "../../../types/supabase";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";

interface IHomepageBestArtistsCarousel {
  artists: Artist[];
}

const HomepageBestArtistsDisplay: React.FC<IHomepageBestArtistsCarousel> = ({
  artists,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const isMobile = useIsMobile();
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
      {artists && artists.length > 0 ? (
        <>
          {isMobile ? (
            <>
              <Carousel className="w-[300px] mx-auto" setApi={setEmblaApi}>
                <CarouselContent>
                  {artists.map((artist, i) => (
                    <CarouselItem key={i}>
                      <div
                        key={i}
                        className={cn("house-info col-span-6 lg:col-span-4")}
                      >
                        <div className="house-image">
                          <img src="/climber.jpg" alt="" />
                        </div>

                        <div className="house-price bg-neutral-400	">
                          <span className="uppercase text-sm text-center">
                            Total earned 500$
                          </span>
                        </div>

                        <div className="house-meta bg-neutral-400	  p-4">
                          <p>{artist.name}</p>
                          <p>{artist.description}</p>
                        </div>
                      </div>
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
          ) : (
            <div className="grid grid-cols-12 gap-4 px-2 justify-center justify-items-center">
              {artists.map((artist, i) => (
                <div
                  key={i}
                  className={cn(
                    "house-info col-span-6 lg:col-span-4",
                    i == 2 && "col-start-4 lg:col-start-0"
                  )}
                >
                  <div className="house-image">
                    <img src="/climber.jpg" alt="" />
                  </div>

                  <div className="house-price bg-[#d4d4d4]	">
                    <span className="uppercase text-sm text-center">
                      Total earned 500$
                    </span>
                  </div>

                  <div className="house-meta bg-[#d4d4d4]	  p-4">
                    <p>{artist.name}</p>
                    <p>{artist.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default HomepageBestArtistsDisplay;
