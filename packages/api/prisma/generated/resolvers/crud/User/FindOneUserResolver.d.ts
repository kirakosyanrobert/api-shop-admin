import { FindOneUserArgs } from "./args/FindOneUserArgs";
import { User } from "../../../models/User";
export declare class FindOneUserResolver {
    user(ctx: any, args: FindOneUserArgs): Promise<User | null>;
}
