import { CategoriesData } from "@/lib/data/categories";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

const Categories = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-evenly px-4">
        {CategoriesData.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <Avatar
              size="md"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <AvatarImage src={category.avatarUrl} alt={category.title} />
              <AvatarFallback>{category.title?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Link href="/products">
              <span className="text-primary text-xs font-semibold whitespace-nowrap">
                {category.title}
              </span>
            </Link>
          </div>
        ))}
        <Link
          href="/products"
          className="flex flex-col items-center gap-1.5 group"
        >
          <div className="flex items-center justify-center h-12 w-12">
            <LayoutGrid size={40} className="text-primary" />
          </div>
          <span className="text-primary text-xs font-semibold">
            All Category
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
