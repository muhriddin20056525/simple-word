import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  profileImage?: string;
  documents: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  profileImage: String,
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
});

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
