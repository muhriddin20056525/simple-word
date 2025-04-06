import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

interface DocumentDialogProps {
  isOpenDialog: boolean;
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
  documentName: string;
  setDocumentName: Dispatch<SetStateAction<string>>;
  updateDocumentName: () => void;
}

export default function DocumentDialog({
  isOpenDialog,
  setIsOpenDialog,
  documentName,
  setDocumentName,
  updateDocumentName,
}: DocumentDialogProps) {
  const handleClick = () => {
    updateDocumentName();
    setIsOpenDialog(false);
  };

  return (
    <Dialog open={isOpenDialog} onOpenChange={() => setIsOpenDialog(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Document Name</DialogTitle>
        </DialogHeader>

        <Input
          type="text"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />

        <DialogFooter>
          <Button type="submit" onClick={handleClick}>
            Edit Name
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
