import { UserCreateOneWithoutContactsInput } from "../inputs/UserCreateOneWithoutContactsInput";
export declare class ContactCreateInput {
    id?: string | undefined;
    type: string;
    number: string;
    user: UserCreateOneWithoutContactsInput;
}
