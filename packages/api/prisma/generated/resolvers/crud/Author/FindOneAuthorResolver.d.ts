import { FindOneAuthorArgs } from "./args/FindOneAuthorArgs";
import { Author } from "../../../models/Author";
export declare class FindOneAuthorResolver {
    author(ctx: any, args: FindOneAuthorArgs): Promise<Author | null>;
}
