import { Address } from "../../../models/Address";
import { User } from "../../../models/User";
export declare class AddressRelationsResolver {
    user(address: Address, ctx: any): Promise<User>;
}
