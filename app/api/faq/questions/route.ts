import { NextResponse } from "next/server";
import axios from "axios";
import { config } from "../../services/config";

export async function GET(req: any, res: any) {
  try {
    const response = await axios.get(
      `${process.env.API_URL_BETA}/v1.0/Faq/list?faqType=2`,
      config,
    );
    return NextResponse.json({ data: response?.data, status: 200 });
  } catch (e: any) {
    console.log("erro vacancy", e);
    return NextResponse.json({ data: [], status: 400 });
  }
}
