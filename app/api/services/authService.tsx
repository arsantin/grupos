import axios, { type AxiosResponse } from "axios";

export async function loginService(
  payload: unknown,
): Promise<AxiosResponse<unknown, unknown>> {
  const authorizationHeader = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      AccessType: "A",
    },
  };

  console.log("TTTTTTTTTTTTTTTTTT", payload);

  const response = await axios.post(
    `${process.env.API_URL}/v1.0/Access`,
    payload,
    authorizationHeader,
  );
  console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEES", response);
  return response;
}
