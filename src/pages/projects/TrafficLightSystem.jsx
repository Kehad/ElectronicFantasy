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
  Code,
  Sun,
  Car,
  ArrowRight,
  Activity,
  Gauge,
  Leaf,
} from "lucide-react";

const TrafficLightSystem = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Olalekan Olagunju", id: "EEG/2022/083" },
    { name: "Abodunrin Charles Toluwanimi", id: "EEG/2022/072" },
    { name: "Omojudi Favour", id: "EEG/2022/106" },
    { name: "Oyetunji Abdulsalam Abubakr", id: "EEG/2022/051" },
    { name: "Sunday Christian Chukwu", id: "EEG/2022/109" },
    { name: "Adeyemo Joseph", id: "EEG/2022/096" },
    { name: "Jolaawo Olukayode Joseph", id: "EEG/2022/102" },
    { name: "Alli Abdul-Quayum Olamide", id: "EEG/2022/021" },
  ];

  const supervisor = "Mr. Akinboboye";

  const objectives = [
    "Design a smart traffic light control system for three-way campus intersections",
    "Integrate ultrasonic sensors for real-time vehicle detection and density monitoring",
    "Program ESP32 microcontroller for dynamic traffic light phase control",
    "Implement LED indicators for efficient visual signaling",
    "Evaluate system performance compared to conventional fixed-time systems",
    "Achieve off-grid operation using solar power and battery backup",
  ];

  const components = [
    {
      name: "ESP32 Microcontroller",
      purpose: "Central processing and Wi-Fi connectivity",
      specs: "Dual-core 240MHz, integrated wireless capabilities",
    },
    {
      name: "HC-SR04 Ultrasonic Sensors (3x)",
      purpose: "Vehicle detection and traffic density monitoring",
      specs: "40kHz frequency, 2-400cm range, ±3mm accuracy",
    },
    {
      name: "RGB LED Modules",
      purpose: "Traffic light signal indication",
      specs: "Red, green, yellow LED arrays for each lane",
    },
    {
      name: "Solar Panel (12V 30W)",
      purpose: "Primary renewable energy source",
      specs: "Photovoltaic panel for sustainable operation",
    },
    {
      name: "12V Battery",
      purpose: "Energy storage and backup power",
      specs: "Lead-acid rechargeable battery system",
    },
    {
      name: "LCD Display",
      purpose: "System status and timing information",
      specs: "16x2 or 20x4 character display",
    },
  ];

  const features = [
    {
      title: "Adaptive Traffic Control",
      description:
        "Dynamic signal timing based on real-time vehicle density analysis",
      icon: <Activity className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Solar Powered Operation",
      description:
        "Off-grid functionality using 12V 30W solar panel and battery backup",
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Multi-Lane Detection",
      description:
        "Three ultrasonic sensors monitor vehicle presence across intersection lanes",
      icon: <Car className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Energy Efficient Design",
      description:
        "70-73% system efficiency with low power consumption components",
      icon: <Gauge className="w-6 h-6 text-purple-500" />,
    },
  ];

  const problemStatement = {
    challenges: [
      "Fixed-time traffic systems cause unnecessary delays",
      "Lagos loses ₹4 trillion annually due to traffic congestion",
      "Grid power dependency makes systems vulnerable to outages",
      "Campus events like convocation create severe traffic bottlenecks",
      "Manual traffic control is prone to human error",
    ],
    impact:
      "Traffic congestion affects 30% of Nigeria's GDP through Lagos alone, while campus events regularly overwhelm existing traffic management systems.",
  };

  const systemSpecs = {
    efficiency: "70-73%",
    batteryLife: "3+ days",
    solarOutput: "12V 30W",
    detectionRange: "2-400cm",
    responseTime: "<2 seconds",
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Zap },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Details", icon: Code },
    { id: "impact", label: "Impact & Sustainability", icon: Leaf },
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
                With the rapid growth of urbanization, traffic congestion and
                energy consumption have become constant issues in modern cities,
                particularly in developing regions with unstable power supply.
                Traditional traffic light systems rely heavily on grid power and
                centralized, time-controlled systems which makes them costly to
                maintain, vulnerable to power outages, and unable to adapt to
                fast-changing traffic scenarios.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This project presents an off-grid autonomous smart traffic light
                system for next generation urban mobility. The system employs a
                12V 30W solar panel to generate stable electricity stored in a
                12V battery. Three HC-SR04 ultrasonic sensors monitor vehicle
                numbers from each lane, with an algorithm calculating vehicle
                density and adjusting signal timing efficiently.
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
                  <h4 className="font-semibold text-red-900 mb-3">
                    Current Challenges
                  </h4>
                  <ul className="text-red-700 space-y-2 text-sm">
                    {problemStatement.challenges.map((challenge, index) => (
                      <li key={index}>• {challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">
                    Economic Impact
                  </h4>
                  <p className="text-orange-700 text-sm">
                    {problemStatement.impact}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Performance
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {systemSpecs.efficiency}
                  </div>
                  <p className="text-sm text-gray-700">System Efficiency</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {systemSpecs.batteryLife}
                  </div>
                  <p className="text-sm text-gray-700">Battery Life</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    {systemSpecs.solarOutput}
                  </div>
                  <p className="text-sm text-gray-700">Solar Output</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {systemSpecs.detectionRange}
                  </div>
                  <p className="text-sm text-gray-700">Detection Range</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {systemSpecs.responseTime}
                  </div>
                  <p className="text-sm text-gray-700">Response Time</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    Zero
                  </div>
                  <p className="text-sm text-gray-700">CO₂ Emissions</p>
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
                Project Team - Group 2 Subgroup B
              </h3>
              <p className="text-gray-600 mb-6">
                Eight dedicated students from the Department of Electronic and
                Electrical Engineering working on sustainable traffic solutions.
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
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-md">
                <h4 className="font-semibold text-blue-900 text-lg">
                  {supervisor}
                </h4>
                <p className="text-sm text-blue-600">
                  Department of Electronic and Electrical Engineering
                </p>
                <p className="text-sm text-blue-600">
                  Obafemi Awolowo University, Ile-Ife, Osun State
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Acknowledgements
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Special Recognition
                  </h4>
                  <p className="text-green-700 text-sm">
                    <strong>Dr. Olusoji Ilori</strong> - Former Head of
                    Department of Electronics and Electrical Engineering, for
                    making this project a success and supporting us throughout
                    the SWEP program.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Gratitude
                  </h4>
                  <p className="text-purple-700 text-sm">
                    Special thanks to our supervisor Mr. Akinboboye for his
                    support, guidance, and timely advice throughout the project
                    development period, and to our parents for their unending
                    moral, emotional, and financial support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Student Work Experience Programme
              </h3>
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  SWEP 200 Context
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  This project was developed as part of the Student Work
                  Experience Programme, focusing on practical engineering
                  solutions for urban mobility and sustainable energy systems.
                </p>
                <div className="text-sm text-indigo-600">
                  <strong>Program:</strong> Student Work Experience Program
                  (SWEP 200)
                  <br />
                  <strong>Department:</strong> Electronic and Electrical
                  Engineering
                  <br />
                  <strong>Institution:</strong> Obafemi Awolowo University,
                  Ile-Ife, Osun State
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
                <div className="flex items-center justify-center space-x-4 mb-8 overflow-x-auto">
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                      <Sun className="w-8 h-8 text-yellow-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Solar Panel
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Battery Storage
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Code className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      ESP32 Control
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <Car className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Traffic Signals
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Complete off-grid traffic management with renewable energy and
                  intelligent control
                </p>
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
                    className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
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
                Ultrasonic Sensor Technology
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Working Principle (SONAR)
                  </h4>
                  <p className="text-gray-700 mb-2">
                    HC-SR04 sensors use Sound Navigation and Ranging (SONAR) at
                    40 kHz frequency. Distance calculation:{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      d = v × t / 2
                    </code>
                  </p>
                  <p className="text-sm text-gray-600">
                    Where v ≈ 343 m/s (speed of sound), t = time duration
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Vehicle Detection Logic
                  </h4>
                  <p className="text-gray-700">
                    Sensors mounted facing intersection lanes detect vehicle
                    presence within 2-400cm range. Algorithm counts multiple
                    reflections to estimate queue length and traffic density.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibant text-gray-900 mb-2">
                    Adaptive Control Algorithm
                  </h4>
                  <p className="text-gray-700">
                    ESP32 processes sensor inputs and dynamically allocates
                    green light duration based on traffic density, giving longer
                    green times to busier lanes while minimizing idle waiting.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Power System Design
              </h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Power Calculations
                </h4>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">
                    Load Analysis (1 hour operation):
                  </h5>
                  <div className="text-sm text-gray-700 space-y-1 bg-gray-50 p-3 rounded">
                    <p>• 3 × 0.75W Ultrasonic Sensors = 2.25W</p>
                    <p>• 3 × 0.25W RGB LEDs = 0.75W</p>
                    <p>• 2 × 1.00W ESP32 Controllers = 2.00W</p>
                    <p className="border-t pt-1 font-medium">
                      Total Load = 5.0W
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">
                    Battery Specifications:
                  </h5>
                  <div className="text-sm text-gray-700 bg-blue-50 p-3 rounded">
                    <p>
                      <strong>RB640CS Lead-Acid Battery:</strong>
                    </p>
                    <p>• Capacity: 1200-3600 mAh at 3.7V nominal</p>
                    <p>• Charging cycles: 250+ cycles</p>
                    <p>• Dimensions: 18mm × 65mm</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">
                    System Efficiency:
                  </h5>
                  <p className="text-sm text-gray-700 bg-green-50 p-3 rounded">
                    Overall energy system efficiency: <strong>70-73%</strong>,
                    indicating effective utilization of stored battery energy
                    for continuous system operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "impact":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Environmental Impact
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Zero Emissions
                  </h4>
                  <p className="text-sm text-gray-700">
                    Operates entirely on renewable solar energy without CO₂
                    emissions
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <Sun className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Renewable Energy
                  </h4>
                  <p className="text-sm text-gray-700">
                    12V 30W solar panel provides sustainable power generation
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg text-center">
                  <Gauge className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Energy Efficient
                  </h4>
                  <p className="text-sm text-gray-700">
                    70-73% system efficiency with low-power component design
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sustainable Development Goals Impact
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    SDG 7: Affordable and Clean Energy
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Promotes clean and reliable energy through solar power
                    utilization, reducing dependence on fossil fuels.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    SDG 11: Sustainable Cities and Communities
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Enables greener, smarter urban infrastructure through
                    intelligent traffic management systems.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                    <Leaf className="w-5 h-5 mr-2" />
                    SDG 13: Climate Action
                  </h4>
                  <p className="text-green-700 text-sm">
                    Reduces CO₂ emissions and contributes to climate change
                    mitigation through emission-free operation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Economic Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Cost Savings
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Eliminates grid electricity costs</li>
                    <li>
                      • Reduces fuel consumption through better traffic flow
                    </li>
                    <li>
                      • Lower maintenance compared to conventional systems
                    </li>
                    <li>• No recurring energy bills</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Productivity Gains
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Reduced travel time and delays</li>
                    <li>• Improved campus accessibility during events</li>
                    <li>• Better traffic flow efficiency</li>
                    <li>• Enhanced emergency vehicle access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Applications & Deployment
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Campus Implementation
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Primary deployment targets OAU campus intersections,
                    particularly high-traffic areas like White House-SUB-Road 1
                    intersection during events such as matriculation and
                    convocation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Convocation periods
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Emergency access
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      Daily operations
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      Visitor management
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Scalability Potential
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Urban Applications:
                      </h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• City intersection management</li>
                        <li>• Rural area traffic control</li>
                        <li>• Industrial complex access</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Future Enhancements:
                      </h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• IoT connectivity and remote monitoring</li>
                        <li>• AI-powered traffic prediction</li>
                        <li>• Integration with city-wide systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Research Impact & Innovation
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Academic Contribution
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Demonstrates integration of renewable energy, IoT systems,
                    and intelligent algorithms in solving real-world urban
                    mobility challenges through student innovation.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-teal-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Technology Integration
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Combines solar energy harvesting, ultrasonic sensing,
                    microcontroller programming, and adaptive algorithms in a
                    single autonomous system.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Practical Implementation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Addresses specific Nigerian infrastructure challenges
                    through locally adaptable, cost-effective solutions that
                    don't require extensive grid infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Performance Validation
              </h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Experimental Results
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">
                      System Performance:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Detection Accuracy:</span>
                        <span className="font-medium text-green-600">98%+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Response Time:</span>
                        <span className="font-medium text-blue-600">
                          &lt;2 seconds
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Energy Efficiency:</span>
                        <span className="font-medium text-purple-600">
                          70-73%
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Operational Hours:</span>
                        <span className="font-medium text-orange-600">
                          72+ hours
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">
                      Environmental Benefits:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Zero carbon emissions during operation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Reduced traffic congestion and fuel waste
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Sustainable energy source utilization
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Long-term cost effectiveness
                      </li>
                    </ul>
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
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors"
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
                Off Grid Autonomous Smart Traffic Light System
              </h1>
              <p className="text-xl text-amber-100 mb-6">
                Next Generation Urban Mobility Solution
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group 2 Subgroup B - 8 Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="w-4 h-4" />
                  <span>Solar-Powered Autonomous System</span>
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
                      ? "border-amber-500 text-amber-600"
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

export default TrafficLightSystem;
