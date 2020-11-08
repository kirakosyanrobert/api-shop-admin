import { UpsertAuthorArgs } from "./args/UpsertAuthorArgs";
import { Author } from "../../../models/Author";
export declare class UpsertAuthorResolver {
    upsertAuthor(ctx: any, args: UpsertAuthorArgs): Promise<Author>;
}
