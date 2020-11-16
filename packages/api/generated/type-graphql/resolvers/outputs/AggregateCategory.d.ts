import { CategoryAvgAggregate } from "../outputs/CategoryAvgAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
import { CategorySumAggregate } from "../outputs/CategorySumAggregate";
export declare class AggregateCategory {
    count: number;
    avg: CategoryAvgAggregate | null;
    sum: CategorySumAggregate | null;
    min: CategoryMinAggregate | null;
    max: CategoryMaxAggregate | null;
}
