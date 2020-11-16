import { Contact } from "../../../models/Contact";
import { User } from "../../../models/User";
export declare class ContactRelationsResolver {
    user(contact: Contact, ctx: any): Promise<User>;
}
