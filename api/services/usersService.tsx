import axios, { type AxiosResponse } from "axios";

export async function usersService() {
  try {
    const response = await axios.get(
      `${process.env.API_URL_BETA}/Inscription/v1.0/Group/1922/FaqTopDescription`,
    );
    return response;
  } catch (e) {
    return {
      data: [],
      status: 200,
    };
  }
}
