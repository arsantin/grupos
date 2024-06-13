import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import router from "next/router";
import { type IUserProfile, type IAuthProvider } from "./interfaces";
import { userProfileReducer } from "./reducers";

export const AuthContext = createContext<IAuthProvider | any>(null);

export const AuthProvider = ({ children }: any): JSX.Element => {
  const [userLogged, setuserLogged] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string>("");
  const [userProfile, setUserProfile] = useReducer(userProfileReducer, {});

  async function LogOut(): Promise<void> {
    setuserLogged(false);
    setAuthToken("");

    await router.push("/");
  }

  async function LogInUser(data: object): Promise<void> {
    try {
      console.log(data);
      await axios.post("/api/login", data).then(async (res) => {
        const dados = res.data?.data as IUserProfile;
        console.log("DADOS:", dados);
        const noDados = {
          user_name: "",
          access_token: "",
          refresh_token: "",
          expires_in: 0,
          token_type: "",
        };
        if (dados.access_token) {
          setUserProfile({
            type: "FETCH_SUCCESS_USER_PROFILE",
            payload: dados,
          });
        } else {
          setUserProfile({
            type: "FETCH_SUCCESS_USER_PROFILE",
            payload: noDados,
          });
          await router.push("/");
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userProfile,
        setUserProfile,
        authToken,
        userLogged,
        LogInUser,
        LogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth: () => IAuthProvider = () => useContext(AuthContext);
