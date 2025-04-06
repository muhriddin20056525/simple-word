"use client";

import Link from "next/link";
import React, { useState } from "react";
import GithubButton from "./GithubButton";
import GoogleButton from "./GoogleButton";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <header className="shadow py-5 px-10 flex items-center justify-between w-full">
      <Link
        href={"/"}
        className="text-2xl font-semibold w-full md:w-fit md:text-left"
      >
        Simple <span className="text-red-600">Word</span>
      </Link>

      {!session?.user.id ? (
        <div className="hidden md:flex gap-3">
          <GithubButton />
          <GoogleButton />
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={"/my-documents"}
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

      {session?.user.id && (
        <Menu className="md:hidden" onClick={() => setMobile(true)} />
      )}
      <div
        className={`${
          mobile ? "flex" : "hidden"
        } absolute p-5 inset-2 bg-white shadow-lg flex-col justify-start gap-4`}
      >
        <X className="text-red-600 ml-auto" onClick={() => setMobile(false)} />

        <Link href="/my-documents" className="text-xl font-semibold">
          My Documents
        </Link>

        <Link href="/create-document" className="text-xl font-semibold">
          Create Document
        </Link>

        <Button
          variant="destructive"
          onClick={() => signOut()}
          className="mt-auto text-white bg-red-700 hover:bg-red-800 transition duration-300 ease-in-out"
        >
          Sign Out
        </Button>
      </div>
    </header>
  );
}
