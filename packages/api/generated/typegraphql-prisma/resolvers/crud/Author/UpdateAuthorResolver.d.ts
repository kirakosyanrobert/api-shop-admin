import { UpdateAuthorArgs } from "./args/UpdateAuthorArgs";
import { Author } from "../../../models/Author";
export declare class UpdateAuthorResolver {
    updateAuthor(ctx: any, args: UpdateAuthorArgs): Promise<Author | null>;
}
