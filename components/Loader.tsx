import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-1 bg-gray-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 animate-moving-bar" />
    </div>
  );
}
