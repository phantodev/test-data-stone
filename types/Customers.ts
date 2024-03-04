import type { IProducts } from "./Products";

export interface IGetAllCustomersResponse {
  customers: ICustomers[];
}

export interface ICustomers {
  id: number;
  name: string;
  document: string;
  email: string;
  phone: string;
  useProducts: IProducts[];
  active: boolean;
}

export interface IResponseError {
  statusCode: number;
  statusMessage: string;
}
