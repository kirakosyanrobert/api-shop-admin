import { CardAvgAggregate } from "../outputs/CardAvgAggregate";
import { CardMaxAggregate } from "../outputs/CardMaxAggregate";
import { CardMinAggregate } from "../outputs/CardMinAggregate";
import { CardSumAggregate } from "../outputs/CardSumAggregate";
export declare class AggregateCard {
    count: number;
    avg: CardAvgAggregate | null;
    sum: CardSumAggregate | null;
    min: CardMinAggregate | null;
    max: CardMaxAggregate | null;
}
