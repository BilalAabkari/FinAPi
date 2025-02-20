import BaseApi from "./BaseApi.ts";
import { UserInfo } from "./types/UserTypes.tsx";
import { ErrorResponse, TrackingItem } from "./types/CommonTypes.tsx";
import ApiError from "./ApiError.ts";

class TrackingItemApi extends BaseApi {
    constructor(user: UserInfo | null) {
        super();
        if (user) {
            this.resourceUrl = `${this.baseUrl}/users/${user.id}/tracking-items`;
        } else {
            this.resourceUrl = `${this.baseUrl}/users/tracking-items`;
        }
    }

    getTrackingItems = async (): Promise<TrackingItem[]> => {
        const response: Response = await this.get(this.resourceUrl);
        const data = await response.json();

        if (!response.ok) {
            throw new ApiError(data as ErrorResponse);
        }

        return data as TrackingItem[];
    };
}

export default TrackingItemApi;
