"use client";

import Link from "next/link";
import React from "react";
import GithubButton from "./GithubButton";
import GoogleButton from "./GoogleButton";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="shadow py-5 px-10 flex items-center justify-between">
      <Link href={"/"} className="text-2xl font-semibold">
        Simple <span className="text-red-600">Word</span>
      </Link>

      {!session?.user.id ? (
        <div className="flex gap-3">
          <GithubButton />
          <GoogleButton />
        </div>
      ) : (
        <div>
          <Link href={"/documents"}>My Documents</Link>
          <Link href={"/create-document"}>Create Document</Link>
        </div>
      )}
    </header>
  );
}
