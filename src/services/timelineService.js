import {
  loadTimeline,
  saveTimeline,
  createTimelineEvent,
} from "../features/timeline/timelineStore";

export function addTimelineEvent(data) {
  const events = loadTimeline();

  const event = createTimelineEvent(
    data,
    events.length
  );

  events.unshift(event);

  saveTimeline(events);

  return event;
}

export function getTimelineEvents() {
  let events = loadTimeline();

  if (events.length === 0) {
    events = [
      createTimelineEvent(
        {
          type: "SYSTEM",
          title: "JPS Enterprise Started",
          description:
            "Business timeline initialized.",
        },
        0
      ),
    ];

    saveTimeline(events);
  }

  return events;
}