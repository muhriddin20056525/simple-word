"use client";

import Link from "next/link";
import React from "react";
import GithubButton from "./GithubButton";
import GoogleButton from "./GoogleButton";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

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
        <div className="flex items-center gap-4">
          <Link
            href={"/documents"}
            className="text-xl font-semibold text-gray-900"
          >
            My Documents
          </Link>
          <Link
            href={"/create-document"}
            className="text-xl font-semibold text-gray-900"
          >
            Create Document
          </Link>
          <Button variant={"destructive"} onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      )}
    </header>
  );
}
