import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import SmartPowerMonitoring from "./pages/SmartPowerMonitoring";
import IoTPowerWifiMonitor from "./pages/IoTPowerWifiMonitor";
import FMTransmitter from "./pages/FMtransmitter";
import CellularSignalBooster from "./pages/CellularSignalBooster";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/projects/smart-power-monitoring"
            element={<SmartPowerMonitoring />}
          />
          <Route
            path="/projects/iot-power-wifi-monitor"
            element={<IoTPowerWifiMonitor />}
          />
          <Route path="/projects/fm-transmitter" element={<FMTransmitter />} />
          <Route
            path="/projects/cellular-signal-booster"
            element={<CellularSignalBooster />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
