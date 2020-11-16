import { DeleteContactArgs } from "./args/DeleteContactArgs";
import { Contact } from "../../../models/Contact";
export declare class DeleteContactResolver {
    deleteContact(ctx: any, args: DeleteContactArgs): Promise<Contact | null>;
}
