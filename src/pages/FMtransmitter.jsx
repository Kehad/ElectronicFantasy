import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Radio,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Target,
  Code,
  Volume2,
  ArrowRight,
  Mic,
  Speaker,
  Zap,
} from "lucide-react";

const FMTransmitter = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    { name: "Adegoke Adeniyi Feranmi", id: "EEG/2022/005" },
    { name: "Adegoke Ajibola Oluwaseun", id: "EEG/2022/006" },
    { name: "Adekunjo Ademola Adeoye", id: "EEG/2022/008" },
    { name: "Adewumi Adenike Deborah", id: "EEG/2022/011" },
    { name: "Adigun Kehinde Gabriel", id: "EEG/2022/014" },
    { name: "Ajibade Fuad Adetoye", id: "EEG/2022/113" },
    { name: "Rabiu Abdul-lateef Ayodeji", id: "EEG/2022/124" },
  ];

  const supervisor = "Dr. E. Obayiuwana";

  const objectives = [
    "Design and construct an FM transmitter operating within the standard FM band (88–108 MHz)",
    "Ensure reliable audio transmission over the required range of a lecture theatre",
    "Minimize cost of design and implementation while maintaining acceptable audio quality",
    "Provide a scalable and portable solution for various lecture hall settings",
  ];

  const components = [
    {
      name: "Electret Microphone",
      purpose: "Audio input and sound capture",
      specs: "5-10 mV output, 852Ω internal resistance",
    },
    {
      name: "2N3904 Transistor (Q1)",
      purpose: "Audio pre-amplification",
      specs: "Gain: 100-300, amplifies to ~1V peak-to-peak",
    },
    {
      name: "2N2222 Transistors (Q2, Q3)",
      purpose: "RF oscillation and power amplification",
      specs: "fT ≈ 250 MHz, hFE ≈ 100-300",
    },
    {
      name: "LC Tank Circuit",
      purpose: "Frequency generation and tuning",
      specs: "Tuned to 96.3 MHz carrier frequency",
    },
    {
      name: "74cm Monopole Antenna",
      purpose: "Quarter-wave transmission",
      specs: "Optimized for 96.3 MHz resonance",
    },
    {
      name: "9V Battery",
      purpose: "Portable power source",
      specs: "DC power supply for all stages",
    },
  ];

  const features = [
    {
      title: "Professional Audio Quality",
      description:
        "Clear, static-free FM transmission with excellent sound fidelity",
      icon: <Volume2 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Optimal Range Coverage",
      description:
        "80-90 meter effective transmission radius for lecture halls",
      icon: <Target className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Accessibility Support",
      description: "Compatible with hearing aids via neck loop accessories",
      icon: <Speaker className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Cost-Effective Design",
      description: "Low-cost alternative to traditional PA systems",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Radio },
    { id: "team", label: "Team", icon: Users },
    { id: "technical", label: "Technical Design", icon: Code },
    { id: "applications", label: "Applications", icon: Target },
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
                In many higher institutions, particularly in large lecture
                theatres, students often experience difficulty hearing lecturers
                clearly. Poor room acoustics, background noise, and the limited
                projection of the human voice all contribute to reduced
                audibility. This situation forces students, especially those
                seated at the back, to strain in order to follow lectures, which
                can negatively affect comprehension and overall learning
                outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By applying FM transmission to lecture theatres, the lecturer's
                voice can be broadcast directly to students' portable receivers
                (such as radios or mobile devices with FM capability). This
                ensures that every student can hear clearly, regardless of
                seating position, while avoiding the misuse and acoustic
                challenges of conventional PA systems.
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
                Technical Specifications
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    96.3 MHz
                  </div>
                  <p className="text-sm text-gray-700">Carrier Frequency</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    80-90m
                  </div>
                  <p className="text-sm text-gray-700">Transmission Range</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    9V DC
                  </div>
                  <p className="text-sm text-gray-700">Power Supply</p>
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
                Group 5C consists of 7 dedicated students from the Department of
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
              <div className="p-6 bg-orange-50 rounded-lg border border-orange-200 max-w-md">
                <h4 className="font-semibold text-orange-900 text-lg">
                  {supervisor}
                </h4>
                <p className="text-sm text-orange-600">Project Supervisor</p>
              </div>
            </div>
          </div>
        );

      case "technical":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                System Block Diagram
              </h3>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center space-x-4 mb-8 overflow-x-auto">
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Mic className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Voice Input
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Volume2 className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Pre-Amplifier
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <Radio className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      FM Modulator
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      RF Amplifier
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <Speaker className="w-8 h-8 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      Antenna
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Complete FM transmission chain from audio input to radio wave
                  transmission
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
                    className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
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
                Circuit Operation Principles
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Audio Pre-amplification
                  </h4>
                  <p className="text-gray-700">
                    The weak 5-10 mV microphone signal is amplified by Q1
                    (2N3904) with a gain of 100-300, increasing the signal to
                    approximately 1V peak-to-peak for effective modulation.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    FM Modulation
                  </h4>
                  <p className="text-gray-700">
                    The LC tank circuit with Q2 generates a 96.3 MHz carrier
                    frequency. Audio signals modulate this carrier by varying
                    the oscillator frequency, achieving true frequency
                    modulation.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    RF Power Amplification
                  </h4>
                  <p className="text-gray-700">
                    Q3 (2N2222) amplifies the modulated RF signal while
                    providing isolation between the oscillator and antenna,
                    preventing frequency pulling and ensuring stable
                    transmission.
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Educational Institutions
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Clear audibility in large lecture halls, improving teaching
                    and learning experience for both lecturers and students.
                  </p>
                  <div className="text-sm text-blue-600">
                    ✓ Better student engagement ✓ Reduced strain for lecturers
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Accessibility Support
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Integration with neck loop accessories for hearing aid
                    users, bridging inequality gaps in educational systems.
                  </p>
                  <div className="text-sm text-green-600">
                    ✓ Hearing impaired support ✓ Inclusive education
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Public Events
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Suitable for social clubs, religious ceremonies, and
                    community gatherings requiring clear audio distribution.
                  </p>
                  <div className="text-sm text-purple-600">
                    ✓ Versatile applications ✓ Cost-effective solution
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Emergency Communication
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Portable design enables use in emergency situations and
                    disaster relief scenarios.
                  </p>
                  <div className="text-sm text-orange-600">
                    ✓ Emergency response ✓ Portable operation
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advantages Over Traditional Systems
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cost Effectiveness
                    </h4>
                    <p className="text-gray-700">
                      Low-cost, energy-efficient alternative to traditional PA
                      systems, benefiting institutions with limited funding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      No Feedback Issues
                    </h4>
                    <p className="text-gray-700">
                      Unlike conventional PA systems, FM transmission eliminates
                      acoustic feedback and microphone placement constraints.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Universal Compatibility
                    </h4>
                    <p className="text-gray-700">
                      Works with any FM-capable device including mobile phones,
                      radios, and hearing aids with appropriate accessories.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Portable Design
                    </h4>
                    <p className="text-gray-700">
                      Battery-powered operation allows flexible deployment
                      across different venues without infrastructure
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Future Enhancements
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Digital Integration
                  </h4>
                  <p className="text-sm text-gray-700">
                    Integration with digital audio systems and wireless
                    microphones
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Multi-channel Support
                  </h4>
                  <p className="text-sm text-gray-700">
                    Multiple frequency channels for simultaneous language
                    translation
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Smart Controls
                  </h4>
                  <p className="text-sm text-gray-700">
                    Automatic gain control and noise reduction features
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
      <div className="bg-gradient-to-r from-orange-600 via-red-400 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Radio className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Low-Cost FM Audio Transmitter
              </h1>
              <p className="text-xl text-orange-100 mb-6">
                Educational Communication Solution
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Group 5C - 7 Members</span>
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
                      ? "border-orange-500 text-orange-600"
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

export default FMTransmitter;
