import { User } from "../models/User";
export declare class Address {
    id: string;
    type: string;
    title: string;
    location: string;
    user?: User;
    userId: string;
}
