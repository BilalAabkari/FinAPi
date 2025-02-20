import { ErrorResponse } from "./types/CommonTypes.tsx";

class ApiError extends Error {
    errorInfo: ErrorResponse;

    constructor(error: ErrorResponse) {
        super(JSON.stringify(error));
        this.errorInfo = error;
        this.name = "ApiError";
    }
}

export default ApiError;
