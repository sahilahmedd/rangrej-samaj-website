import parse from "html-react-parser";
import Image from "next/image";

export default async function EventDetailPage({
  params,
}: {
  params: { eventId: string; locale: string };
}) {
  const res = await fetch(
    `https://node2-plum.vercel.app/api/user/events/${params.eventId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch event details");
  }

  const { event } = await res.json();

  return (
    <div className="container py-8">
      {event.ENVT_BANNER_IMAGE && (
        <div className="relative w-full h-72 mb-6 rounded overflow-hidden">
          <Image
            src={event.ENVT_BANNER_IMAGE}
            alt="Event Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4">{event.ENVT_DESC}</h1>

      <p className="text-muted mb-2">
        From: {event.EVNT_FROM_DT} — To: {event.EVNT_UPTO_DT}
      </p>
      <p className="text-muted mb-2">{event.ENVT_ADDRESS}</p>
      <p className="text-muted mb-4">{event.ENVT_EXCERPT}</p>

      <div>
        <h2 className="text-xl font-semibold mb-2">Full Details</h2>
        <div className="prose max-w-none">{parse(event.ENVT_DETAIL)}</div>
      </div>

      {event.ENVT_GALLERY_IMAGES && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {event.ENVT_GALLERY_IMAGES.split(",").map(
            (img: string, i: number) => (
              <img
                key={i}
                src={img.trim()}
                alt={`Gallery ${i + 1}`}
                className="rounded border"
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
