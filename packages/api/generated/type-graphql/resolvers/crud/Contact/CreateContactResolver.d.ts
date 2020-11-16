import { CreateContactArgs } from "./args/CreateContactArgs";
import { Contact } from "../../../models/Contact";
export declare class CreateContactResolver {
    createContact(ctx: any, args: CreateContactArgs): Promise<Contact>;
}
