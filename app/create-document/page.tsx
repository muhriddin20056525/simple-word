import CreateDocumentForm from "@/components/CreateDocumentForm";
import Navbar from "@/components/Navbar";
import React from "react";

export default function CreateDocument() {
  return (
    <>
      <div className="px-10 py-5">
        <h2 className="text-4xl">Create New Document</h2>
        <CreateDocumentForm />
      </div>
    </>
  );
}
