import { AxiosService } from "@/untils/configAxios";
import { Product } from "@/types/Product";

export const ProductService = {
  async getListProduct() {
    const { data } = await AxiosService.get<Product[]>("/product/list");
    return data;
  },
};
