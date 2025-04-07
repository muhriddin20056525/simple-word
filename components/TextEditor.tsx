"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./MenuBar";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

interface TextEditorProps {
  documentContent: string;
  setDocumentContent: Dispatch<SetStateAction<string>>;
  updateDocumentContent: () => void;
}

export default function TextEditor({
  documentContent,
  setDocumentContent,
  updateDocumentContent,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: documentContent,

    onUpdate: ({ editor }) => {
      setDocumentContent(editor.getHTML());
    },

    editorProps: {
      attributes: {
        class: "w-full min-h-[80vh] border outline-none p-5 rounded-sm",
      },
    },
  });

  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-4">
        {editor && <MenuBar editor={editor} />}

        <Button onClick={updateDocumentContent}>Save</Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
