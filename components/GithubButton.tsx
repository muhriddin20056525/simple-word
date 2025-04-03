"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function GithubButton() {
  const router = useRouter();

  const signInWithGithub = async () => {
    try {
      const res = await signIn("github", { redirect: false });
      if (res?.error) {
        toast.error("Login xatosi");
      } else {
        toast.success("Login Successfull");
        router.push("/documents");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={signInWithGithub}>
      <Github /> SignIn With Github
    </Button>
  );
}
