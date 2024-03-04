export interface IGetAllCustomersResponse {
  customers: ICustomers[];
}

export interface ICustomers {
  id: number;
  name: string;
  document: string;
  email: string;
  phone: string;
  active: boolean;
}

export interface IResponseError {
  statusCode: number;
  statusMessage: string;
}
