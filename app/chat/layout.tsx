import LeftSideBar from "@/components/LeftSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LeftSideBar />
      {children}
    </div>
  );
};

export default Layout;
