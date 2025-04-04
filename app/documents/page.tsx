"use client";

import DocumentCard from "@/components/DocumentCard";
import { DocumentType } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Documents() {
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  const fetchDocuments = async () => {
    try {
      const { data } = await axios.get("/api/document");
      setDocuments(data.documents);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div>
      <div className="px-10 py-5">
        {documents.length > 0 ? (
          documents.map((document) => (
            <DocumentCard key={document.id} document={document} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
