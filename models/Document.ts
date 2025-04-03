import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IDocument extends Document {
  name: string;
  content: string;
}

const DocumentSchema = new Schema<IDocument>({
  name: String,
  content: String,
});

const DocumentModel = models.Document || model("Document", DocumentSchema);
export default DocumentModel;
