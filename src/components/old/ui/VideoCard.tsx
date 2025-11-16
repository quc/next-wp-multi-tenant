import Card from "./Card";
import Image from "next/image";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  channel?: string;
  views?: string;
  duration?: string;
  rating?: number;
  onClick?: () => void;
}

export default function VideoCard({
  title,
  thumbnail,
  channel = "Channel Name",
  views = "0 views",
  duration,
  rating,
  onClick,
}: VideoCardProps) {
  return (
    <Card onClick={onClick} className="w-full">
      <div className="relative aspect-video bg-gray-200">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        )}
        {duration && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {duration}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{channel}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{views}</span>
          {rating !== undefined && (
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

