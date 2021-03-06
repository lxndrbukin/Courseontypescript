import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  public rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/users/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}/users`, data);
    }
  }
}