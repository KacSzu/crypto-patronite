import { cn } from "@/lib/utils";
import Image from "next/image";
import { Category } from "./homepage-categories";
interface IHomepageCategoryCard {
  item: Category;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
const HomepageCategoryCard = ({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: IHomepageCategoryCard) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={cn(
      "transition-all duration-500 ease-in-out border rounded-xl shadow-xl flex flex-col justify-end p-4 h-[500px] mx-2 relative",
      isActive ? "w-2/5" : "w-1/6"
    )}
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      flex: "1 0 auto",
      willChange: "width, opacity",
    }}
  >
    <Image
      src={item.imageSrc}
      alt={item.title}
      layout="fill"
      objectFit="cover"
      quality={75}
      className="rounded-xl"
    />
    <div
      className={cn(
        "opacity-0 text-shadow transition-opacity duration-500 z-30",
        isActive && "opacity-100"
      )}
    >
      <h3 className="text-5xl font-bold text-white text-shadow truncate">
        {item.title}
      </h3>
      <p className="text-white">{item.description}</p>
    </div>
  </div>
);

export default HomepageCategoryCard;
