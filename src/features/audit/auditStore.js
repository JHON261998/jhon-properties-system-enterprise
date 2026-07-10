export function loadAuditLogs() {

  const saved = localStorage.getItem("auditLogs");

  return saved ? JSON.parse(saved) : [];

}

export function saveAuditLogs(logs) {

  localStorage.setItem(
    "auditLogs",
    JSON.stringify(logs)
  );

}

export function logActivity({

  action,

  module,

  description,

}) {

  const logs = loadAuditLogs();

  logs.unshift({

    id: crypto.randomUUID(),

    timestamp: new Date().toLocaleString(),

    action,

    module,

    description,

  });

  saveAuditLogs(logs);

}