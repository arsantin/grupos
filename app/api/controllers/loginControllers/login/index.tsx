import { type NextApiResponse } from "next";
import { loginService } from "../../../services/authService";
import { type AxiosResponse } from "axios";
import { cookies } from "next/headers";

export async function loginController(
  pay: any,
  res: NextApiResponse,
): Promise<void> {
  try {
    console.log("Payload recebido no authorizationController", pay);

    const formattedPayload = {
      Login: pay.usuario,
      password: pay.senha,
      AccessType: "A",
    };

    const loginResponse: AxiosResponse<any, any> =
      await loginService(formattedPayload);
    console.log(`Payload recebido - [${JSON.stringify(formattedPayload)}]`);

    const authToken = loginResponse?.data.access_token;
    const expires_in = loginResponse?.data.expires_in;
    const username = loginResponse?.data.user_name;
    console.log(
      `Resposta do authorizationController ${JSON.stringify(
        loginResponse?.data,
      )}`,
    );
    cookies().set("access-token", authToken);
    const resposta = loginResponse?.data;
    console.log("Definindo cookie protegido");
    return resposta;
  } catch (e: any) {
    console.log("Usuário ou senha invalidados", e);
    res
      .status(200)
      .send({ authenticated: false, message: "Falha ao autenticar" });
  }
}
