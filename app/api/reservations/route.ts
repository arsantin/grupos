import { NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";
import { config } from "../services/config";

export async function GET(req: any, res: any) {
  const { searchParams } = new URL(req?.url);
  const status = searchParams.get("status");

  try {
    console.log("GGGGGGGGGGGGGGGGGGGGGGGGG", req);
    const response = await axios.get(
      `${process.env.API_URL_BETA}/Inscription/v1.0/Group/450/Participants/List?status=${status}`,
      config,
    );
    return NextResponse.json({ data: response?.data, status: 200 });
  } catch (e: any) {
    console.log("erro vacancy", e);
    return NextResponse.json({ data: [], status: 400 });
  }
}
