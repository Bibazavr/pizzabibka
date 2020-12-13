import {HEROKU_API_URI, LOCAL_API_URI} from '../constants';
import {BaseCallResult, Products} from './types';

const {origin} = window.location;
const apiUrl =
  origin === 'http://localhost:3000' ? LOCAL_API_URI : HEROKU_API_URI;

export class API {
  _apiBase = apiUrl;

  request = async (
    url: string,
    method = 'GET',
    data = null
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
    })
      .catch((e) => {
        console.log('backend error', e);
        return e;
      })
      .then((r) => {
        console.log('backend response', r);
        return r.json();
      });
  };

  loadProducts = async (): Promise<Products> => {
    return (await this.request('/products')) as Products;
  };
}
