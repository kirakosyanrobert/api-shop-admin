import { FindFirstContactArgs } from "./args/FindFirstContactArgs";
import { Contact } from "../../../models/Contact";
export declare class FindFirstContactResolver {
    findFirstContact(ctx: any, args: FindFirstContactArgs): Promise<Contact | null>;
}
