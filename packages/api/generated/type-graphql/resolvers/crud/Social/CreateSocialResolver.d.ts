import { CreateSocialArgs } from "./args/CreateSocialArgs";
import { Social } from "../../../models/Social";
export declare class CreateSocialResolver {
    createSocial(ctx: any, args: CreateSocialArgs): Promise<Social>;
}
