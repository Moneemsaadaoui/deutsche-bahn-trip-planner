
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

export interface Location2 {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
}

export interface Products2 {
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

export interface Station {
    type: string;
    id: string;
    name: string;
    location: Location2;
    products: Products2;
}

export interface Stop {
    type: string;
    id: string;
    name: string;
    location: Location;
    products: Products;
    station: Station;
}

export interface Operator {
    type: string;
    id: string;
    name: string;
}

export interface Line {
    type: string;
    id: string;
    fahrtNr: string;
    name: string;
    public: boolean;
    adminCode: string;
    productName: string;
    mode: string;
    product: string;
    operator: Operator;
}

export interface Location3 {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
}

export interface Products3 {
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

export interface Location4 {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
}

export interface Products4 {
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

export interface Station2 {
    type: string;
    id: string;
    name: string;
    location: Location4;
    products: Products4;
}

export interface Destination {
    type: string;
    id: string;
    name: string;
    location: Location3;
    products: Products3;
    station: Station2;
}

export interface CurrentTripPosition {
    type: string;
    latitude: number;
    longitude: number;
}

export interface Departure {
    tripId: string;
    stop: Stop;
    when: Date;
    plannedWhen: Date;
    delay: number;
    platform?: any;
    plannedPlatform?: any;
    prognosisType: string;
    direction: string;
    provenance?: any;
    line: Line;
    remarks: any[];
    origin?: any;
    destination: Destination;
    currentTripPosition: CurrentTripPosition;
}


