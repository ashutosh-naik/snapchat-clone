import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    <form>
      <Button size="icon" className="rounded-full">
        <LogOut className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default LogoutButton;
