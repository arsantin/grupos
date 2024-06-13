import { type ActionPayload } from "@/context/contextInterfaces";
import { type Dispatch, type SetStateAction } from "react";

export interface IUserProfile {
  user_name?: string;
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
}

export interface IAuthProvider {
  userProfile: IUserProfile;
  setUserProfile: Dispatch<SetStateAction<ActionPayload>>;
  authToken: string;
  userLogged: boolean;
  LogInUser: (data: object) => object;
  LogOut: () => object;
}
