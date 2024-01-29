export interface Product {
  onState: boolean | null;
  _id: string;
  title: string;
  image: string;
  price: string;
  description: string;
  createAt: Date;
  updateAt: Date;
}
