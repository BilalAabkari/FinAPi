export interface ErrorResponse {
    status: string;
    message: string;
    details?: string;
    code?: number;
    errors?: [];
}

export interface TrackingField {
    id?: number;
    name: string;
    type: "TEXT" | "LONG_TEXT" | "NUMBER";
}

export interface TrackingItem {
    id?: number;
    name: string;
    identifier: string;
    type?: "EXPENSE" | "INCOME";
    category?: string;
    description?: string;
    trackingFields: TrackingField[];
}
