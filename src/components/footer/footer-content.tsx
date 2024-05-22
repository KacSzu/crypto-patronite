import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function FooterContent() {
  return (
    <div className="bg-neutral-500 py-8 px-12 h-full w-full flex flex-col justify-between">
      <div className="flex justify-between items-end">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mt-10">
          if you like this idea give <span className="font-thin">star</span> to
          this
          <Link
            className=" font-thin"
            target="_blank"
            href={"https://github.com/KacSzu/crypto-patronite"}
          >
            repo
          </Link>
        </h1>
      </div>
    </div>
  );
}
