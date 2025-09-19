// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Home,
//   Zap,
//   Wifi,
//   Radio,
//   Signal,
//   Shield,
//   Lock,
//   MapIcon,
//   Car,
// } from "lucide-react";

// const Layout = ({ children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: "Home", href: "/", icon: Home },
//     {
//       name: "Smart Power Monitor",
//       href: "/projects/smart-power-monitoring",
//       icon: Zap,
//     },
//     {
//       name: "IoT WiFi Monitor",
//       href: "/projects/iot-power-wifi-monitor",
//       icon: Wifi,
//     },
//     { name: "FM Transmitter", href: "/projects/fm-transmitter", icon: Radio },
//     {
//       name: "Signal Booster",
//       href: "/projects/cellular-signal-booster",
//       icon: Signal,
//     },
//     {
//       name: "SafeSphere Security",
//       href: "/projects/safesphere-security",
//       icon: Shield,
//     },
//     {
//       name: "Access Control",
//       href: "/projects/smart-access-control",
//       icon: Lock,
//     },
//     { name: "Human and Asset Tracker", href: "/projects/human-asset-tracker", icon: MapIcon },
//     { name: "Traffic Light", href: "/projects/smart-traffic-light", icon: Car },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Link to="/" className="flex items-center">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-lg">OAU</span>
//                 </div>
//                 <div className="ml-3">
//                   <h1 className="text-lg font-semibold text-gray-900">
//                     Engineering Showcase
//                   </h1>
//                   <p className="text-xs text-gray-500">
//                     Electronic & Electrical Engineering
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:block">
//               <div className="flex space-x-8">
//                 {navigation.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                         isActive(item.href)
//                           ? "text-blue-600 bg-blue-50"
//                           : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                       }`}
//                     >
//                       <Icon className="w-4 h-4 mr-2" />
//                       {item.name}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </nav>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
//               >
//                 {isMenuOpen ? (
//                   <X className="block h-6 w-6" />
//                 ) : (
//                   <Menu className="block h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
//               {navigation.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                       isActive(item.href)
//                         ? "text-blue-600 bg-blue-50"
//                         : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5 mr-3" />
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Main Content */}
//       <main className="flex-1">{children}</main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h3 className="text-2xl font-bold mb-4">
//             Obafemi Awolowo University
//           </h3>
//           <p className="text-gray-400 mb-6">
//             Department of Electronic and Electrical Engineering
//           </p>
//           <p className="text-gray-500 text-sm">
//             Showcasing innovative student projects • September 2025
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Zap,
  Wifi,
  Radio,
  Signal,
  Shield,
  Fingerprint,
  MapPin,
} from "lucide-react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    // {
    //   name: "Smart Power Monitor",
    //   href: "/projects/smart-power-monitoring",
    //   icon: Zap,
    // },
    // {
    //   name: "IoT WiFi Monitor",
    //   href: "/projects/iot-power-wifi-monitor",
    //   icon: Wifi,
    // },
    // { name: "FM Transmitter", href: "/projects/fm-transmitter", icon: Radio },
    // {
    //   name: "Signal Booster",
    //   href: "/projects/cellular-signal-booster",
    //   icon: Signal,
    // },
    // {
    //   name: "Security System",
    //   href: "/projects/smart-security-system",
    //   icon: Shield,
    // },
    // {
    //   name: "Access Control",
    //   href: "/projects/smart-access-control",
    //   icon: Fingerprint,
    // },
    // { name: "Campus Tracker", href: "/projects/campus-tracker", icon: MapPin },
    // {
    //   name: "Traffic Light",
    //   href: "/projects/traffic-light-system",
    //   icon: Zap,
    // },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">OAU</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-lg font-semibold text-gray-900">
                    Electronic Fantasy
                  </h1>
                  <p className="text-xs text-gray-500">
                    Electronic & Electrical Engineering
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block mx-auto">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 max-h-96 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Obafemi Awolowo University
          </h3>
          <p className="text-gray-400 mb-6">
            Department of Electronic and Electrical Engineering
          </p>
          <p className="text-gray-500 text-sm">
            Showcasing innovative student projects • September 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;