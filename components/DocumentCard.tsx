import { DocumentType } from "@/types";
import { Button } from "./ui/button";
import Link from "next/link";

interface DocumentCardProps {
  document: DocumentType;
  deleteDocument: (id: string) => void;
}

export default function DocumentCard({
  document,
  deleteDocument,
}: DocumentCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-[70%] mx-auto my-5 shadow-md p-4">
      <h2 className="text-2xl mb-3 md:mb-0">{document.name}</h2>

      <div className="flex items-center gap-3">
        <Link href={`/my-documents/${document._id}`} className="grow">
          <Button className="w-full">View</Button>
        </Link>
        <Button
          variant={"destructive"}
          onClick={() => deleteDocument(document._id)}
          className="grow"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
