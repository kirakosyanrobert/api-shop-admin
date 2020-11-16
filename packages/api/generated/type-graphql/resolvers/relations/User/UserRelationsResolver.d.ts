import { Address } from "../../../models/Address";
import { Card } from "../../../models/Card";
import { Contact } from "../../../models/Contact";
import { User } from "../../../models/User";
import { UserAddressesArgs } from "./args/UserAddressesArgs";
import { UserCardArgs } from "./args/UserCardArgs";
import { UserContactsArgs } from "./args/UserContactsArgs";
export declare class UserRelationsResolver {
    addresses(user: User, ctx: any, args: UserAddressesArgs): Promise<Address[] | null>;
    contacts(user: User, ctx: any, args: UserContactsArgs): Promise<Contact[] | null>;
    card(user: User, ctx: any, args: UserCardArgs): Promise<Card[] | null>;
}
