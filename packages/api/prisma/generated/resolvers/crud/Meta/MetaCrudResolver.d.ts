import { GraphQLResolveInfo } from "graphql";
import { AggregateMetaArgs } from "./args/AggregateMetaArgs";
import { CreateMetaArgs } from "./args/CreateMetaArgs";
import { DeleteManyMetaArgs } from "./args/DeleteManyMetaArgs";
import { DeleteMetaArgs } from "./args/DeleteMetaArgs";
import { FindFirstMetaArgs } from "./args/FindFirstMetaArgs";
import { FindManyMetaArgs } from "./args/FindManyMetaArgs";
import { FindOneMetaArgs } from "./args/FindOneMetaArgs";
import { UpdateManyMetaArgs } from "./args/UpdateManyMetaArgs";
import { UpdateMetaArgs } from "./args/UpdateMetaArgs";
import { UpsertMetaArgs } from "./args/UpsertMetaArgs";
import { Meta } from "../../../models/Meta";
import { AggregateMeta } from "../../outputs/AggregateMeta";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class MetaCrudResolver {
    meta(ctx: any, args: FindOneMetaArgs): Promise<Meta | null>;
    findFirstMeta(ctx: any, args: FindFirstMetaArgs): Promise<Meta | null>;
    metas(ctx: any, args: FindManyMetaArgs): Promise<Meta[]>;
    createMeta(ctx: any, args: CreateMetaArgs): Promise<Meta>;
    deleteMeta(ctx: any, args: DeleteMetaArgs): Promise<Meta | null>;
    updateMeta(ctx: any, args: UpdateMetaArgs): Promise<Meta | null>;
    deleteManyMeta(ctx: any, args: DeleteManyMetaArgs): Promise<BatchPayload>;
    updateManyMeta(ctx: any, args: UpdateManyMetaArgs): Promise<BatchPayload>;
    upsertMeta(ctx: any, args: UpsertMetaArgs): Promise<Meta>;
    aggregateMeta(ctx: any, info: GraphQLResolveInfo, args: AggregateMetaArgs): Promise<AggregateMeta>;
}
