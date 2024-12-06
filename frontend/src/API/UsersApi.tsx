import BaseApi from "./BaseApi.ts";
import * as UserTypes from "./types/UserTypes.tsx";
import { UserInfo } from "./types/UserTypes.tsx";

class UsersApiService extends BaseApi {
  RESOURCE_URL = "/users";

  constructor() {
    super();
    this.resourceUrl = `${this.baseUrl}${this.RESOURCE_URL}`;
  }

  login = async (
    body: UserTypes.LoginRequest,
  ): Promise<UserInfo | Response> => {
    const response = await this.post(`${this.resourceUrl}/login`, body);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("API call error");
    }
  };

  signup = async (body: UserTypes.SignupRequest): Promise<Response> => {
    return await this.post(`${this.resourceUrl}/signup`, body);
  };

  checkSession = async (): Promise<UserInfo | Response> => {
    const response = await this.get(`${this.resourceUrl}/auth`);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("API call error");
    }
  };
}

const UsersApi = new UsersApiService();

export default UsersApi;
