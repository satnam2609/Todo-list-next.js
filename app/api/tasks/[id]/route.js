import connectDb from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  await connectDb();

  const { newTitle: title, newDescription: description } = await request.json();

  await Task.findOneAndUpdate(
    { _id: id },
    { title, description },
    {
      new: true,
    }
  );

  return NextResponse.json({ message: "Task udpated" });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDb();
  const task = await Task.findOne({ _id: id });
  return NextResponse.json({ task }, { status: 200 });
}
