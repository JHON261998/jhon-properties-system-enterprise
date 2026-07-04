import "./App.css";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard";
import Landlords from "./pages/Landlords";
import Agencies from "./pages/Agencies";
import Properties from "./pages/Properties";
import Buildings from "./pages/Buildings";
import Units from "./pages/Units";
import Tenants from "./pages/Tenants";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/units" element={<Units />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
