import { NextRequest, NextResponse } from "next/server";
import { usersControllers } from "./usersControllers";

export async function GET() {
  return NextResponse.json({
    hello: "world",
  });
}
