import { UserCreateOneWithoutCardInput } from "../inputs/UserCreateOneWithoutCardInput";
export declare class CardCreateInput {
    id?: string | undefined;
    type: string;
    title: string;
    cardType: string;
    lastFourDigit: number;
    user: UserCreateOneWithoutCardInput;
}
