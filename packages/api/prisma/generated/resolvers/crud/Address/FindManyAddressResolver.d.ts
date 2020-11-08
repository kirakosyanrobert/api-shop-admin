import { FindManyAddressArgs } from "./args/FindManyAddressArgs";
import { Address } from "../../../models/Address";
export declare class FindManyAddressResolver {
    addresses(ctx: any, args: FindManyAddressArgs): Promise<Address[]>;
}
