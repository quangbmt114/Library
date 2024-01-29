import { AxiosService } from "@/untils/configAxios";
import { Product } from "@/types/Product";

export const ProductService = {
  async getListProduct() {
    const { data } = await AxiosService.get<Product[]>("/product/list");
    return data;
  },
  async deleteProduct(id: string) {
    const { data } = await AxiosService.delete<Product[]>(
      `/product/delete/${id}`
    );
    return data;
  },
  async updateProduct(value: object) {
    const { data } = await AxiosService.put<Product[]>(
      `/product/update`,
      value
    );
    return data;
  },
  async createProduct(value: object) {
    const { data } = await AxiosService.post<Product[]>(
      `/product/create`,
      value
    );
    return data;
  },
};
