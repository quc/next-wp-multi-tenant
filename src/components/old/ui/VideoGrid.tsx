import VideoCard from "./VideoCard";

interface Video {
  title: string;
  thumbnail: string;
  channel?: string;
  views?: string;
  duration?: string;
  rating?: number;
}

interface VideoGridProps {
  videos: Video[];
  columns?: number;
}

export default function VideoGrid({ videos, columns = 4 }: VideoGridProps) {
  return (
    <div
      className="grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

