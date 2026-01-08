import { Star } from "lucide-react";

const CardRating = ({ value, max = 5 }: { value: number; max?: number }) => (
  <div className="flex items-center gap-1.5 mt-1">
    <div className="relative flex">
      <div className="flex gap-0.5 text-gray-line/20">
        {Array.from({ length: max }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" stroke="none" />
        ))}
      </div>
      <div
        className="absolute top-0 left-0 flex gap-0.5 overflow-hidden text-yellow-500"
        style={{ width: `${(value / max) * 100}%` }}
      >
        {Array.from({ length: max }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" stroke="none" />
        ))}
      </div>
    </div>
    <span className="text-xs font-bold opacity-60">{value.toFixed(1)}</span>
  </div>
);

export default CardRating;
