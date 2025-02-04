import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const orderData = await req.json();

    const newOrder = await client.create({
      _type: "order",
      ...orderData,
    });

    return NextResponse.json(newOrder, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error placing order", error },
      { status: 500 }
    );
  }
}
