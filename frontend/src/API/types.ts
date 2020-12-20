import {Obtaining, Product, Register, User} from '../types';

export interface BaseCallResult {
  status: number;
  error: null;
}

export interface APIErrorJSON {
  ok: false;
  error: string;
  error_ui: string;
}

export interface APIError {
  json: null | APIErrorJSON;
  response?: Response;
  error?: any;
}

export interface ProductsCallBack extends BaseCallResult {
  result: Product[];
}

export interface RegisterCallBack extends BaseCallResult {
  result: Register;
}

export interface ObtainingCallback extends BaseCallResult {
  result: Obtaining;
}

export interface UserCallback extends BaseCallResult {
  result: User;
}
