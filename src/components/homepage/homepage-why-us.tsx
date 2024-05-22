import Image from "next/image";
import HomepageWhyUsItem from "./homepage-why-us-item";

const data = [
  {
    title: "Innovative Ideas",
    content:
      "Our platform fosters creativity by providing tools and resources that enable users to bring their innovative ideas to life. Join our community to share and develop groundbreaking concepts.",
    icon: "/why_us/3d-bulb.png",
  },
  {
    title: "Support for Artists",
    content:
      "We are dedicated to supporting artists of all disciplines. Our network connects artists with opportunities, resources, and a supportive community to help them thrive in their creative endeavors.",
    icon: "/why_us/3d-piggybank.png",
  },
  {
    title: "Positive Reviews",
    content:
      "Our users love us! Read the positive reviews from our satisfied community members who have found success and inspiration through our platform.",
    icon: "/why_us/3d-review.png",
  },
];

const HomepageWhyUs = () => {
  return (
    <section className="lg:max-w-5xl xl:max-w-6xl mx-auto px-4  ">
      <div className="flex justify-center">
        <h2 className="text-6xl font-bold my-12 ">
          Why <span className="font-thin">us</span>
        </h2>
      </div>
      {data.map(({ title, content, icon }, i) => (
        <HomepageWhyUsItem
          key={i}
          title={title}
          svgPath={icon}
          content={content}
          number={i + 1}
          index={i}
        />
      ))}
    </section>
  );
};

export default HomepageWhyUs;
