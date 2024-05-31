import React from "react";
import MainImage from "@/public/main-image.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LaptopMinimal } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { MessageSquareMore } from "lucide-react";

const Header = async () => {
  const authUser = await auth();

  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto mt-8">
      <div>
        <h1 className="text-7xl font-medium">
          Snapchat is
          <br />
          now on the
          <br />
          web!
        </h1>
        <p className="my-5">
          Chat, Snap, and video call your friends. Watch Stories
          <br />
          and Spotlight, all from your computer.
        </p>
        {authUser ? (
          <Link href="/chat">
            <Button className="rounded-full flex items-center gap-2 px-6">
              <MessageSquareMore className="w-4 h-4" /> Start chat
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button className="rounded-full flex items-center gap-2 px-6">
              <LaptopMinimal className="w-4 h-4" /> Log in to chat
            </Button>
          </Link>
        )}
      </div>
      <div>
        <Image
          src={MainImage}
          alt="less social media, more snapchat"
          width={625}
          height={625}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
