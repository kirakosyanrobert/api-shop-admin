import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";
import { Author } from "../../../models/Author";
export declare class FindManyAuthorResolver {
    authors(ctx: any, args: FindManyAuthorArgs): Promise<Author[]>;
}
