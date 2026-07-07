function TimelineEvent({ event }) {
  return (
    <div className="dashboard-card">

      <h3>{event.title}</h3>

      <p>{event.description}</p>

      <small>
        {event.date}
      </small>

      <br />

      <small>
        {event.period}
      </small>

    </div>
  );
}

export default TimelineEvent;