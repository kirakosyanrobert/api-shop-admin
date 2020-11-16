import { CreateAuthorArgs } from "./args/CreateAuthorArgs";
import { Author } from "../../../models/Author";
export declare class CreateAuthorResolver {
    createAuthor(ctx: any, args: CreateAuthorArgs): Promise<Author>;
}
