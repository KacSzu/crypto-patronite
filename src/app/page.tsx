import HomepageBestArtists from "@/components/homepage/homepage-best-artists";
import HomepageCategories from "@/components/homepage/homepage-categories";
import HomepageContact from "@/components/homepage/homepage-contact";
import HomepageHero from "@/components/homepage/homepage-hero";
import HomepageWhyUs from "@/components/homepage/homepage-why-us";

export default async function Home() {
  return (
    <>
      <HomepageHero />
      <HomepageBestArtists />
      {/* <HomepageCategories /> */}
      <HomepageWhyUs />
      <HomepageContact />
    </>
  );
}
