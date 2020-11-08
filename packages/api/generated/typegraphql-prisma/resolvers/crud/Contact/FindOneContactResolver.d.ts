import { FindOneContactArgs } from "./args/FindOneContactArgs";
import { Contact } from "../../../models/Contact";
export declare class FindOneContactResolver {
    contact(ctx: any, args: FindOneContactArgs): Promise<Contact | null>;
}
