import TimelineEvent from "./TimelineEvent";

function TimelineList({ events }) {
  if (events.length === 0) {
    return (
      <div className="empty-state">
        No Timeline Events
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      {events.map((event) => (
        <TimelineEvent
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default TimelineList;