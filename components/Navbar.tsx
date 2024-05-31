import Image from "next/image";
import React from "react";
import SnapchatLogo from "@/public/snapchat.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4 bg-[#FFFC00]">
      <div className="flex items-center gap-4">
        <Image src={SnapchatLogo} alt="Snapchat logo" width={36} height={36} />
        <Input
          type="text"
          placeholder="Search"
          className="rounded-full bg-white text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">Stories</Button>
        <Button variant="ghost">Spotlight</Button>
        <Button variant="ghost">Chat</Button>
        <Button variant="ghost">Lenses</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white text-black"
        >
          <Grip className="w-5 h-5" />
        </Button>
        <Button className="rounded-full px-6">Snapchat Ads</Button>
        <Button className="rounded-full px-6">Download</Button>
        <Button size="icon" className="rounded-full">
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;