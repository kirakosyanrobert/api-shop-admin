import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";
import { Author } from "../../../models/Author";
export declare class FindFirstAuthorResolver {
    findFirstAuthor(ctx: any, args: FindFirstAuthorArgs): Promise<Author | null>;
}
