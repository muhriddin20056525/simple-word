import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/connectDb";
import DocumentModel from "@/models/Document";
import UserModel from "@/models/User";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// create document
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
    }

    await connectToDB();
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    const newDocument = await DocumentModel.create({ name, content: "" });

    await UserModel.findByIdAndUpdate(
      session.user.id,
      { $push: { documents: newDocument._id } },
      { new: true }
    );

    return NextResponse.json(
      { message: "Created new document" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Create document server error",
        error: error,
      },
      { status: 500 }
    );
  }
}

// get all documents

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
    }

    await connectToDB();

    const allDocuments = await UserModel.findById({
      _id: session.user.id,
    }).populate("documents");

    return NextResponse.json({
      message: "Get all documents",
      documents: allDocuments.documents,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Get document server error",
        error: error,
      },
      { status: 500 }
    );
  }
}
