import { NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";
import { config } from "../services/config";

export async function GET(req: any, res: any) {
  try {
    const response = await axios.get(
      `${process.env.API_URL_BETA}/Inscription/v1.0/Group/Segment/list`,
      config,
    );
    return NextResponse.json({ data: response?.data, status: 200 });
  } catch (e: any) {
    console.log("erro vacancy", e);
    return NextResponse.json({ data: [], status: 400 });
  }
}

export async function POST(req: any, res: any) {
  try {
    const payload = {
      EventId: "1922",
      DeadLine: "2030-09-27T00:00:00",
      TeamName: req?.TeamName,
      VagacanciesQty: req?.VagacanciesQty,
      Segmentation: req?.Segmentation,
    };
    const response = await axios.post(
      `${process.env.API_URL_BETA}/Inscription/v1.0/Group/RequestVacancies`,
      payload,
      config,
    );
    console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEES", response);

    return NextResponse.json({ data: response?.data, status: 200 });
  } catch (e: any) {
    console.log("erro postvacancy", e);
    return NextResponse.json({ data: [], status: 400 });
  }
}
