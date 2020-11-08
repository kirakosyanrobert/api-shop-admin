import { FindFirstAddressArgs } from "./args/FindFirstAddressArgs";
import { Address } from "../../../models/Address";
export declare class FindFirstAddressResolver {
    findFirstAddress(ctx: any, args: FindFirstAddressArgs): Promise<Address | null>;
}
