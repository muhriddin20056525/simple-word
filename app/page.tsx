import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  const session = await getServerSession(authOption);

  if (session) {
    redirect("/documents"); // login qilingan bo‘lsa dashboardga
  }

  return (
    <div>
      <div className="text-center w-[70%] mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-2">Mini Word Editor</h1>
        <p className="text-lg text-gray-600 mt-2">
          TipTap yordamida yaratilgan yengil va qulay matn muharriri. Ushbu
          dastur hujjatlarni yaratish, tahrirlash, saqlash va yuklab olish
          imkoniyatlarini taqdim etadi. Minimalist dizayn va sodda interfeys
          foydalanuvchilarga samarali ishlash imkonini beradi.
        </p>
        <div className="flex gap-4 justify-center mt-5">
          <GithubButton />
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}
