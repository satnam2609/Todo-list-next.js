import connectDb from "@/libs/mongodb";
import Task from "@/models/task";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDb();
  await Task.create({ title, description });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  await connectDb();
  const tasks = await Task.find().sort({ createdAt: -1 });
  return NextResponse.json({ tasks });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await connectDb();
  const task = await Task.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );
  return NextResponse.json({ message: "Task deleted" });
}
