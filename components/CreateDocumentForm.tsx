"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateDocumentForm() {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name) return;

    try {
      const data = await axios.post("/api/document", { name });

      if (data.status == 201) {
        setName("");
        router.push("/my-documents");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-[100%] md:w-1/2 mt-3 space-y-1">
          <Label htmlFor="title">Document Name</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter Your Document Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button className="mt-3">Create Document</Button>
      </form>
    </div>
  );
}
