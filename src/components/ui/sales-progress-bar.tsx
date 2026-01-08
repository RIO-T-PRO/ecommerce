import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SalesProgress = ({ className }: { className?: string }) => (
  <div className={cn("space-y-2", className)}>
    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tight">
      <span className="text-foreground/50">Limited Stock</span>
      <span className="text-secondary">9 / 10 Sold</span>
    </div>

    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-line/20">
      <div className="h-full bg-primary" style={{ width: "90%" }} />
    </div>
  </div>
);

export default SalesProgress;
