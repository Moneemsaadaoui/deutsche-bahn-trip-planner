

export interface Location {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
}

export interface Products {
    nationalExpress: boolean;
    national: boolean;
    regionalExp: boolean;
    regional: boolean;
    suburban: boolean;
    bus: boolean;
    ferry: boolean;
    subway: boolean;
    tram: boolean;
    taxi: boolean;
}

export interface AutoCompleteResult {
    type: string;
    id: string;
    name: string;
    location: Location;
    products: Products;
}