import React, { useState } from "react";

const HumanBody: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState("None");

  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Interactive Human Body
      </h1>
      <div className="w-[200px] mx-auto relative">
        {/* Head */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 -top-[60px] cursor-pointer fill-cyan-400 hover:fill-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          width="56.594"
          height="95.031"
          viewBox="0 0 56.594 95.031"
          onClick={() => handleAreaClick("Head")}
        >
          <path d="M15.92 68.5l8.8 12.546 3.97 13.984-9.254-7.38-4.622-15.848zm27.1 0l-8.8 12.546-3.976 13.988 9.254-7.38 4.622-15.848zm6.11-27.775l.108-11.775-21.16-14.742L8.123 26.133 8.09 40.19l-3.24.215 1.462 9.732 5.208 1.81 2.36 11.63 9.72 11.018 10.856-.324 9.56-10.37 1.918-11.952 5.207-1.81 1.342-9.517zm-43.085-1.84l-.257-13.82L28.226 11.9l23.618 15.755-.216 10.37 4.976-17.085L42.556 2.376 25.49 0 10.803 3.673.002 24.415z" />
        </svg>

        {/* Chest */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-[40px] cursor-pointer fill-cyan-400 hover:fill-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="80"
          viewBox="0 0 60 80"
          onClick={() => handleAreaClick("Chest")}
        >
          <path d="M30 0C18 0 5 10 5 20v30c0 10 15 20 25 20s25-10 25-20V20C55 10 42 0 30 0z" />
        </svg>

        {/* Arms */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-[80px] cursor-pointer fill-cyan-400 hover:fill-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="50"
          viewBox="0 0 100 50"
          onClick={() => handleAreaClick("Arms")}
        >
          <path d="M0 15C0 7 10 0 20 0h60c10 0 20 7 20 15s-10 15-20 15H20C10 30 0 23 0 15z" />
        </svg>

        {/* Stomach */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-[130px] cursor-pointer fill-cyan-400 hover:fill-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="70"
          viewBox="0 0 50 70"
          onClick={() => handleAreaClick("Stomach")}
        >
          <path d="M25 0C15 0 10 10 10 20v30c0 10 10 20 15 20s15-10 15-20V20C40 10 35 0 25 0z" />
        </svg>

        {/* Legs */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-[200px] cursor-pointer fill-cyan-400 hover:fill-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="120"
          viewBox="0 0 60 120"
          onClick={() => handleAreaClick("Legs")}
        >
          <path d="M15 0C5 0 5 10 5 20v50c0 10 10 50 10 50h10s10-40 10-50V20C35 10 25 0 15 0z" />
          <path d="M35 0C25 0 25 10 25 20v50c0 10 10 50 10 50h10s10-40 10-50V20C55 10 45 0 35 0z" />
        </svg>
      </div>

      <div className="text-center mt-4">
        <p>
          Selected Area:{" "}
          <span className="font-semibold text-blue-500">{selectedArea}</span>
        </p>
      </div>
    </div>
  );
};

export default HumanBody;