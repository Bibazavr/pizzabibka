import {HEROKU_API_URI, LOCAL_API_URI} from '../constants';
import {
  BaseCallResult,
  ObtainingCallback,
  ProductsCallBack,
  RegisterCallBack,
  UserCallback,
} from './types';

const {origin} = window.location;
const apiUrl =
  origin === 'http://localhost:3000' ? LOCAL_API_URI : HEROKU_API_URI;

export class API {
  _apiBase = apiUrl;

  request = async (
    url: string,
    method = 'GET',
    data: Record<string, unknown> | null = null
  ): Promise<BaseCallResult> => {
    const headers: HeadersInit = {};
    let body;

    if (data) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }

    return await fetch(this._apiBase + url, {
      method,
      headers,
      body,
      credentials: 'same-origin',
    })
      .then((r) => {
        console.log('backend response', r);
        return r.json();
      })
      .catch((e) => {
        console.log('backend error', e);
        return e;
      });
  };

  loadProducts = async (): Promise<ProductsCallBack> => {
    return (await this.request('/products')) as ProductsCallBack;
  };

  register = async (
    email: string,
    password: string
  ): Promise<RegisterCallBack> => {
    return (await this.request('/user/registration', 'POST', {
      email,
      password,
    })) as RegisterCallBack;
  };

  obtainToken = async (
    email: string,
    password: string
  ): Promise<ObtainingCallback> => {
    return (await this.request('/token/obtaining', 'POST', {
      email,
      password,
    })) as ObtainingCallback;
  };

  getUserData = async (id: string): Promise<UserCallback> => {
    return (await this.request(`/user/${id}`)) as UserCallback;
  };

  verifyToken = async (): Promise<UserCallback> => {
    return (await this.request('/token/verification')) as UserCallback;
  };
}
