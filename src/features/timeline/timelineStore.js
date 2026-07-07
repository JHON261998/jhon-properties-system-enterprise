export function loadTimeline() {
  const saved = localStorage.getItem("timeline");

  return saved ? JSON.parse(saved) : [];
}

export function saveTimeline(events) {
  localStorage.setItem(
    "timeline",
    JSON.stringify(events)
  );
}

export function createTimelineEvent(data, count) {
  return {
    id: `TL-${Date.now()}`,
    code: `EVT-${String(count + 1).padStart(5, "0")}`,

    date: new Date().toLocaleString(),

    type: data.type,

    title: data.title,

    description: data.description,

    reference: data.reference || "",

    period: data.period || "",

    entityType: data.entityType || "",

    entityId: data.entityId || "",

    createdAt: new Date().toISOString(),
  };
}