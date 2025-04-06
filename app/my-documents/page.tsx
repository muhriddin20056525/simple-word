"use client";

import DocumentCard from "@/components/DocumentCard";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { DocumentType } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function MyDocuments() {
  const [myDocuments, setMyDocuments] = useState<DocumentType[]>([]);

  const fetchMyDocuments = async () => {
    try {
      const { data } = await axios.get("/api/document");
      setMyDocuments(data.documents);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong");
      }
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      const { data } = await axios.delete(`/api/document/${id}`);
      toast.success(data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    fetchMyDocuments();
  }, [myDocuments]);

  return (
    <div>
      {myDocuments.length > 0 ? (
        myDocuments.map((myDocument) => (
          <DocumentCard
            key={myDocument._id}
            document={myDocument}
            deleteDocument={deleteDocument}
          />
        ))
      ) : (
        <div className="w-[70%] mt-10 mx-auto">
          <Loader />
        </div>
      )}
    </div>
  );
}
