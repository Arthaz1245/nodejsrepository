import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function EventsPerCity({ data }) {
  return (
    <div>
      <h1>Events</h1>
      <div>
        {data?.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image width={100} height={200} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
