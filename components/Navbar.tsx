import Image from "next/image";
import React from "react";
import SnapchatLogo from "@/public/snapchat.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";
import { auth } from "@/auth";
import LogoutButton from "./shared/LogoutButton";
import Link from "next/link";

const Navbar = async () => {
  const authUser = await auth();

  return (
    <div className="flex items-center justify-between w-screen px-10 py-4 bg-[#FFFC00]">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src={SnapchatLogo}
            alt="Snapchat logo"
            width={40}
            height={40}
          />
        </Link>
        <Input
          type="text"
          placeholder="Search"
          className="rounded-full bg-white text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">Stories</Button>
        <Button variant="ghost">Spotlight</Button>
        <Link href="/chat">
          <Button variant="ghost">Chat</Button>
        </Link>
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
        {authUser ? (
          <LogoutButton />
        ) : (
          <Link href="/login">
            <Button className="rounded-full">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
