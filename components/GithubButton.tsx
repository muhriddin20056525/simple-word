"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function GithubButton() {
  const router = useRouter();

  const handleGithubSignIn = async () => {
    try {
      const res = await signIn("github", { redirect: false });

      if (res?.error) {
        toast.error("GitHub orqali kirishda xatolik yuz berdi.");
        return;
      }

      toast.success("Muvaffaqiyatli login qilindi!");
      router.push("/my-documents");
    } catch (error) {
      console.error("Kutilmagan xatolik:", error);
      toast.error("Nomaʼlum xatolik yuz berdi.");
    }
  };

  return (
    <Button onClick={handleGithubSignIn}>
      <Github /> SignIn With Github
    </Button>
  );
}
