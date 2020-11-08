import { UserCreateOneWithoutAddressesInput } from "../inputs/UserCreateOneWithoutAddressesInput";
export declare class AddressCreateInput {
    id?: string | undefined;
    type: string;
    title: string;
    location: string;
    user: UserCreateOneWithoutAddressesInput;
}
