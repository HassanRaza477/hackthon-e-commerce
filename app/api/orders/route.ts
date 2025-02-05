import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const orderData = await req.json(); // Read the request body

    const response = await client.create({
      _type: "order",
      ...orderData,
    });

    return NextResponse.json({ success: true, orderId: response._id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit order" }, { status: 500 });
  }
}
