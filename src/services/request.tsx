import { AxiosService } from "@/untils/configAxios";

export const Login = async (data: object) => {
  // return AxiosService({
  //   url: "/login",
  //   data,
  //   method: "post",
  // });
  const res = await AxiosService.post("/login", data);
};
export const ListProduct = async () => {
  // return AxiosService({
  //   url: "/login",
  //   data,
  //   method: "post",
  // });
  const res = await AxiosService.get("/product/list");
};
