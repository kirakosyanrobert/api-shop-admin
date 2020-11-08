import { GraphQLResolveInfo } from "graphql";
import { AggregateAddressArgs } from "./args/AggregateAddressArgs";
import { CreateAddressArgs } from "./args/CreateAddressArgs";
import { DeleteAddressArgs } from "./args/DeleteAddressArgs";
import { DeleteManyAddressArgs } from "./args/DeleteManyAddressArgs";
import { FindFirstAddressArgs } from "./args/FindFirstAddressArgs";
import { FindManyAddressArgs } from "./args/FindManyAddressArgs";
import { FindOneAddressArgs } from "./args/FindOneAddressArgs";
import { UpdateAddressArgs } from "./args/UpdateAddressArgs";
import { UpdateManyAddressArgs } from "./args/UpdateManyAddressArgs";
import { UpsertAddressArgs } from "./args/UpsertAddressArgs";
import { Address } from "../../../models/Address";
import { AggregateAddress } from "../../outputs/AggregateAddress";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class AddressCrudResolver {
    address(ctx: any, args: FindOneAddressArgs): Promise<Address | null>;
    findFirstAddress(ctx: any, args: FindFirstAddressArgs): Promise<Address | null>;
    addresses(ctx: any, args: FindManyAddressArgs): Promise<Address[]>;
    createAddress(ctx: any, args: CreateAddressArgs): Promise<Address>;
    deleteAddress(ctx: any, args: DeleteAddressArgs): Promise<Address | null>;
    updateAddress(ctx: any, args: UpdateAddressArgs): Promise<Address | null>;
    deleteManyAddress(ctx: any, args: DeleteManyAddressArgs): Promise<BatchPayload>;
    updateManyAddress(ctx: any, args: UpdateManyAddressArgs): Promise<BatchPayload>;
    upsertAddress(ctx: any, args: UpsertAddressArgs): Promise<Address>;
    aggregateAddress(ctx: any, info: GraphQLResolveInfo, args: AggregateAddressArgs): Promise<AggregateAddress>;
}
