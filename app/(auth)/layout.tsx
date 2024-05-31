import Image from "next/image";
import React from "react";
import SnapchatIcon from "@/public/snapchat-app-icon.svg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-white p-12 flex flex-col items-center text-center shadow-lg rounded-md">
          <Image
            src={SnapchatIcon}
            alt="snapchat-app-icon"
            width={54}
            height={54}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
