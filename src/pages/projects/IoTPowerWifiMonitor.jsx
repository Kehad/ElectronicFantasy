import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Wifi,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Target,
  Code,
  Database,
  ArrowRight,
  MapIcon,
  Signal,
} from "lucide-react";

const IoTPowerWifiMonitor = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Akanbi Glory Inioluwa", id: "EEG/2022/017" },
    { name: "Adeyemi Israel Bamidele", id: "EEG/2022/012" },
    { name: "Oluwatoyin Favour Israel", id: "EEG/2021/082" },
    { name: "Adekunle Adedamola Philip", id: "EEG/2022/009" },
    { name: "Olarinde Jubril Olayiwola", id: "EEG/2022/120" },
    { name: "Saka Mukaram Mobolaji", id: "EEG/2023/075" },
    { name: "Adewale Abdulbasit Ayomide", id: "EEG/2022/010" },
  ];

  const supervisor = "Mr. Samuel Olayiwola";

  const objectives = [
    "Detect and display power availability (ON/OFF state) at the plug's location",
    "Collect and log wireless network parameters, including RSSI and SSID",
    "Incorporate a GPS module to obtain real-time location coordinates",
    "Upload all collected data to Firebase in real time",
    "Use logged data to generate heatmap of network signal strength",
  ];

  const components = [
    {
      name: "ESP32 Microcontroller",
      purpose: "Wi-Fi connectivity and central processing",
    },
    {
      name: "GPS Module (NEO-6M)",
      purpose: "Location tracking (latitude and longitude)",
    },
    {
      name: "AC/DC Converter (HLK-5M05)",
      purpose: "AC mains conversion to DC power",
    },
    { name: "Li-ion Battery (3.7V)", purpose: "Backup power supply" },
    {
      name: "Charging Module (TP4056)",
      purpose: "Battery charging management",
    },
    {
      name: "Boost Converter (MT3608)",
      purpose: "Voltage step-up from battery",
    },
  ];

  const features = [
    {
      title: "Power Availability Detection",
      description: "Real-time monitoring of electricity supply status (ON/OFF)",
      icon: <Target className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Wi-Fi Signal Analysis",
      description: "RSSI measurement and SSID collection for network mapping",
      icon: <Signal className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "GPS Location Tracking",
      description: "Precise geographical positioning for spatial analysis",
      icon: <MapIcon className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Firebase Integration",
      description: "Real-time cloud database synchronization",
      icon: <Database className="w-6 h-6 text-orange-500" />,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Wifi },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Details", icon: Code },
    { id: "results", label: "Results & Impact", icon: Target },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project Abstract
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This project presents the design and implementation of a system
                for real-time detection of power availability and monitoring of
                wireless network signal strength. Unlike conventional smart
                plugs that focus primarily on appliance switching or energy
                metering, this design integrates both power availability
                detection and wireless connectivity analysis in a single device.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The system employs an ESP32 microcontroller, an AC to DC
                converter, and a GPS module for location tracking. It detects
                electricity supply availability while simultaneously collecting
                Wi-Fi signal parameters such as RSSI and SSID. These parameters,
                along with GPS coordinates, are uploaded in real-time to
                Firebase for remote access and analysis, enabling the generation
                of network coverage heatmaps.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Objectives
              </h3>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "team":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Team
              </h3>
              <p className="text-gray-600 mb-6">
                A dedicated 7-member team from the Department of Electronic and
                Electrical Engineering.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.id}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Supervisor
              </h3>
              <div className="p-6 bg-green-50 rounded-lg border border-green-200 max-w-md">
                <h4 className="font-semibold text-green-900 text-lg">
                  {supervisor}
                </h4>
                <p className="text-sm text-green-600">Project Supervisor</p>
              </div>
            </div>
          </div>
        );

      case "technical":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hardware Components
              </h3>
              <div className="grid gap-4">
                {components.map((component, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {component.name}
                      </h4>
                      <p className="text-gray-600">{component.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Operation
              </h3>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Power Detection
                      </h4>
                      <p className="text-gray-600">
                        ESP32 monitors AC/DC converter output to detect power
                        availability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Wi-Fi Analysis
                      </h4>
                      <p className="text-gray-600">
                        Measures RSSI values and captures SSID information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Location Tracking
                      </h4>
                      <p className="text-gray-600">
                        GPS module provides precise latitude and longitude
                        coordinates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Cloud Upload
                      </h4>
                      <p className="text-gray-600">
                        All data synchronized to Firebase in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "results":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Test Results
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Power Detection Accuracy
                  </h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700">
                    Perfect accuracy in detecting ON/OFF power states across all
                    test scenarios.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    RSSI Range
                  </h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    -40 to -85 dBm
                  </div>
                  <p className="text-gray-700">
                    Successfully measured signal strength from excellent to weak
                    coverage areas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Sample RSSI Measurements
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-4">Distance (m)</th>
                        <th className="text-left py-2 px-4">RSSI (dBm)</th>
                        <th className="text-left py-2 px-4">Signal Quality</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">-40</td>
                        <td className="py-2 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Excellent
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-4">5</td>
                        <td className="py-2 px-4">-60</td>
                        <td className="py-2 px-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-4">10</td>
                        <td className="py-2 px-4">-72</td>
                        <td className="py-2 px-4">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                            Fair
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">15</td>
                        <td className="py-2 px-4">-85</td>
                        <td className="py-2 px-4">
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                            Weak
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Applications & Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Campus Infrastructure
                  </h4>
                  <p className="text-gray-700">
                    Enables comprehensive mapping of Wi-Fi coverage across
                    university campuses for infrastructure planning.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Network Research
                  </h4>
                  <p className="text-gray-700">
                    Provides valuable data for wireless communication research
                    and optimization studies.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Smart City Development
                  </h4>
                  <p className="text-gray-700">
                    Contributes to smart city initiatives by providing
                    connectivity and power availability data.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Cost-Effective Monitoring
                  </h4>
                  <p className="text-gray-700">
                    Offers a low-cost alternative to expensive specialized
                    network monitoring equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Wifi className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                IoT Power & Wi-Fi Strength Monitor
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Smart Connectivity Analysis System
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>7-Member Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>OAU Electronic & Electrical Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">{renderTabContent()}</div>
    </div>
  );
};

export default IoTPowerWifiMonitor;
