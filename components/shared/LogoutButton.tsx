import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { logoutHandler } from "@/lib/serveractions";

const LogoutButton = () => {
  // inline function level server action
  // const logoutHandler = async () => {
  //   "use server";
  //   try {
  //     await signOut();
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  //   redirect("/login");
  // };

  return (
    <form action={logoutHandler}>
      <Button size="icon" className="rounded-full">
        <LogOut className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default LogoutButton;
