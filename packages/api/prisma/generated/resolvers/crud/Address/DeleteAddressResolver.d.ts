import { DeleteAddressArgs } from "./args/DeleteAddressArgs";
import { Address } from "../../../models/Address";
export declare class DeleteAddressResolver {
    deleteAddress(ctx: any, args: DeleteAddressArgs): Promise<Address | null>;
}
