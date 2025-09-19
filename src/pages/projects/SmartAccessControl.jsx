import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Fingerprint,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Target,
  Code,
  CreditCard,
  ArrowRight,
  Database,
  Shield,
  Wifi,
} from "lucide-react";

const SmartAccessControl = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Samuel Joseph Abiye", id: "EEG/2022/125" },
    { name: "Ajayi Esther Miracle", id: "EEG/2023/066" },
    { name: "Ajayi Praise Pamilerin", id: "EEG/2023/067" },
    { name: "Oni Temitayo David", id: "EEG/2022/086" },
    { name: "Agunrege Abdulbasit Opeyemi", id: "EEG/2022/127" },
    { name: "Ibraheem Abdhameed Gbolahan", id: "EEG/2022/116" },
    { name: "Basheer Abdulmusqit Olamilekan", id: "EEG/2022/115" },
  ];

  const supervisors = [
    "Dr. A.M. Jubril",
    "Dr. Ogunseye",
    "Mr. Odejobi",
    "Mrs. Adesanmi",
  ];

  const objectives = [
    "Develop a dual-authentication framework integrating RFID and fingerprint biometrics",
    "Enable offline and online operation with automated database synchronization",
    "Optimize cost-effectiveness using readily available components like ESP32",
    "Automate attendance and reporting with real-time web dashboards",
    "Assess system reliability and usability in real-world scenarios",
    "Evaluate broader applications beyond education sectors",
  ];

  const components = [
    {
      name: "ESP32 Microcontroller",
      purpose: "Central control unit with Wi-Fi connectivity",
      specs: "Dual-core 240MHz, integrated Wi-Fi/Bluetooth",
    },
    {
      name: "RFID Reader (MFRC522)",
      purpose: "Contactless student ID card detection",
      specs: "13.56 MHz, 3cm-5cm reading range",
    },
    {
      name: "Fingerprint Module",
      purpose: "Biometric identity verification",
      specs: "Optical/capacitive sensor, UART interface",
    },
    {
      name: "Relay/Solenoid Lock",
      purpose: "Physical access control mechanism",
      specs: "12V DC operation, electronic door lock",
    },
    {
      name: "LCD Display (I2C)",
      purpose: "System status and user feedback",
      specs: "16x2 or 20x4 character display",
    },
    {
      name: "Local Storage",
      purpose: "Offline data logging capability",
      specs: "SPIFFS/SD card for attendance records",
    },
  ];

  const features = [
    {
      title: "Dual-Factor Authentication",
      description:
        "RFID cards combined with fingerprint verification for enhanced security",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Offline/Online Hybrid",
      description:
        "Local data storage with cloud synchronization when connectivity resumes",
      icon: <Database className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Real-time Dashboard",
      description:
        "Web-based administrative interface for monitoring and management",
      icon: <Target className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Cost-Effective Design",
      description:
        "Affordable components suitable for resource-constrained institutions",
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
    },
  ];

  const applications = [
    {
      name: "Hostel Access Control",
      description: "Secure dormitory entry with automated attendance logging",
      benefits: [
        "Prevents unauthorized access",
        "Automatic occupancy tracking",
        "Emergency evacuation assistance",
      ],
    },
    {
      name: "Examination Halls",
      description: "Student identity verification to prevent impersonation",
      benefits: [
        "Eliminates proxy attendance",
        "Maintains exam integrity",
        "Automated attendance records",
      ],
    },
    {
      name: "Laboratory Access",
      description: "Restricted area access control for sensitive facilities",
      benefits: ["Equipment security", "Usage tracking", "Safety compliance"],
    },
    {
      name: "Library Systems",
      description: "Student verification for library services and resources",
      benefits: ["Resource management", "Usage analytics", "Access control"],
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Fingerprint },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Details", icon: Code },
    { id: "applications", label: "Applications", icon: Target },
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
                This project presents the design and implementation of a Smart
                Verification and Access Control System to enhance access
                control, attendance management, and data security in educational
                environments. The system integrates Radio Frequency
                Identification (RFID) technology with fingerprint biometrics to
                ensure two-factor verification of students before granting
                access to restricted areas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At its core, an ESP32 microcontroller manages the RFID reader,
                fingerprint module, relay/solenoid lock, and indicators.
                Attendance and access logs are stored locally in offline mode
                for reliability and synchronized automatically to a cloud-based
                database when connectivity is available. Administrators can
                monitor student access in real time, generate reports, and
                manage user records remotely.
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
                Research Objectives
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
                  <h4 className="font-semibold text-red-900 mb-2">
                    Current Challenges
                  </h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>
                      • Manual attendance systems prone to fraud and errors
                    </li>
                    <li>• Single-factor authentication easily compromised</li>
                    <li>• Internet dependency causing system failures</li>
                    <li>• High implementation costs limiting adoption</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Our Solution
                  </h4>
                  <p className="text-green-700 text-sm">
                    Integrated dual-authentication system with offline
                    capability, cloud synchronization, and cost-effective
                    implementation using ESP32 microcontrollers.
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
                Project Team - Group 1A
              </h3>
              <p className="text-gray-600 mb-6">
                Seven dedicated students from the Department of Electronic and
                Electrical Engineering working on innovative access control
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
                Project Supervisors
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
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

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Special Recognition
              </h3>
              <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-100 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">
                  Mr. Musa Mayowa
                </h4>
                <p className="text-purple-700 text-sm">
                  Special thanks for mentorship, technical support, and advice
                  that greatly assisted during the execution and testing phases.
                  His contribution was instrumental to the project's successful
                  completion.
                </p>
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
                      <CreditCard className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      RFID Input
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Fingerprint className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Biometric Verify
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <Code className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      ESP32 Control
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                      <Database className="w-8 h-8 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Data Storage
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Complete dual-factor authentication with offline/online data
                  management
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
                    className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
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
                System Operation Flow
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Step 1: RFID Detection
                  </h4>
                  <p className="text-gray-700">
                    Student presents RFID card to reader. System verifies card
                    ID against registered database.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Step 2: Fingerprint Verification
                  </h4>
                  <p className="text-gray-700">
                    If RFID matches, system prompts for fingerprint. Biometric
                    data compared with stored template.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Step 3: Access Control
                  </h4>
                  <p className="text-gray-700">
                    Successful dual verification triggers door unlock and logs
                    attendance with timestamp.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Step 4: Data Management
                  </h4>
                  <p className="text-gray-700">
                    Record stored locally and synchronized to cloud database
                    when internet connection available.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Performance Metrics
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    97%
                  </div>
                  <p className="text-gray-700 font-medium">
                    Fingerprint Accuracy
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Biometric verification success rate
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    &lt;2s
                  </div>
                  <p className="text-gray-700 font-medium">Verification Time</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Average dual-factor authentication
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    98%
                  </div>
                  <p className="text-gray-700 font-medium">
                    Data Sync Reliability
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Offline to cloud synchronization
                  </p>
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
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
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
                Broader Impact Sectors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Healthcare
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Patient identification and secure access to medical
                    facilities with sensitive health data handling.
                  </p>
                  <div className="text-sm text-blue-600">
                    ✓ Patient safety ✓ HIPAA compliance ✓ Access tracking
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Corporate Environments
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Employee time-tracking and secure office access with HR
                    system integration.
                  </p>
                  <div className="text-sm text-green-600">
                    ✓ Workforce management ✓ Security compliance ✓ Efficiency
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Public Sector
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Government building access for citizen verification while
                    maintaining privacy.
                  </p>
                  <div className="text-sm text-purple-600">
                    ✓ Citizen services ✓ Privacy protection ✓ Security
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Smart Cities
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Scalable biometric solutions for developing regions with
                    better resource management.
                  </p>
                  <div className="text-sm text-orange-600">
                    ✓ Urban infrastructure ✓ Resource optimization ✓ Scalability
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
                      Mobile Application Integration
                    </h4>
                    <p className="text-gray-700">
                      Develop dedicated Android/iOS apps for administrators and
                      users with push notifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Users className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Facial Recognition Support
                    </h4>
                    <p className="text-gray-700">
                      Add facial recognition as alternative or complementary
                      biometric authentication method.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Target className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Multi-Location Deployment
                    </h4>
                    <p className="text-gray-700">
                      Expand system to manage multiple access points
                      simultaneously across campuses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <Database className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      AI-Driven Analytics
                    </h4>
                    <p className="text-gray-700">
                      Integrate artificial intelligence to detect unusual
                      patterns and suspected fraud attempts.
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
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Fingerprint className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Smart Verification and Access Control System
              </h1>
              <p className="text-xl text-indigo-100 mb-6">
                RFID + Biometric Dual-Factor Authentication
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group 1A - 7 Members</span>
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
                      ? "border-indigo-500 text-indigo-600"
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

export default SmartAccessControl;
