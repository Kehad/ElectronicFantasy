import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Radio,
  Wifi,
  Signal,
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Shield,
  Fingerprint,
} from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Smart Power Monitoring System",
      subtitle: "IoT-Based Energy Management",
      description:
        "An innovative IoT system that tracks electricity supply trends, provides real-time notifications, and offers data-driven recommendations for optimal energy usage.",
      icon: <Zap className="w-8 h-8" />,
      team: "Group 4B - 13 Members",
      date: "September 2025",
      technologies: ["ESP32", "Blynk", "IoT", "Cloud Analytics"],
      highlights: [
        "Real-time electricity supply monitoring",
        "Smart recommendations via dashboard",
        "Cloud-based data analytics",
      ],
      gradient: "from-blue-600 via-purple-600 to-indigo-800",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100",
      link: "/projects/smart-power-monitoring",
    },
    {
      id: 2,
      title: "IoT Power & Wi-Fi Monitor",
      subtitle: "Smart Connectivity Analysis",
      description:
        "A smart plug system that detects power availability while simultaneously monitoring Wi-Fi signal strength and GPS coordinates.",
      icon: <Wifi className="w-8 h-8" />,
      team: "7-Member Team",
      date: "September 2025",
      technologies: ["ESP32", "Firebase", "GPS", "RSSI"],
      highlights: [
        "Dual-purpose monitoring system",
        "Real-time Firebase integration",
        "Network coverage heatmaps",
      ],
      gradient: "from-green-600 via-teal-600 to-cyan-800",
      bgPattern: "bg-gradient-to-br from-green-50 to-teal-100",
      link: "/projects/iot-power-wifi-monitor",
    },
    {
      id: 3,
      title: "Low-Cost FM Audio Transmitter",
      subtitle: "Educational Communication Solution",
      description:
        "A portable FM transmitter designed for lecture halls, enabling clear audio transmission to students' devices.",
      icon: <Radio className="w-8 h-8" />,
      team: "Group 5C - 7 Members",
      date: "September 2025",
      technologies: ["FM Modulation", "RF Amplification", "Audio Processing"],
      highlights: [
        "88-108 MHz FM band operation",
        "80-90 meter effective range",
        "Hearing aid compatibility",
      ],
      gradient: "from-orange-600 via-red-600 to-pink-800",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-100",
      link: "/projects/fm-transmitter",
    },
    {
      id: 4,
      title: "Cellular Signal Network Booster",
      subtitle: "Mobile Connectivity Enhancement",
      description:
        "An efficient cellular signal booster that amplifies weak mobile network signals, improving call quality and data transmission.",
      icon: <Signal className="w-8 h-8" />,
      team: "Group 5A - 5 Members",
      date: "September 2025",
      technologies: ["RF Amplification", "LNA", "Signal Processing"],
      highlights: [
        "30 dB signal gain improvement",
        "Multi-band compatibility",
        "Low noise amplification",
      ],
      gradient: "from-violet-600 via-purple-600 to-fuchsia-800",
      bgPattern: "bg-gradient-to-br from-violet-50 to-purple-100",
      link: "/projects/cellular-signal-booster",
    },
    {
      id: 5,
      title: "SafeSphere Security System",
      subtitle: "Multi-Sensor Perimeter Protection",
      description:
        "An affordable smart security system combining ultrasonic, PIR, and reed sensors with GSM alerts for comprehensive protection.",
      icon: <Shield className="w-8 h-8" />,
      team: "SafeSphere Innovation Team",
      date: "Business Project",
      technologies: ["ATmega2560", "GSM", "Multi-Sensor", "Remote Control"],
      highlights: [
        "Triple-layer sensor detection",
        "GSM two-way communication",
        "Cost-effective design",
      ],
      gradient: "from-blue-600 via-indigo-600 to-purple-800",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100",
      link: "/projects/smart-security-system",
    },
    {
      id: 6,
      title: "Smart Access Control System",
      subtitle: "RFID + Biometric Authentication",
      description:
        "A dual-factor verification system using RFID cards and fingerprint biometrics with offline/online hybrid operation.",
      icon: <Fingerprint className="w-8 h-8" />,
      team: "Group 1A - 7 Members",
      date: "September 2025",
      technologies: ["ESP32", "RFID", "Fingerprint", "Cloud Sync"],
      highlights: [
        "Dual-factor authentication",
        "Offline/online hybrid operation",
        "Real-time admin dashboard",
      ],
      gradient: "from-indigo-600 via-purple-600 to-pink-800",
      bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-100",
      link: "/projects/smart-access-control",
    },
    {
      id: 7,
      title: "Campus-Wide Asset Tracker",
      subtitle: "IoT Location Monitoring System",
      description:
        "A comprehensive tracking system using GPS, BLE, and LoRa for monitoring people and assets across the entire campus.",
      icon: <MapPin className="w-8 h-8" />,
      team: "Group 2A - 8 Members",
      date: "SWEP 2025",
      technologies: ["GPS", "LoRa", "BLE", "Accelerometer"],
      highlights: [
        "Dual GPS and BLE positioning",
        "Event-triggered power saving",
        "15km LoRa transmission range",
      ],
      gradient: "from-teal-600 via-cyan-600 to-blue-800",
      bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-100",
      link: "/projects/campus-tracker",
    },
    {
      id: 8,
      title: "Smart Traffic Light System",
      subtitle: "Solar-Powered Autonomous Control",
      description:
        "An off-grid traffic management system using ultrasonic sensors and solar power for adaptive signal control based on traffic density.",
      icon: <Zap className="w-8 h-8" />,
      team: "Group 2B - 8 Members",
      date: "September 2025",
      technologies: ["ESP32", "Solar Power", "Ultrasonic", "LED Control"],
      highlights: [
        "Off-grid solar operation",
        "Adaptive traffic density control",
        "70-73% energy efficiency",
      ],
      gradient: "from-amber-600 via-orange-600 to-red-800",
      bgPattern: "bg-gradient-to-br from-amber-50 to-orange-100",
      link: "/projects/traffic-light-system",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium border border-white/20">
                <MapPin className="w-4 h-4 mr-2" />
                Obafemi Awolowo University • Department of Electronic &
                Electrical Engineering
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-gray-300">
                Showcase
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge projects from our talented engineering
              students, featuring IoT solutions, communication systems, and
              innovative technologies designed to solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore Projects
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Projects Grid */}
      <div id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions addressing real-world challenges in power
            monitoring, communication systems, security, and smart city
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Card Header */}
              <div className={`${project.bgPattern} px-6 py-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                  >
                    {project.icon}
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <Users className="w-3 h-3" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Card Content */}
              <div className="px-6 py-5">
                <p className="text-gray-700 mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-center gap-2"
                      >
                        <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link
                  to={project.link}
                  className={`group/btn inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                >
                  View Project Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">Featured Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Student Contributors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2025</div>
              <div className="text-blue-100">Academic Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
