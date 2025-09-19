import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  Locate,
  CheckCircle,
  Target,
  Code,
  Navigation,
  Wifi,
  Battery,
  AlertTriangle,
} from "lucide-react";

const CampusTracker = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Olaore Abdulbaasit Ademola", id: "EEG/2022/084" },
    { name: "Brown-Adeleye Obatonijesu Samuel", id: "EEG/2022/098" },
    { name: "Balogun Ahmed Ifedayo", id: "EEG/2022/114" },
    { name: "Oyebode Israel Oloruntoba", id: "EEG/2022/088" },
    { name: "Salami Faridah Adedolapo", id: "EEG/2022/053" },
    { name: "Oluwajana Olabode Derrick", id: "EEG/2022/105" },
    { name: "Onyeibor Izuchukwu Samuel", id: "EEG/2022/045" },
    { name: "Hadi Suleiman Adavize", id: "EEG/2023/070" },
  ];

  const objectives = [
    "Design and implement a tracker for precise indoor and outdoor location monitoring",
    "Combine GPS positioning with BLE-integrated ESP32 for enhanced accuracy",
    "Implement event-triggered tracking using accelerometer for power optimization",
    "Develop LoRa communication system for long-range data transmission",
    "Create real-time web dashboard for location visualization and monitoring",
    "Ensure low-power operation for extended battery life",
  ];

  const components = [
    {
      name: "GPS Module",
      purpose: "Outdoor location positioning and coordinate acquisition",
      specs: "Satellite-based, high accuracy outdoor positioning",
    },
    {
      name: "ESP32 Microcontroller",
      purpose: "Indoor positioning via BLE and system control",
      specs: "Integrated Wi-Fi/Bluetooth, dual-core processor",
    },
    {
      name: "LoRa Module",
      purpose: "Long-range data transmission to gateway",
      specs: "Sub-GHz ISM band, up to 15km range",
    },
    {
      name: "Accelerometer",
      purpose: "Motion detection for event-triggered operation",
      specs: "3-axis, low power consumption",
    },
    {
      name: "Accelerometer",
      purpose: "Motion detection for event-triggered operation",
      specs: "3-axis MEMS sensor, vibration detection",
    },
    {
      name: "Li-Po Battery",
      purpose: "Portable power source for tracker operation",
      specs: "Rechargeable lithium polymer, extended runtime",
    },
    {
      name: "Gateway Receiver",
      purpose: "LoRa data collection and internet relay",
      specs: "LoRa receiver with Wi-Fi connectivity",
    },
  ];

  const features = [
    {
      title: "Dual-Mode Positioning",
      description:
        "GPS for outdoor accuracy and BLE-ESP32 for indoor location tracking",
      icon: <Navigation className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Event-Triggered Operation",
      description:
        "Accelerometer-based motion detection for power-efficient tracking",
      icon: <Battery className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Long-Range Communication",
      description: "LoRa technology enables transmission up to 15km range",
      icon: <Wifi className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Real-Time Dashboard",
      description: "Web-based visualization of tracked entities across campus",
      icon: <Target className="w-6 h-6 text-orange-500" />,
    },
  ];

  const applications = [
    {
      name: "Personal Safety Tracking",
      description: "Monitor student and staff locations for emergency response",
      benefits: [
        "Emergency assistance",
        "Safety monitoring",
        "Location alerts",
      ],
    },
    {
      name: "Asset Management",
      description: "Track valuable equipment and resources across campus",
      benefits: [
        "Theft prevention",
        "Asset utilization",
        "Inventory management",
      ],
    },
    {
      name: "Campus Security",
      description: "Enhance security operations with real-time location data",
      benefits: [
        "Security patrol optimization",
        "Incident response",
        "Access monitoring",
      ],
    },
    {
      name: "Emergency Response",
      description: "Rapid location identification during emergencies",
      benefits: [
        "Fast response times",
        "Evacuation assistance",
        "Crisis management",
      ],
    },
  ];

  const systemSpecs = {
    coverage: "53 km² (OAU Campus)",
    range: "Up to 15km LoRa transmission",
    accuracy: "GPS: ±3m outdoor, BLE: room-level indoor",
    batteryLife: "Several days with event-triggered operation",
    budget: "₦120,000 approximately",
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: MapPin },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Details", icon: Code },
    { id: "applications", label: "Applications & Impact", icon: Target },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project Introduction
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The goal of this project is to design, build, and implement a
                tracker that can be used to locate an individual or object and
                transmit a visual representation of the geographical location.
                This system is focused on safeguarding and securing people and
                valuables across the entire campus grounds.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The system combines GPS technology for outdoor positioning with
                BLE-integrated ESP32 microcontrollers for indoor location
                tracking. Event-triggered operation using accelerometers ensures
                power efficiency, while LoRa communication enables long-range
                data transmission to a central monitoring system.
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
                Problem Statement
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Campus Security Challenges
                  </h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Rising crime rates affecting campus safety</li>
                    <li>
                      • Theft and loss of valuable assets and personal items
                    </li>
                    <li>
                      • Emergency response delays due to location uncertainty
                    </li>
                    <li>
                      • Missing persons incidents causing panic and distress
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Coverage Area
                  </h4>
                  <p className="text-blue-700 text-sm">
                    <strong>OAU Campus:</strong> {systemSpecs.coverage}{" "}
                    requiring comprehensive tracking solution for effective
                    monitoring and security management.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Specifications
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {systemSpecs.coverage}
                  </div>
                  <p className="text-sm text-gray-700">Coverage Area</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    15km
                  </div>
                  <p className="text-sm text-gray-700">LoRa Range</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    ±3m
                  </div>
                  <p className="text-sm text-gray-700">GPS Accuracy</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    Days
                  </div>
                  <p className="text-sm text-gray-700">Battery Life</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    ₦120k
                  </div>
                  <p className="text-sm text-gray-700">Project Budget</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    Real-time
                  </div>
                  <p className="text-sm text-gray-700">Data Updates</p>
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
                Project Team - Group 2A
              </h3>
              <p className="text-gray-600 mb-6">
                Eight dedicated students from the Department of Electronic and
                Electrical Engineering working on campus-wide tracking
                solutions.
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
                Project Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">
                      Week 1-2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Project Proposal & Planning
                    </h4>
                    <p className="text-sm text-gray-600">
                      Initial proposal draft and component selection
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">
                      Week 3-4
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Design & Development
                    </h4>
                    <p className="text-sm text-gray-600">
                      Block diagrams, schematics, and 3D design
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">
                      Week 5
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Hardware Integration
                    </h4>
                    <p className="text-sm text-gray-600">
                      Component assembly and backend server development
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">
                      Week 6
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Final Integration & Testing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Complete system testing, web app, and final report
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                SWEP 2025 Context
              </h3>
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Student Work Experience Programme (EEE 200)
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  This project is developed as part of the SWEP 2025 program in
                  the Electronic and Electrical Engineering Department, focusing
                  on practical engineering solutions for real-world problems.
                </p>
                <div className="text-sm text-indigo-600">
                  <strong>Date:</strong> Wednesday 10th September 2025
                  <br />
                  <strong>Department:</strong> Electronic and Electrical
                  Engineering, OAU
                </div>
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
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Location Acquisition
                      </h4>
                      <p className="text-gray-600 text-sm">
                        GPS module for outdoor positioning, ESP32 BLE for indoor
                        tracking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Battery className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Motion Detection
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Accelerometer triggers tracking events, optimizing power
                        consumption
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Wifi className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Data Transmission
                      </h4>
                      <p className="text-gray-600 text-sm">
                        LoRa modules transmit location data to gateway over long
                        distances
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibant text-gray-900">
                        Data Processing
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Flask API server processes data and updates web
                        dashboard in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hardware Components
              </h3>
              <div className="space-y-4">
                {components.map((component, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
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
                Technical Operation
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Event-Triggered Operation
                  </h4>
                  <p className="text-gray-700 mb-2">
                    The tracker operates in sleep mode to conserve battery. The
                    accelerometer detects movement using force calculations (F =
                    ma) to distinguish between normal and sudden movements.
                  </p>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                    if (force > threshold) trigger_tamper_alert();
                  </code>
                </div>

                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibant text-gray-900 mb-2">
                    Dual Positioning System
                  </h4>
                  <p className="text-gray-700">
                    GPS provides accurate outdoor positioning (±3m), while
                    BLE-integrated ESP32 offers room-level indoor accuracy
                    without elevation considerations.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    LoRa Communication
                  </h4>
                  <p className="text-gray-700">
                    Long-range transmission carries GPS coordinates in
                    longitude, latitude, and timestamp format to the central
                    server via gateway receiver.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Web Dashboard
                  </h4>
                  <p className="text-gray-700">
                    Flask API processes incoming data and displays real-time
                    locations on an interactive map covering the entire OAU
                    campus area.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Constraints & Challenges
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">
                    Technical Limitations
                  </h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• BLE range limitations in multi-story buildings</li>
                    <li>• LoRa accuracy over extended distances</li>
                    <li>• Component malfunction risks</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Project Constraints
                  </h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Limited 4-5 week development timeline</li>
                    <li>• Budget restrictions (₦120,000)</li>
                    <li>• 3D printing time and power requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "applications":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Primary Applications
              </h3>
              <div className="space-y-6">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg border border-gray-200"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {app.name}
                    </h4>
                    <p className="text-gray-700 mb-4">{app.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {app.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Expected Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Enhanced Security
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Reduce crime rates and improve emergency response times
                    across campus.
                  </p>
                  <div className="text-sm text-blue-600">
                    ✓ Crime deterrence ✓ Rapid response ✓ Evidence collection
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Asset Protection
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Prevent theft and loss of valuable equipment and personal
                    belongings.
                  </p>
                  <div className="text-sm text-green-600">
                    ✓ Theft prevention ✓ Recovery assistance ✓ Usage tracking
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Peace of Mind
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Reduce anxiety and panic among students, families, and staff
                    members.
                  </p>
                  <div className="text-sm text-purple-600">
                    ✓ Family reassurance ✓ Student safety ✓ Staff security
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Academic Focus
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Enable students to concentrate on academics without security
                    concerns.
                  </p>
                  <div className="text-sm text-orange-600">
                    ✓ Reduced distractions ✓ Better focus ✓ Academic success
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Future Enhancements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Wifi className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Mobile Application
                    </h4>
                    <p className="text-gray-700">
                      Develop dedicated mobile apps for real-time tracking and
                      notifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Emergency Integration
                    </h4>
                    <p className="text-gray-700">
                      Connect with campus emergency services for automated
                      alerts and response.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Battery className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Solar Charging
                    </h4>
                    <p className="text-gray-700">
                      Implement solar charging capabilities for extended battery
                      life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Target className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      AI Analytics
                    </h4>
                    <p className="text-gray-700">
                      Add machine learning for pattern recognition and
                      predictive security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Research References
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    • International Journal of Electrical and Computer
                    Engineering (IJECE) - "Location tracking using LoRa"
                  </p>
                  <p>
                    • International Journal for Research in Applied Science and
                    Engineering Technology - "Smart Tracking System for People,
                    Pets, and Assets Using LoRa and GPS"
                  </p>
                  <p>
                    • Turkish Journal of Physiotherapy and Rehabilitation - "IoT
                    Enabled BLE and LoRa Based Indoor Localization Without GPS"
                  </p>
                  <p>
                    • Various studies on IoT Asset Tracking Systems and Campus
                    Location Monitoring
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
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <MapPin className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Campus-Wide Human and Asset Tracker
              </h1>
              <p className="text-xl text-teal-100 mb-6">
                IoT-Based Location Monitoring System
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group 2A - 8 Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>SWEP 2025 (EEE 200)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Locate className="w-4 h-4" />
                  <span>OAU Campus Tracking Solution</span>
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
                      ? "border-teal-500 text-teal-600"
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

export default CampusTracker;
