import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Target,
  Lightbulb,
  Code,
  Database,
  Wifi,
  Cloud,
  ArrowRight,
} from "lucide-react";

const SmartPowerMonitoring = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Ogundare Philip Oluwasogo", id: "EEG/2022/032" },
    { name: "Balogun Yusuf Oluwadamilare", id: "EEG/2022/025" },
    { name: "Lawal Olamide", id: "EEG/2023/080" },
    { name: "Oyeleke Ayomide", id: "EEG/2022/048" },
    { name: "Otuyinka Ayodeji", id: "EEG/2023/073" },
    { name: "Raji Samuel", id: "EEG/2022/052" },
    { name: "Ibrahim Abdullah Abefe", id: "EEG/2022/030" },
    { name: "Omolara-Akande Abdullah Olakunle", id: "EEG/2023/087" },
    { name: "Ayoola Yusuf Ayodele", id: "EEG/2022/023" },
    { name: "Adefemi Fawaz Adekunle", id: "EEG/2022/074" },
    { name: "Gbolagun Daniel", id: "EEG/2022/028" },
    { name: "Okojie Samson", id: "EEG/2022/034" },
    { name: "Akinbami Oluwaseun", id: "EEG/2022/018" },
  ];

  const supervisors = [
    "Dr. K. P. Ayodele",
    "Dr. Fisusi",
    "Dr. Olawole",
    "Mr. Fadahunsi",
    "Mr. Akinbile",
  ];

  const objectives = [
    "IoT-based smart power monitoring system with cloud storage",
    "Real-time data collection and analysis of electricity supply trends",
    "Identification of uninterrupted power supply windows for efficient usage",
    "A recommendation system that alerts users to reliable supply periods",
  ];

  const technologies = [
    { name: "ESP32", description: "Main microcontroller for IoT connectivity" },
    {
      name: "Blynk Platform",
      description: "Cloud dashboard for data visualization",
    },
    {
      name: "Relay Switching",
      description: "Power availability notification system",
    },
    { name: "LCD Display", description: "Local recommendations display" },
    {
      name: "Cloud Analytics",
      description: "Data analysis and trend identification",
    },
  ];

  const features = [
    {
      title: "Real-time Monitoring",
      description:
        "Continuous tracking of electricity supply status and patterns",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Smart Recommendations",
      description: "AI-driven suggestions for optimal energy usage timing",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Cloud Integration",
      description: "Secure data storage and remote access via Blynk dashboard",
      icon: <Cloud className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Cost Optimization",
      description: "Helps reduce energy costs through efficient usage planning",
      icon: <Target className="w-6 h-6 text-purple-500" />,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Zap },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Details", icon: Code },
    { id: "impact", label: "Impact & Applications", icon: Target },
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
                The problem lies in inefficient energy use and poor activity
                planning in buildings due to lack of accurate, real-time data on
                electricity availability. Current solutions are limited—they
                often don't combine monitoring with recommendations, aren't
                affordable or scalable, and are restricted to certain regions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The proposed solution is an IoT-based smart power monitoring and
                recommendation system using an ESP32 microcontroller. It tracks
                electricity supply trends, notifies users of power availability
                via relay switching, analyzes data, and displays recommendations
                on an LCD. Beyond helping households and small businesses
                optimize energy use and plan tasks, the system provides evidence
                against inflated bills, supports regulators with insights on
                distribution gaps and demand, and offers future potential for
                renewable energy integration and smart grid development.
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
                Group 4B consists of 13 dedicated students from the Department
                of Electronic and Electrical Engineering.
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
                Project Supervisors
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supervisors.map((supervisor, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-900">
                      {supervisor}
                    </h4>
                    <p className="text-sm text-blue-600">Project Supervisor</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "technical":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technologies Used
              </h3>
              <div className="grid gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Architecture
              </h3>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center space-x-8 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">Power Input</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Code className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">
                      ESP32 Processing
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <Database className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium">Data Storage</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                      <Wifi className="w-8 h-8 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium">Cloud Dashboard</span>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Real-time power monitoring with intelligent data analysis and
                  cloud-based recommendations
                </p>
              </div>
            </div>
          </div>
        );

      case "impact":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Target Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Households
                  </h4>
                  <p className="text-gray-700">
                    Helps reduce bills and maximize power usage through
                    intelligent monitoring and recommendations.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Small & Medium Enterprises
                  </h4>
                  <p className="text-gray-700">
                    Offers cost efficiency in monitoring office or shop
                    equipment and planning operations.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Educational Institutions
                  </h4>
                  <p className="text-gray-700">
                    Serves as both a utility monitor and teaching aid in
                    engineering programs.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Research & Development
                  </h4>
                  <p className="text-gray-700">
                    Supports studies on electricity use in regions with unstable
                    power supply.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Expected Impact
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Economic Benefits
                  </h4>
                  <p className="text-gray-700">
                    Reduces energy costs through optimized usage and provides
                    evidence against inflated electricity bills.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Policy Support
                  </h4>
                  <p className="text-gray-700">
                    Provides regulators with insights on distribution gaps and
                    demand patterns for better policy making.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Future Integration
                  </h4>
                  <p className="text-gray-700">
                    Offers potential for renewable energy integration and smart
                    grid development.
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
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Zap className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Smart Power Monitoring System
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                IoT-Based Energy Management Solution
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group 4B - 13 Members</span>
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
                      ? "border-blue-500 text-blue-600"
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

export default SmartPowerMonitoring;
