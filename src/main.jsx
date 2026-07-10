import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./App.css";
import "./styles/dashboard.css";
import "./styles/enterprise-table.css";
import "./styles/toast.css";
import "./styles/modal.css";

import { AppRefreshProvider } from "./context/AppRefreshContext";
import { ToastProvider } from "./context/ToastContext";

import {
  runBillingScheduler,
} from "./services/billingSchedulerService";

import App from "./App";

/*
-----------------------------------------
Automatic Billing Scheduler
Runs once when the application starts.
-----------------------------------------
*/

runBillingScheduler();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRefreshProvider>

      <ToastProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </ToastProvider>

    </AppRefreshProvider>
  </React.StrictMode>
);