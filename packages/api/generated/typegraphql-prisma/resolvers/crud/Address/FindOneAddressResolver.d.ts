import { FindOneAddressArgs } from "./args/FindOneAddressArgs";
import { Address } from "../../../models/Address";
export declare class FindOneAddressResolver {
    address(ctx: any, args: FindOneAddressArgs): Promise<Address | null>;
}
