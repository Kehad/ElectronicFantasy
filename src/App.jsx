// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import SmartPowerMonitoring from "./pages/projects/SmartPowerMonitoring";
// import IoTPowerWifiMonitor from "./pages/projects/IoTPowerWifiMonitor";
// import FMTransmitter from "./pages/projects/FMtransmitter";
// import CellularSignalBooster from "./pages/projects/CellularSignalBooster";
// import SmartSecuritySystem from "./pages/projects/SmartSecuritySystem";
// import Layout from "./pages/Layout";
// // import HumanAssetTracker from "./pages/HumanAssetTracker";

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route
//             path="/projects/smart-power-monitoring"
//             element={<SmartPowerMonitoring />}
//           />
//           <Route
//             path="/projects/iot-power-wifi-monitor"
//             element={<IoTPowerWifiMonitor />}
//           />
//           <Route path="/projects/fm-transmitter" element={<FMTransmitter />} />
//           <Route path="/" element={<LandingPage />} />
//           <Route
//             path="/projects/cellular-signal-booster"
//             element={<CellularSignalBooster />}
//           />
//           <Route
//             path="/projects/smart-traffic-light"
//             element={<SmartSecuritySystem />}
//           />
//           {/* <Route
//             path="/projects/human-asset-tracker"
//             element={<HumanAssetTracker />} */}
//           {/* />  */}
//           {/*
          
//           <Route
//             path="/projects/smart-access-control"
//             element={<SmartAccessControl />}
//           />
//           */}
//           {/* <Route path="/projects/progress-report" element={<ProgressReport />} />
//           <Route
//             path="/projects/smart-traffic-light"
//             element={<TrafficSystem />}
//           />
//           <Route
//             path="/projects/safesphere-security"
//             element={<SafeSphereSecurity />}
//           /> */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SmartPowerMonitoring from "./pages/projects/SmartPowerMonitoring";
import IoTPowerWifiMonitor from "./pages/projects/IoTPowerWifiMonitor";
import FMTransmitter from "./pages/projects/FMTransmitter";
import CellularSignalBooster from "./pages/projects/CellularSignalBooster";
import SmartSecuritySystem from "./pages/projects/SmartSecuritySystem";
import SmartAccessControl from "./pages/projects/SmartAccessControl";
import CampusTracker from "./pages/projects/CampusTracker";
import TrafficLightSystem from "./pages/projects/TrafficLightSystem";
import Layout from "./pages/Layout";

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
          <Route
            path="/projects/smart-security-system"
            element={<SmartSecuritySystem />}
          />
          <Route
            path="/projects/smart-access-control"
            element={<SmartAccessControl />}
          />
          <Route path="/projects/campus-tracker" element={<CampusTracker />} />
          <Route
            path="/projects/traffic-light-system"
            element={<TrafficLightSystem />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;