interface RatingProps {
  value: number;
  max?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Rating({
  value,
  max = 5,
  showValue = true,
  size = "md",
}: RatingProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          className={index < value ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
      {showValue && (
        <span className={`ml-2 ${sizes[size]}`}>
          {value.toFixed(1)}/{max}
        </span>
      )}
    </div>
  );
}

