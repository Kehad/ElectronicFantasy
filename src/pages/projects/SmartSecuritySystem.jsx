import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Calendar, MapPin, CheckCircle, Target, Code, Smartphone, AlertTriangle, ArrowRight, Lock, Eye, Zap } from 'lucide-react';

const SmartSecuritySystem = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const teamInfo = {
    company: "SafeSphere Team",
    mission: "Make smart security accessible to communities that cannot afford expensive commercial systems",
    contact: {
      phone: "+234-810-429-2570",
      email: "oluropomarynifemi@gmail.com",
      location: "White House"
    }
  };

  const objectives = [
    "Provide affordable, reliable perimeter security with multi-sensor integration",
    "Detect intrusion through ultrasonic, PIR, and reed switch sensors",
    "Send real-time GSM alerts with owner feedback control",
    "Enable remote arm/disarm functionality via GSM two-way communication"
  ];

  const components = [
    { name: "ATmega2560 Microcontroller", purpose: "Central processing and system control", specs: "Arduino Mega-compatible, multiple I/O pins" },
    { name: "Ultrasonic Sensor", purpose: "Distance monitoring and perimeter breach detection", specs: "HC-SR04, 2-400cm range, ±3mm accuracy" },
    { name: "PIR Motion Sensor", purpose: "Motion detection and movement tracking", specs: "Passive infrared, 120° detection angle" },
    { name: "Reed Switch Sensor", purpose: "Door/window access point monitoring", specs: "Magnetic contact sensor for entry points" },
    { name: "GSM Module", purpose: "Real-time alerts and remote communication", specs: "SMS/call capability, two-way communication" },
    { name: "Visual/Audio Alerts", purpose: "Local notification and deterrent system", specs: "LED indicators, buzzer alarms" }
  ];

  const features = [
    {
      title: "Multi-Sensor Reliability",
      description: "Triple-layer detection using ultrasonic, PIR, and reed switch sensors",
      icon: <Eye className="w-6 h-6 text-blue-500" />
    },
    {
      title: "GSM Communication",
      description: "Real-time alerts and remote control without internet dependency",
      icon: <Smartphone className="w-6 h-6 text-green-500" />
    },
    {
      title: "Cost-Effective Design",
      description: "Affordable alternative to expensive commercial security systems",
      icon: <Target className="w-6 h-6 text-purple-500" />
    },
    {
      title: "PIN Authentication",
      description: "Secure access control with PIN-based arm/disarm functionality",
      icon: <Lock className="w-6 h-6 text-orange-500" />
    }
  ];

  const swotAnalysis = {
    strengths: [
      "Multi-sensor reliability for accurate detection",
      "Remote GSM control with two-way feedback",
      "Affordable compared to commercial systems",
      "Works without internet connectivity"
    ],
    weaknesses: [
      "Dependent on GSM network coverage",
      "Limited to perimeter monitoring only",
      "Battery life considerations for remote deployment"
    ],
    opportunities: [
      "Rising demand for low-cost smart home solutions",
      "Potential partnerships with security agencies",
      "Scalable to IoT integration for future upgrades",
      "Government interest in community security"
    ],
    threats: [
      "Competition from established brands (Ring, Hikvision)",
      "GSM network disruptions or poor coverage",
      "Rapid technology changes requiring updates"
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'business', label: 'Business Analysis', icon: Target },
    { id: 'technical', label: 'Technical Details', icon: Code },
    { id: 'market', label: 'Market Strategy', icon: Users }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About SafeSphere</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are a team of innovators passionate about bridging the gap between technology and everyday 
                security needs. Our project, SafeSphere, was developed to provide affordable, reliable, and 
                user-friendly security solutions tailored for individuals, families, and businesses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With expertise in embedded systems, electronics, and cybersecurity, we designed a multi-sensor 
                perimeter security system that combines ultrasonic, PIR, and reed switch sensors with GSM 
                technology for real-time alerts and remote control.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Objectives</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mission & Vision</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Mission</h4>
                  <p className="text-gray-700">{teamInfo.mission}</p>
                  <div className="mt-4 text-sm text-blue-600">
                    <strong>Core Values:</strong> Innovation, Accessibility, Reliability, and Safety
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Vision</h4>
                  <p className="text-gray-700">
                    To deliver affordable, reliable, and user-friendly smart security solutions that 
                    empower individuals, families, and businesses to protect their spaces without the 
                    high cost of traditional systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SWOT Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {swotAnalysis.strengths.map((item, index) => (
                      <li key={index} className="text-sm text-green-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Weaknesses
                  </h4>
                  <ul className="space-y-2">
                    {swotAnalysis.weaknesses.map((item, index) => (
                      <li key={index} className="text-sm text-orange-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Opportunities
                  </h4>
                  <ul className="space-y-2">
                    {swotAnalysis.opportunities.map((item, index) => (
                      <li key={index} className="text-sm text-blue-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Threats
                  </h4>
                  <ul className="space-y-2">
                    {swotAnalysis.threats.map((item, index) => (
                      <li key={index} className="text-sm text-red-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">PESTLE Analysis Impact</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Political & Legal</h4>
                  <p className="text-gray-700">Government interest in security solutions and compliance with safety regulations support market growth.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Economic</h4>
                  <p className="text-gray-700">Affordability targets cost-sensitive markets where traditional systems are financially inaccessible.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Social & Technological</h4>
                  <p className="text-gray-700">Rising safety concerns combined with advances in GSM and sensor technologies create market demand.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Environmental</h4>
                  <p className="text-gray-700">Growing demand for sustainable, low-power devices in smart homes and businesses.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Components</h3>
              <div className="space-y-4">
                {components.map((component, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{component.name}</h4>
                        <p className="text-gray-700 mb-2">{component.purpose}</p>
                        <p className="text-sm text-gray-600">{component.specs}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Operation Flow</h3>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">System Initialization</h4>
                      <p className="text-gray-600">Microcontroller boots up and begins monitoring all sensor inputs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Threat Detection</h4>
                      <p className="text-gray-600">Multi-sensor array detects motion, distance breach, or door access</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Decision Making</h4>
                      <p className="text-gray-600">Microcontroller processes inputs and determines system state (safe, warning, intrusion)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alert & Response</h4>
                      <p className="text-gray-600">System triggers visual/audio alarms and sends GSM alerts to owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">No Internet Dependency</h4>
                  <p className="text-sm text-gray-700">Works reliably using GSM networks without requiring internet connectivity</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Multi-Layer Detection</h4>
                  <p className="text-sm text-gray-700">Triple sensor redundancy reduces false alarms and increases detection accuracy</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Remote Control</h4>
                  <p className="text-sm text-gray-700">Two-way GSM communication enables remote arm/disarm functionality</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cost Effective</h4>
                  <p className="text-sm text-gray-700">Affordable components make security accessible to cost-sensitive markets</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Target Market Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Residential Users</h4>
                  <p className="text-gray-700 mb-4">Homeowners seeking affordable security solutions without monthly subscription fees.</p>
                  <div className="text-sm text-blue-600">✓ Cost-conscious families ✓ Rural/suburban areas ✓ Small properties</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Small Businesses</h4>
                  <p className="text-gray-700 mb-4">SMEs requiring basic perimeter security for shops, warehouses, and offices.</p>
                  <div className="text-sm text-green-600">✓ Local retailers ✓ Storage facilities ✓ Construction sites</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Security Agencies</h4>
                  <p className="text-gray-700 mb-4">Security companies offering cost-effective monitoring solutions to clients.</p>
                  <div className="text-sm text-purple-600">✓ Partnership opportunities ✓ Bulk deployment ✓ Service integration</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Rural Communities</h4>
                  <p className="text-gray-700 mb-4">Remote areas where internet connectivity is poor but GSM coverage exists.</p>
                  <div className="text-sm text-orange-600">✓ Agricultural properties ✓ Remote facilities ✓ Community projects</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitive Positioning</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">SafeSphere vs. Competitors</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-4">Feature</th>
                        <th className="text-left py-2 px-4">SafeSphere</th>
                        <th className="text-left py-2 px-4">Ring/Hikvision</th>
                        <th className="text-left py-2 px-4">Traditional Systems</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-4 font-medium">Cost</td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Low</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">High</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Medium</span></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-4 font-medium">Internet Required</td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">No</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Yes</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">No</span></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-4 font-medium">Remote Control</td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">GSM</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">App</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">None</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Multi-Sensor</td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Yes</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Camera</span></td>
                        <td className="py-2 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Basic</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Get in Touch with SafeSphere</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Phone:</strong><br />
                    {teamInfo.contact.phone}
                  </div>
                  <div>
                    <strong>Email:</strong><br />
                    {teamInfo.contact.email}
                  </div>
                  <div>
                    <strong>Location:</strong><br />
                    {teamInfo.contact.location}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium">
                    "SafeSphere: Affordable, real-time security with multi-sensor detection and GSM control—protecting your space anytime, anywhere."
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
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-800 text-white">
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
              <Shield className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">SafeSphere Smart Security System</h1>
              <p className="text-xl text-blue-100 mb-6">Multi-Sensor Perimeter Security Solution</p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>SafeSphere Innovation Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Business Innovation Project</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Security Technology Solutions</span>
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
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
      <div className="max-w-7xl mx-auto px-6 py-12">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SmartSecuritySystem;