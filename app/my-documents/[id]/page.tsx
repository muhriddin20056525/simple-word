"use client";

import DocumentDialog from "@/components/DocumentDialog";
import Loader from "@/components/Loader";
import TextEditor from "@/components/TextEditor";
import { DocumentType } from "@/types";
import axios from "axios";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { toast } from "sonner";

export default function DocumentDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [documentDetails, setDocumentDetails] = useState<DocumentType>();
  const [documentName, setDocumentName] = useState<string>("");
  const [documentContent, setDocumentContent] = useState<string>("");
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const router = useRouter();

  const fetchDocumentDetails = async () => {
    try {
      const { data } = await axios.get(`/api/document/${id}`);
      setDocumentDetails(data.document);
      setDocumentName(data.document.name);
      setDocumentContent(data.document.content);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong");
      }
    }
  };

  const updateDocumentName = async () => {
    try {
      const { data } = await axios.put(`/api/document/${id}`, {
        name: documentName,
        content: documentDetails?.content,
      });

      fetchDocumentDetails();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong");
      }
    }
  };

  const updateDocumentContent = async () => {
    try {
      const { data } = await axios.put(`/api/document/${id}`, {
        name: documentName,
        content: documentContent,
      });

      console.log(data);
      router.push("/my-documents");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    fetchDocumentDetails();
  }, []);

  return documentDetails ? (
    <div>
      <div className="flex items-center justify-center p-5 gap-4">
        <h2 className="text-xl font-semibold">{documentDetails?.name}</h2>
        <Edit
          className="cursor-pointer"
          onClick={() => setIsOpenDialog(true)}
        />
      </div>

      <TextEditor
        documentContent={documentContent}
        setDocumentContent={setDocumentContent}
        updateDocumentContent={updateDocumentContent}
      />

      <DocumentDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        documentName={documentName}
        setDocumentName={setDocumentName}
        updateDocumentName={updateDocumentName}
      />
    </div>
  ) : (
    <div className="w-[70%] mx-auto mt-10">
      <Loader />
    </div>
  );
}
