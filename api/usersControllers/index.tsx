import { type NextRequest, type NextResponse } from "next/server";
import { usersService } from "../services/usersService";

export async function usersControllers(
  req: NextRequest,
  res: NextResponse,
): Promise<void> {
  try {
    const usuariosResponse = await usersService();
    console.log("kkk", usuariosResponse);
    // res.status(usuariosResponse.status).send(usuariosResponse.data);
  } catch (e) {
    console.error(e);
  }
}
