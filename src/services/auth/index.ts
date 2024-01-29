import { AxiosService } from "@/untils/configAxios";
import { LoginPayload, LoginResponse, SignUpPayload } from "./type";

export const AuthService = {
  async login(payload: LoginPayload) {
    const { data } = await AxiosService.post<LoginResponse>("/login", payload);
    return data;
  },
  async signUp(payload: SignUpPayload) {
    const { data } = await AxiosService.post("/register", payload);
    return data;
  },
};
