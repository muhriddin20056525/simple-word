import { DocumentType } from "@/types";
import { Card, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface DocumentCardProps {
  document: DocumentType;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Card className="flex items-center justify-between p-3 mb-4">
      <CardTitle className="text-xl">{document.name}</CardTitle>
      <div className="flex gap-4">
        <Button>Edit</Button>
        <Button variant={"destructive"}>Delete</Button>
      </div>
    </Card>
  );
}
