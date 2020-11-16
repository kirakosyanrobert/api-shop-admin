import { Address } from "../models/Address";
import { Card } from "../models/Card";
import { Contact } from "../models/Contact";
export declare class User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    name: string;
    role: "USER" | "ADMIN";
    image: string;
    password: string;
    addresses?: Address[] | null;
    contacts?: Contact[] | null;
    card?: Card[] | null;
}
