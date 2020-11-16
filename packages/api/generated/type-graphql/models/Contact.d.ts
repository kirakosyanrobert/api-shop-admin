import { User } from "../models/User";
export declare class Contact {
    id: string;
    type: string;
    number: string;
    user?: User;
    userId: string;
}
