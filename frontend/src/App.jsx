import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SupervisorDashboard from "./Components/SupervisorDashboard";
import Properties from "./Components/properties";
import Tenants from "./Components/Tenants";
import Units from "./Components/Units";
import Leases from "./Components/Leases";
import Maintenance from "./Components/Maintenance";
import Payments from "./Components/Payments";
import Settings from "./Components/Settings";
import TenantDashboard from "./Components/TenantDashboard";
import UserLease from "./Components/UserLease";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SupervisorDashboard />}></Route>
          <Route path="/properties" element={<Properties />}></Route>
          <Route path="/tenants" element={<Tenants />}></Route>
          <Route path="/units" element={<Units />} />
          <Route path="/leases" element={<Leases />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tenant-dashboard" element={<TenantDashboard />} />
          <Route path="/lease" element={<UserLease />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
