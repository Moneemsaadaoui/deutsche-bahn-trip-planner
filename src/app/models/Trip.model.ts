
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

    export interface Origin {
        type: string;
        id: string;
        name: string;
        location: Location;
        products: Products;
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

    export interface Destination {
        type: string;
        id: string;
        name: string;
        location: Location2;
        products: Products2;
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

    export interface Properties {
        type: string;
        id: string;
        name: string;
        location: Location3;
        products: Products3;
    }

    export interface Geometry {
        type: string;
        coordinates: number[];
    }

    export interface Feature {
        type: string;
        properties: Properties;
        geometry: Geometry;
    }

    export interface Polyline {
        type: string;
        features: Feature[];
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

    export interface CurrentLocation {
        type: string;
        latitude: number;
        longitude: number;
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

    export interface Stop {
        type: string;
        id: string;
        name: string;
        location: Location4;
        products: Products4;
    }

    export interface Remark {
        type: string;
        code?: any;
        text: string;
    }

    export interface Stopover {
        stop: Stop;
        arrival?: Date;
        plannedArrival?: Date;
        arrivalDelay?: number;
        arrivalPlatform: string;
        arrivalPrognosisType: string;
        plannedArrivalPlatform: string;
        departure?: Date;
        plannedDeparture?: Date;
        departureDelay?: number;
        departurePlatform: string;
        departurePrognosisType: string;
        plannedDeparturePlatform: string;
        cancelled: boolean;
        remarks: Remark[];
    }

    export interface Remark2 {
        type: string;
        code: string;
        text: string;
        summary: string;
    }

    export interface Trip {
        origin: Origin;
        destination: Destination;
        departure?: any;
        plannedDeparture: Date;
        departureDelay?: any;
        arrival: Date;
        plannedArrival: Date;
        arrivalDelay: number;
        reachable: boolean;
        polyline: Polyline;
        line: Line;
        direction: string;
        currentLocation: CurrentLocation;
        arrivalPlatform: string;
        plannedArrivalPlatform: string;
        arrivalPrognosisType: string;
        departurePlatform?: any;
        plannedDeparturePlatform?: any;
        departurePrognosisType?: any;
        stopovers: Stopover[];
        remarks: Remark2[];
        cancelled: boolean;
        id: string;
        realtimeDataUpdatedAt: number;
    }


