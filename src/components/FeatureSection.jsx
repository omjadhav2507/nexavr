import React from "react";
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const features = [
  {
    icon: <BotMessageSquare />,
    text: "Intuitive Drag-and-Drop Interface",
    description:
      "Effortlessly design and organize your VR environments with an intuitive drag-and-drop interface, making creation simple and efficient.",
  },
  {
    icon: <Fingerprint />,
    text: "Cross-Platform Compatibility",
    description:
      "Develop VR applications that function flawlessly across various platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Pre-built Templates",
    description:
      "Kickstart your VR projects with a diverse range of pre-built templates suited for various applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Live Real-Time Preview",
    description:
      "Instantly preview your VR application as you make changes, facilitating rapid iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Seamless Collaboration Tools",
    description:
      "Collaborate with your team in real-time on VR projects, fostering seamless teamwork and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Comprehensive Analytics Dashboard",
    description:
      "Gain in-depth insights into user interactions and behavior within your VR applications through an integrated analytics dashboard.",
  },
];

function FeatureSection() {
  return (
    <>
      <div className="relative mt-20 min-h-[100px]">
        <div className="text-center">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-300 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
            Feature
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily build{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-300 text-transparent bg-clip-text">
              your code
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-indigo-400 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
