import { NextResponse } from "next/server";
import { loginController } from "../controllers/loginControllers/login";

export async function GET() {
  return NextResponse.json({
    hello: "world",
  });
}

export async function POST(req: any, res: any) {
  const pay = await req.json();
  const resp = await loginController(pay, res);
  return NextResponse.json({ data: resp, status: 200 });
}
