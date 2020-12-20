import {Product} from '../types';

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

export interface Products extends BaseCallResult {
  result: Product[];
}

export interface Register {
  id: string;
  token: string;
}

export interface Register extends BaseCallResult {
  result: Register;
}

export interface Obtaining {
  id: string;
  token: string;
}

export interface ObtainingCallback extends BaseCallResult {
  result: Obtaining;
}
