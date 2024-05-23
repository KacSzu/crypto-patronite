"use client";

import { Artist } from "../../../types/supabase";
import { useIsMobile } from "@/hooks/use-is-mobile";
import HomepageBestArtistsDisplayMobile from "./homepage-best-artists-display-mobile";
import HomepageBestArtistsDisplayDesktop from "./homepage-best-artists-display-desktop";

interface IHomepageBestArtistsCarousel {
  artists: Artist[];
}

const HomepageBestArtistsDisplay: React.FC<IHomepageBestArtistsCarousel> = ({
  artists,
}) => {
  const isMobile = useIsMobile();

  return (
    <>
      {artists && artists.length > 0 ? (
        <>
          {isMobile ? (
            <HomepageBestArtistsDisplayMobile artists={artists} />
          ) : (
            <HomepageBestArtistsDisplayDesktop artists={artists} />
          )}
        </>
      ) : null}
    </>
  );
};

export default HomepageBestArtistsDisplay;
