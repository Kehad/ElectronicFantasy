import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Signal,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Target,
  Code,
  Antenna,
  ArrowRight,
  Zap,
  Shield,
  Activity,
} from "lucide-react";

const CellularSignalBooster = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Adeduntan Oluwademilade Daniel", id: "EEG/2022/004" },
    { name: "Adeyeye Israel Boluwatife", id: "EEG/2022/013" },
    { name: "Ajani Umar Amao", id: "EEG/2022/016" },
    { name: "Adekanye Emmanuel Mololuwa", id: "EEG/2022/007" },
    { name: "Adedokun Ayomide Emmanuel", id: "EEG/2022/003" },
  ];

  const supervisor = "Mr. Samuel Olayiwola Pipeloluwa";

  const objectives = [
    "Analyze the performance of Low Noise Amplifiers (LNAs), filters, and power amplifiers in boosting weak signals",
    "Optimize circuit design for minimal signal distortion and maximum gain",
    "Ensure compliance with safety and regulatory standards for cellular communication systems",
    "Evaluate the booster's effectiveness across different frequency bands (2G, 3G, 4G, 5G)",
    "Design a compact, cost-effective, and energy-efficient system suitable for various environments",
  ];

  const components = [
    {
      name: "Donor Antenna (Yagi)",
      purpose: "Captures weak signals from cellular towers",
      specs: "High-gain directional antenna",
    },
    {
      name: "Low Noise Amplifier (LNA 2N3866)",
      purpose: "Amplifies weak signals with minimal noise",
      specs: "12-15 dB sensitivity improvement",
    },
    {
      name: "Power Amplifier",
      purpose: "Boosts signal strength for retransmission",
      specs: "30 dB gain improvement typical",
    },
    {
      name: "Indoor/Service Antenna",
      purpose: "Redistributes amplified signal in coverage area",
      specs: "Omnidirectional coverage pattern",
    },
    {
      name: "Band-pass Filters",
      purpose: "Frequency selection and interference reduction",
      specs: "Multi-band compatibility",
    },
    {
      name: "12V Regulated Power Supply",
      purpose: "Stable power for all amplification stages",
      specs: "Low-noise regulated DC supply",
    },
  ];

  const features = [
    {
      title: "30 dB Signal Gain",
      description:
        "Significant improvement from -95 dBm to -65 dBm typical performance",
      icon: <Signal className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Multi-band Support",
      description: "Compatible with 2G, 3G, 4G, and 5G frequency bands",
      icon: <Activity className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Low Noise Design",
      description: "Minimal signal distortion with optimized noise figure",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Regulatory Compliance",
      description: "Meets FCC and NCC emission guidelines for network safety",
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Signal },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Design", icon: Code },
    { id: "performance", label: "Performance & Results", icon: Target },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project Background
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Reliable cellular communication has become a critical component
                of modern infrastructure, enabling real-time connectivity for
                personal, commercial, and industrial applications. However,
                challenges such as signal attenuation, multi-path fading,
                structural obstructions, and distance from the base transceiver
                station (BTS) often result in poor cellular signal quality,
                especially in indoor environments, rural areas, or enclosed
                structures like basements and tunnels.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A typical cellular signal booster system consists of three
                primary components: an in-antenna, a bi-directional amplifier,
                and an out-antenna. The in-antenna captures the weak signal from
                the nearest cellular tower, which is then amplified and
                re-transmitted within the coverage area by the out-antenna. The
                system also operates in reverse for uplink communication,
                improving both voice quality and data throughput.
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

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Research Questions Addressed
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Energy Optimization
                  </h4>
                  <p className="text-gray-700">
                    How can the efficiency of low-power amplifiers be optimized
                    for minimal energy consumption?
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Coverage Analysis
                  </h4>
                  <p className="text-gray-700">
                    What is the relationship between input signal strength and
                    output coverage area?
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Affordability
                  </h4>
                  <p className="text-gray-700">
                    How does production cost affect accessibility for developing
                    regions?
                  </p>
                </div>
              </div>
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
                Group 5A consists of 5 dedicated students from the Department of
                Electronic and Electrical Engineering.
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
              <div className="p-6 bg-violet-50 rounded-lg border border-violet-200 max-w-md">
                <h4 className="font-semibold text-violet-900 text-lg">
                  {supervisor}
                </h4>
                <p className="text-sm text-violet-600">Project Supervisor</p>
              </div>
            </div>
          </div>
        );

      case "technical":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Architecture
              </h3>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center space-x-4 mb-8 overflow-x-auto">
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Antenna className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Donor Antenna
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Filter
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-center">LNA</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                      <Activity className="w-8 h-8 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Power Amplifier
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <Signal className="w-8 h-8 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Service Antenna
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Complete bi-directional signal amplification chain for
                  cellular communication enhancement
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Components
              </h3>
              <div className="space-y-4">
                {components.map((component, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {component.name}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {component.purpose}
                        </p>
                        <p className="text-sm text-gray-600">
                          {component.specs}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Operating Principles
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Signal Reception
                  </h4>
                  <p className="text-gray-700">
                    The Yagi donor antenna captures weak cellular signals from
                    the nearest base station, typically ranging from -95 dBm in
                    poor coverage areas.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Low Noise Amplification
                  </h4>
                  <p className="text-gray-700">
                    The 2N3866 LNA provides 12-15 dB gain while maintaining
                    excellent noise figure, preserving signal quality during
                    initial amplification.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Power Amplification & Distribution
                  </h4>
                  <p className="text-gray-700">
                    The power amplifier stage boosts signal strength to -65 dBm
                    typical, while the service antenna redistributes the
                    enhanced signal throughout the coverage area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "performance":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Performance Results
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    30 dB
                  </div>
                  <p className="text-gray-700 font-medium">Signal Gain</p>
                  <p className="text-sm text-gray-600 mt-2">
                    -95 dBm to -65 dBm improvement
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15 dB
                  </div>
                  <p className="text-gray-700 font-medium">LNA Sensitivity</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Low noise amplification improvement
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    Multi-band
                  </div>
                  <p className="text-gray-700 font-medium">Compatibility</p>
                  <p className="text-sm text-gray-600 mt-2">
                    2G, 3G, 4G, 5G support
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Before vs After Comparison
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h5 className="font-semibold text-red-900 mb-2">
                      Without Booster
                    </h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Signal strength: -95 dBm</li>
                      <li>• Poor call quality</li>
                      <li>• Slow data speeds</li>
                      <li>• Frequent dropped calls</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-900 mb-2">
                      With Booster
                    </h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Signal strength: -65 dBm</li>
                      <li>• Clear voice calls</li>
                      <li>• Significantly improved data speeds</li>
                      <li>• Reliable connection stability</li>
                    </ul>
                  </div>
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
                    Rural Areas
                  </h4>
                  <p className="text-gray-700">
                    Bridges the connectivity gap in underserved regions where
                    cellular infrastructure is sparse or absent.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Indoor Coverage
                  </h4>
                  <p className="text-gray-700">
                    Overcomes signal attenuation caused by building materials
                    and structural obstructions.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Commercial Buildings
                  </h4>
                  <p className="text-gray-700">
                    Ensures reliable communication in offices, shopping centers,
                    and other commercial facilities.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Emergency Services
                  </h4>
                  <p className="text-gray-700">
                    Provides critical communication support in areas with
                    compromised cellular infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Challenges Addressed
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Shield className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Interference Management
                    </h4>
                    <p className="text-gray-700">
                      Advanced filtering techniques prevent feedback
                      oscillations and minimize interference with base stations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Activity className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Multi-band Compatibility
                    </h4>
                    <p className="text-gray-700">
                      Broadband design supports multiple cellular frequencies
                      for comprehensive coverage enhancement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Zap className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Energy Efficiency
                    </h4>
                    <p className="text-gray-700">
                      Optimized amplifier design minimizes power consumption
                      while maintaining high performance standards.
                    </p>
                  </div>
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
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-violet-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Signal className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Cellular Signal Network Booster
              </h1>
              <p className="text-xl text-violet-100 mb-6">
                Mobile Connectivity Enhancement System
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group 5A - 5 Members</span>
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
                      ? "border-violet-500 text-violet-600"
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

export default CellularSignalBooster;
