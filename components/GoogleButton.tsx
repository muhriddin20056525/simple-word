"use client";

import React from "react";
import { Button } from "./ui/button";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function GoogleButton() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const res = await signIn("google", { redirect: false });
      if (res?.error) {
        toast.error("Login xatosi");
      } else {
        toast.success("Login Successfull");
        router.push("/my-documents");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={signInWithGoogle}>
      <Chrome /> SignIn With Google
    </Button>
  );
}
