export interface IGetAllProductsResponse {
  products: IProducts[];
}

export interface IProducts {
  id: number;
  name: string;
  description: string;
  active: boolean;
}
