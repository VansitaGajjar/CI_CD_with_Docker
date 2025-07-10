import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMockUp from "./components/MobileMockUp";
import TabletMockUp from "./components/TabletMockUp";
import LaptopMockUp from "./components/LaptopMockUp";
import DesktopMockUp from "./components/DesktopMockUp";
import SmartwatchMockUp from "./components/SmartwatchMockUp";

function App() {
  const [activeDevice, setActiveDevice] = useState(null);

  const toggleDevice = (device) => {
    setActiveDevice((prev) => (prev === device ? null : device));
  };

  const devices = [
    { label: "Mobile", component: <MobileMockUp />, key: "mobile" },
    { label: "Tablet", component: <TabletMockUp />, key: "tablet" },
    { label: "Laptop", component: <LaptopMockUp />, key: "laptop" },
    { label: "Desktop", component: <DesktopMockUp />, key: "desktop" },
    { label: "SmartWatch", component: <SmartwatchMockUp />, key: "smartwatch" },
  ];

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-start items-center gap-6 py-8 bg-blue-200">
      
      {/* Button Row */}
      <div className="flex flex-wrap justify-center items-center gap-4 fixed top-4 bg-white z-50 p-4 rounded-lg shadow-lg">
        {devices.map((device) => (
          <button
            key={device.key}
            onClick={() => toggleDevice(device.key)}
            className="px-4 py-2 rounded-lg shadow-md transition font-medium text-white"
          >
            {activeDevice === device.key ? `Hide ${device.label}` : `Show ${device.label}`}
          </button>
        ))}
      </div>

      {/* Spacer to prevent button overlap */}
      <div className="h-32" />

      {/* Mockup Viewer */}
      <AnimatePresence mode="wait">
        {devices.map(
          (device) =>
            activeDevice === device.key && (
              <motion.div
                key={device.key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                {device.component}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
