import { Author } from "../../../models/Author";
import { Product } from "../../../models/Product";
import { Social } from "../../../models/Social";
import { AuthorSocialsArgs } from "./args/AuthorSocialsArgs";
export declare class AuthorRelationsResolver {
    socials(author: Author, ctx: any, args: AuthorSocialsArgs): Promise<Social[] | null>;
    product(author: Author, ctx: any): Promise<Product>;
}
