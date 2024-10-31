class BaseApi {
  baseUrl: string;
  resourceUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL;
    this.resourceUrl = "";
  }

  post = <T>(url: string, body: T) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  get = (url: string) => {
    return fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export default BaseApi;
