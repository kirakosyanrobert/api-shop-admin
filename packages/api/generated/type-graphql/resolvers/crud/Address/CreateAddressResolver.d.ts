import { CreateAddressArgs } from "./args/CreateAddressArgs";
import { Address } from "../../../models/Address";
export declare class CreateAddressResolver {
    createAddress(ctx: any, args: CreateAddressArgs): Promise<Address>;
}
