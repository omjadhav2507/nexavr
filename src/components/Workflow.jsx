import React from "react";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

function Workflow() {
  return (
    <>
      <div className="mt-15">
        <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center mt-6 tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-200 text-transparent bg-clip-text">
            coding workflow.
          </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="pt-10 w-full lg:w-1/2">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*fopzpyNMN9GPvAIKdsZdaA.png"
              alt="Coding"
            />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-s">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
