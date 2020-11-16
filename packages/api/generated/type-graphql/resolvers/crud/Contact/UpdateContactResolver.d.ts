import { UpdateContactArgs } from "./args/UpdateContactArgs";
import { Contact } from "../../../models/Contact";
export declare class UpdateContactResolver {
    updateContact(ctx: any, args: UpdateContactArgs): Promise<Contact | null>;
}
