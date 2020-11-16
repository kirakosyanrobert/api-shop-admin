import { UpsertAddressArgs } from "./args/UpsertAddressArgs";
import { Address } from "../../../models/Address";
export declare class UpsertAddressResolver {
    upsertAddress(ctx: any, args: UpsertAddressArgs): Promise<Address>;
}
