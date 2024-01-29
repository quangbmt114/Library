import { AxiosService } from "@/untils/configAxios";

export const Login = async (data: object) => {
  const res = await AxiosService.post("/login", data);
};
export const ListProduct = async () => {
  const res = await AxiosService.get("/product/list");
};
export const updateProduct = async (data: object) => {
  const res = await AxiosService.post("/product/update", data);
};
export const SignUp = async (data: object) => {
  const res = await AxiosService.post("/register", data);
};
