import { DeleteAuthorArgs } from "./args/DeleteAuthorArgs";
import { Author } from "../../../models/Author";
export declare class DeleteAuthorResolver {
    deleteAuthor(ctx: any, args: DeleteAuthorArgs): Promise<Author | null>;
}
