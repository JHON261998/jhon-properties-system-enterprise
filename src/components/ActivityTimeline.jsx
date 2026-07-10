import { loadAuditLogs } from "../features/audit/auditStore";

function ActivityTimeline() {

  const logs = loadAuditLogs().slice(0, 10);

  return (

    <div className="dashboard-widget">

      <h2>Recent Activity</h2>

      {logs.length === 0 ? (

        <p>No activity recorded.</p>

      ) : (

        logs.map(log => (

          <div
            key={log.id}
            className="activity-item"
          >

            <div>

              <strong>{log.action}</strong>

              <br />

              <small>{log.module}</small>

            </div>

            <div>

              <small>{log.timestamp}</small>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default ActivityTimeline;