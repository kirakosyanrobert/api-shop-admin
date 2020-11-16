import { UpdateAddressArgs } from "./args/UpdateAddressArgs";
import { Address } from "../../../models/Address";
export declare class UpdateAddressResolver {
    updateAddress(ctx: any, args: UpdateAddressArgs): Promise<Address | null>;
}
