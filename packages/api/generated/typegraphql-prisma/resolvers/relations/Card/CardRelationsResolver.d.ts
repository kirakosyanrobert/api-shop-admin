import { Card } from "../../../models/Card";
import { User } from "../../../models/User";
export declare class CardRelationsResolver {
    user(card: Card, ctx: any): Promise<User>;
}
