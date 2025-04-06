import { connectToDB } from "@/lib/connectDb";
import DocumentModel from "@/models/Document";
import UserModel from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const document = await DocumentModel.findById(params.id);
    console.log(document);

    return NextResponse.json(
      { message: "get single document successfully", document },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Get single document server error",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    await DocumentModel.findByIdAndDelete(params.id);

    await UserModel.updateMany(
      { documents: params.id },
      { $pull: { documents: params.id } }
    );

    return NextResponse.json(
      { message: "Document deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Delete document server error",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const { name, content } = await req.json();

    await DocumentModel.findByIdAndUpdate(
      params.id,
      { name, content },
      { new: true }
    );

    return NextResponse.json(
      { message: "document edited successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Edit document server error",
        error: error,
      },
      { status: 500 }
    );
  }
}
