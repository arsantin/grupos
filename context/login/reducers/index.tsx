import { ActionPayload } from "@/context/contextInterfaces";
import { type IUserProfile } from "../interfaces";

export const userProfileReducer = (
  state: IUserProfile,
  action: ActionPayload,
): object => {
  switch (action.type) {
    case "FETCH_SUCCESS_USER_PROFILE":
      return action.payload;
    default:
      return state;
  }
};
