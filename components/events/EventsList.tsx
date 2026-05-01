"use client";

import { EventCard } from "@/components/events/EventCard";
import { EventEmptyState } from "@/components/events/EventEmptyState";
import { EVENTS } from "@/lib/events";

export function EventsList() {
  if (EVENTS.length === 0) return <EventEmptyState />;

  const sorted = [...EVENTS].sort((a, b) => {
    const isUpcomingA = a.status === "upcoming" || a.status === "sold-out";
    const isUpcomingB = b.status === "upcoming" || b.status === "sold-out";
    if (isUpcomingA && !isUpcomingB) return -1;
    if (!isUpcomingA && isUpcomingB) return 1;
    if (isUpcomingA) return a.date.localeCompare(b.date);
    return b.date.localeCompare(a.date);
  });

  return (
    <ul className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 md:px-10 md:py-16">
      {sorted.map((event, i) => (
        <li key={event.id}>
          <EventCard event={event} index={i} />
        </li>
      ))}
    </ul>
  );
}
