import { NextResponse } from "next/server";
import { getWrappedData } from "@/lib/wrapped-data";

export async function GET() {
  return NextResponse.json(getWrappedData());
}
