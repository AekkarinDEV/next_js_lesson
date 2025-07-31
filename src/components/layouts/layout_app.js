"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LayoutApp = ({ children }) => {
  const [timeText, setTimeText] = useState(null);

  const navigate = useRouter();

  const addTime = () => {
    setTimeout(() => {
      setTimeText(100);
    }, 4000);
  };

  useEffect(() => {
    addTime();
  });
  return (
    <div className="text-black">
      <div className="w-screen flex justify-center h-14 bg-blue-300">
        HEADER time = <p>{timeText}</p>
      </div>
      <div className="flex">
        <div className="h-screen w-96 bg-green-50 flex flex-col">
          <button onClick={() => navigate.push("page_one")}>page_one</button>
          <button onClick={() => navigate.push("page_two")}>page_two</button>
        </div>
        {children}
      </div>
    </div>
  );
};
