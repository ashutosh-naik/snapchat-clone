import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium my-4 text-gray-900">
        Sign up to Snapchat
      </h1>
      <Button className="text-base rounded-full flex items-center gap-2 px-8 py-5 w-full my-6">
        <Github className="w-4 h-4" />
        Sign up with GitHub
      </Button>
      <p className="font-medium text-gray-900">
        Already have an account?{" "}
        <Link href="/login" className="hover:underline hover:text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
