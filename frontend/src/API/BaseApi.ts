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
      headers: {
        "Content-Type": "application/json", // Ensure the correct content type is set
      },
    });
  };
}

export default BaseApi;
