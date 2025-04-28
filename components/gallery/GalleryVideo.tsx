import React from "react";

const GalleryVideo = () => {
  // Sample videos
  const videos = [
    {
      id: "video-1",
      title: "Annual Cultural Festival 2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video1",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video-2",
      title: "Rangraj Samaj Health Initiative",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video2",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video-3",
      title: "Vivah Sammelan Highlights",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video3",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="py-16 bg-[#F9F5E7]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
          Video Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryVideo;
