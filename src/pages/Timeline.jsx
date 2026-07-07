import TimelineList from "../components/TimelineList";

import {
  getTimelineEvents,
} from "../services/timelineService";

function Timeline() {
  const events = getTimelineEvents();

  return (
    <>
      <div className="page-header">

        <div>
          <h1>Business Timeline</h1>

          <p>
            Live history of all important
            business events.
          </p>

        </div>

      </div>

      <TimelineList events={events} />

    </>
  );
}

export default Timeline;