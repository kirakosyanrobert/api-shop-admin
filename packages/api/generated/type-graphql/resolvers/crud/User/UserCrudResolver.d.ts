import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindOneUserArgs } from "./args/FindOneUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class UserCrudResolver {
    user(ctx: any, args: FindOneUserArgs): Promise<User | null>;
    findFirstUser(ctx: any, args: FindFirstUserArgs): Promise<User | null>;
    users(ctx: any, args: FindManyUserArgs): Promise<User[]>;
    createUser(ctx: any, args: CreateUserArgs): Promise<User>;
    deleteUser(ctx: any, args: DeleteUserArgs): Promise<User | null>;
    updateUser(ctx: any, args: UpdateUserArgs): Promise<User | null>;
    deleteManyUser(ctx: any, args: DeleteManyUserArgs): Promise<BatchPayload>;
    updateManyUser(ctx: any, args: UpdateManyUserArgs): Promise<BatchPayload>;
    upsertUser(ctx: any, args: UpsertUserArgs): Promise<User>;
    aggregateUser(ctx: any, info: GraphQLResolveInfo, args: AggregateUserArgs): Promise<AggregateUser>;
}
