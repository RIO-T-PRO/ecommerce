import { cn } from "@/lib/utils";

const SalesProgress = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-1.5 w-full overflow-hidden rounded-full bg-gray-line/20",
      className
    )}
  >
    <div className="h-full bg-primary" style={{ width: "90%" }} />
  </div>
);

export default SalesProgress;
