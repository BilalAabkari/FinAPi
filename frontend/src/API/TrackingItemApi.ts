import BaseApi from "./BaseApi.ts";
import { ErrorResponse, TrackingItem } from "./types/CommonTypes.tsx";
import ApiError from "./ApiError.ts";

class TrackingItemApi extends BaseApi {
    constructor() {
        super();
        this.resourceUrl = `${this.baseUrl}/users/tracking-items`;
    }

    getTrackingItems = async (): Promise<TrackingItem[]> => {
        const response: Response = await this.get(this.resourceUrl);
        const data = await response.json();

        if (!response.ok) {
            throw new ApiError(data as ErrorResponse);
        }

        return data as TrackingItem[];
    };

    createTrackingItem = async (
        body: TrackingItem,
    ): Promise<TrackingItem[]> => {
        const response: Response = await this.post(this.resourceUrl, body);

        const data = await response.json();

        if (!response.ok) {
            throw new ApiError(data as ErrorResponse);
        }

        return data as TrackingItem[];
    };
}

export default new TrackingItemApi();
