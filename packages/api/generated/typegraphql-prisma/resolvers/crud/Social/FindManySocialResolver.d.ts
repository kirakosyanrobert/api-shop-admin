import { FindManySocialArgs } from "./args/FindManySocialArgs";
import { Social } from "../../../models/Social";
export declare class FindManySocialResolver {
    socials(ctx: any, args: FindManySocialArgs): Promise<Social[]>;
}
