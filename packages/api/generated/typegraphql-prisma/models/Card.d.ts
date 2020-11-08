import { User } from "../models/User";
export declare class Card {
    id: string;
    type: string;
    title: string;
    cardType: string;
    lastFourDigit: number;
    user?: User;
    userId: string;
}
