import { FindOneSocialArgs } from "./args/FindOneSocialArgs";
import { Social } from "../../../models/Social";
export declare class FindOneSocialResolver {
    social(ctx: any, args: FindOneSocialArgs): Promise<Social | null>;
}
