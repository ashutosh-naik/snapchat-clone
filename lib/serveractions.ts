// module level server action
"use server";

import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import { Message, MessageDocument } from "@/models/message.model";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export const logoutHandler = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    throw error;
  }
  redirect("/login");
};
