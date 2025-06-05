import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

export default async function EventDetailPage({
  params,
}: {
  params: { eventId: string; locale: string };
}) {
  const res = await fetch(
    `https://node2-plum.vercel.app/api/user/events/${params.eventId}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch event");

  const { event } = await res.json();

  const isUpcoming = new Date(event.EVNT_UPTO_DT) >= new Date();

  return (
    <div className="container max-w-5xl mx-auto px-4 py-10">
      {/* ✅ Banner */}
      {event.ENVT_BANNER_IMAGE && (
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl shadow-lg">
          <Image
            src={event.ENVT_BANNER_IMAGE}
            alt="Event Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* ✅ Title and Meta Info */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {event.ENVT_DESC}
        </h1>

        <div className="text-sm text-gray-500 space-y-1">
          <p>
            <span className="font-semibold text-gray-700">From:</span>{" "}
            {event.EVNT_FROM_DT}
            {" — "}
            <span className="font-semibold">To:</span> {event.EVNT_UPTO_DT}
          </p>
          <p>{event.ENVT_ADDRESS}</p>
          <p className="italic">{event.ENVT_EXCERPT}</p>
        </div>
      </div>

      {/* ✅ Detail Content */}
      {event.ENVT_DETAIL && (
        <div className="prose prose-lg prose-slate max-w-none mb-10">
          {parse(event.ENVT_DETAIL)}
        </div>
      )}

      {/* ✅ Gallery */}
      {event.ENVT_GALLERY_IMAGES && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Event Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.ENVT_GALLERY_IMAGES.split(",").map(
              (img: string, i: number) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={img.trim()}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-40 object-cover"
                    fill
                    loading="lazy"
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* ✅ Register CTA */}
      {isUpcoming && (
        <div className="mt-12 text-center">
          <Link
            href={`/${params.locale}/contact`}
            className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
}
