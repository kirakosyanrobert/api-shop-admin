import { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";
import { CreateAuthorArgs } from "./args/CreateAuthorArgs";
import { DeleteAuthorArgs } from "./args/DeleteAuthorArgs";
import { DeleteManyAuthorArgs } from "./args/DeleteManyAuthorArgs";
import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";
import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";
import { FindOneAuthorArgs } from "./args/FindOneAuthorArgs";
import { UpdateAuthorArgs } from "./args/UpdateAuthorArgs";
import { UpdateManyAuthorArgs } from "./args/UpdateManyAuthorArgs";
import { UpsertAuthorArgs } from "./args/UpsertAuthorArgs";
import { Author } from "../../../models/Author";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class AuthorCrudResolver {
    author(ctx: any, args: FindOneAuthorArgs): Promise<Author | null>;
    findFirstAuthor(ctx: any, args: FindFirstAuthorArgs): Promise<Author | null>;
    authors(ctx: any, args: FindManyAuthorArgs): Promise<Author[]>;
    createAuthor(ctx: any, args: CreateAuthorArgs): Promise<Author>;
    deleteAuthor(ctx: any, args: DeleteAuthorArgs): Promise<Author | null>;
    updateAuthor(ctx: any, args: UpdateAuthorArgs): Promise<Author | null>;
    deleteManyAuthor(ctx: any, args: DeleteManyAuthorArgs): Promise<BatchPayload>;
    updateManyAuthor(ctx: any, args: UpdateManyAuthorArgs): Promise<BatchPayload>;
    upsertAuthor(ctx: any, args: UpsertAuthorArgs): Promise<Author>;
    aggregateAuthor(ctx: any, info: GraphQLResolveInfo, args: AggregateAuthorArgs): Promise<AggregateAuthor>;
}
