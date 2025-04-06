import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/my-documents");
  }

  return (
    <div>
      <div className="text-center w-[70%] mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-2">Mini Word Editor</h1>
        <p className="text-lg text-gray-600 mt-2">
          Simple Word is a convenient online tool for creating and editing text
          documents. Log in securely with Google or GitHub to manage your
          documents safely. Edit your text freely and comfortably using the
          powerful TipTap editor. Save your documents manually and access them
          anytime you need. Simple, modern, and always useful — writing has
          never been this easy!
        </p>
      </div>

      <div className="flex items-center flex-col gap-3 mt-5 md:hidden">
        <GoogleButton />
        <GithubButton />
      </div>
    </div>
  );
}
