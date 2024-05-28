"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import GetCss from "@/components/get-css";
const generateGradientClass = () => {
  const gradients = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-pink-500 to-yellow-500",
    "bg-gradient-to-r from-purple-500 to-green-500",
    "bg-gradient-to-r from-red-500 to-yellow-500",
    "bg-gradient-to-r from-teal-500 to-indigo-500",
    "bg-gradient-to-r from-blue-500 to-purple-500",
    "bg-gradient-to-r from-yellow-500 to-red-500",
    "bg-gradient-to-r from-green-500 to-teal-500",
    "bg-gradient-to-r from-indigo-500 to-pink-500",
    "bg-gradient-to-r from-orange-500 to-yellow-500",
    "bg-gradient-to-r from-gray-500 to-blue-500",
    "bg-gradient-to-r from-red-400 to-yellow-500",
    "bg-gradient-to-r from-pink-400 to-purple-500",
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-blue-400 to-indigo-500",
    "bg-gradient-to-r from-teal-400 to-cyan-500",
    "bg-gradient-to-r from-purple-400 to-pink-500",
    "bg-gradient-to-r from-yellow-400 to-red-500",
    "bg-gradient-to-r from-indigo-400 to-teal-500",
    "bg-gradient-to-r from-orange-400 to-pink-500",
    "bg-gradient-to-r from-gray-400 to-red-500",
    "bg-gradient-to-r from-red-300 to-yellow-400",
    "bg-gradient-to-r from-pink-300 to-purple-400",
    "bg-gradient-to-r from-green-300 to-blue-400",
    "bg-gradient-to-r from-blue-300 to-indigo-400",
    "bg-gradient-to-r from-teal-300 to-cyan-400",
    "bg-gradient-to-r from-purple-300 to-pink-400",
    "bg-gradient-to-r from-yellow-300 to-red-400",
    "bg-gradient-to-r from-indigo-300 to-teal-400",
    "bg-gradient-to-r from-orange-300 to-pink-400",
    "bg-gradient-to-r from-gray-300 to-red-400",
    "bg-gradient-to-r from-red-200 to-yellow-300",
    "bg-gradient-to-r from-pink-200 to-purple-300",
    "bg-gradient-to-r from-green-200 to-blue-300",
    "bg-gradient-to-r from-blue-200 to-indigo-300",
    "bg-gradient-to-r from-teal-200 to-cyan-300",
    "bg-gradient-to-r from-purple-200 to-pink-300",
    "bg-gradient-to-r from-yellow-200 to-red-300",
    "bg-gradient-to-r from-indigo-200 to-teal-300",
    "bg-gradient-to-r from-orange-200 to-pink-300",
    "bg-gradient-to-r from-gray-200 to-red-300",
    "bg-gradient-to-r from-red-100 to-yellow-200",
    "bg-gradient-to-r from-pink-100 to-purple-200",
    "bg-gradient-to-r from-green-100 to-blue-200",
    "bg-gradient-to-r from-blue-100 to-indigo-200",
    "bg-gradient-to-r from-teal-100 to-cyan-200",
    "bg-gradient-to-r from-purple-100 to-pink-200",
    "bg-gradient-to-r from-yellow-100 to-red-200",
    "bg-gradient-to-r from-indigo-100 to-teal-200",
    "bg-gradient-to-r from-orange-100 to-pink-200",
    "bg-gradient-to-r from-gray-100 to-red-200",
    "bg-gradient-to-bl from-cyan-500 to-blue-500",
    "bg-gradient-to-bl from-pink-500 to-yellow-500",
    "bg-gradient-to-bl from-purple-500 to-green-500",
    "bg-gradient-to-bl from-red-500 to-yellow-500",
    "bg-gradient-to-bl from-teal-500 to-indigo-500",
    "bg-gradient-to-bl from-blue-500 to-purple-500",
    "bg-gradient-to-bl from-yellow-500 to-red-500",
    "bg-gradient-to-bl from-green-500 to-teal-500",
    "bg-gradient-to-bl from-indigo-500 to-pink-500",
    "bg-gradient-to-bl from-orange-500 to-yellow-500",
    "bg-gradient-to-bl from-gray-500 to-blue-500",
    "bg-gradient-to-bl from-red-400 to-yellow-500",
    "bg-gradient-to-bl from-pink-400 to-purple-500",
    "bg-gradient-to-bl from-green-400 to-blue-500",
    "bg-gradient-to-bl from-blue-400 to-indigo-500",
    "bg-gradient-to-bl from-teal-400 to-cyan-500",
    "bg-gradient-to-bl from-purple-400 to-pink-500",
    "bg-gradient-to-bl from-yellow-400 to-red-500",
    "bg-gradient-to-bl from-indigo-400 to-teal-500",
    "bg-gradient-to-bl from-orange-400 to-pink-500",
    "bg-gradient-to-bl from-gray-400 to-red-500",
    "bg-gradient-to-bl from-red-300 to-yellow-400",
    "bg-gradient-to-bl from-pink-300 to-purple-400",
    "bg-gradient-to-bl from-green-300 to-blue-400",
    "bg-gradient-to-bl from-blue-300 to-indigo-400",
    "bg-gradient-to-bl from-teal-300 to-cyan-400",
    "bg-gradient-to-bl from-purple-300 to-pink-400",
    "bg-gradient-to-bl from-yellow-300 to-red-400",
    "bg-gradient-to-bl from-indigo-300 to-teal-400",
    "bg-gradient-to-bl from-orange-300 to-pink-400",
    "bg-gradient-to-bl from-gray-300 to-red-400",
    "bg-gradient-to-bl from-red-200 to-yellow-300",
    "bg-gradient-to-bl from-pink-200 to-purple-300",
    "bg-gradient-to-bl from-green-200 to-blue-300",
    "bg-gradient-to-bl from-blue-200 to-indigo-300",
    "bg-gradient-to-bl from-teal-200 to-cyan-300",
    "bg-gradient-to-bl from-purple-200 to-pink-300",
    "bg-gradient-to-bl from-yellow-200 to-red-300",
    "bg-gradient-to-bl from-indigo-200 to-teal-300",
    "bg-gradient-to-bl from-orange-200 to-pink-300",
    "bg-gradient-to-bl from-gray-200 to-red-300",
    "bg-gradient-to-bl from-red-100 to-yellow-200",
    "bg-gradient-to-bl from-pink-100 to-purple-200",
    "bg-gradient-to-bl from-green-100 to-blue-200",
    "bg-gradient-to-bl from-blue-100 to-indigo-200",
    "bg-gradient-to-bl from-teal-100 to-cyan-200",
    "bg-gradient-to-bl from-purple-100 to-pink-200",
    "bg-gradient-to-bl from-yellow-100 to-red-200",
    "bg-gradient-to-bl from-indigo-100 to-teal-200",
    "bg-gradient-to-bl from-orange-100 to-pink-200",
    "bg-gradient-to-bl from-gray-100 to-red-200",
  ];

  return gradients[Math.floor(Math.random() * gradients.length)];
};

const extractColorsFromClass = (className: string) => {
  const regex = /from-(\w+-\d+) to-(\w+-\d+)/;
  const match = className.match(regex);
  if (match) {
    return { from: match[1], to: match[2] };
  }
  return { from: "unknown", to: "unknown" };
};

export default function Home() {
  const [gradientClass, setGradientClass] = useState(
    "bg-gradient-to-r from-cyan-500 to-blue-500"
  );

  const handleGradientChange = () => {
    setGradientClass(generateGradientClass());
  };

  const colors = extractColorsFromClass(gradientClass);
  return (
    <>
      <div className="flex p-4 justify-between items-center border-b border-gray-200 flex-wrap">
        <div>
          <span>{colors.from}</span> -{">"}{" "}
          <span>{colors.to}</span>
        </div>

        <div>
          <Button
            className={`${gradientClass}`}
            onClick={handleGradientChange}
          >
            Change Gradient
          </Button>
        </div>

        <div className="flex justify-between items-center gap-x-2">
          <GetCss gradientClass={gradientClass}/>
        </div>
      </div>

      <div className={`p-4 ${gradientClass} h-screen`}></div>
    </>
  );
}
