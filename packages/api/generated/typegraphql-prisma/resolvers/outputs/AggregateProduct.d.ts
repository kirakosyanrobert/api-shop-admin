import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class AggregateProduct {
    count: number;
    avg: ProductAvgAggregate | null;
    sum: ProductSumAggregate | null;
    min: ProductMinAggregate | null;
    max: ProductMaxAggregate | null;
}
