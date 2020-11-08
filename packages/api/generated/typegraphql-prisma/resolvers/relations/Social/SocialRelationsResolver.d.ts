import { Author } from "../../../models/Author";
import { Social } from "../../../models/Social";
export declare class SocialRelationsResolver {
    author(social: Social, ctx: any): Promise<Author>;
}
