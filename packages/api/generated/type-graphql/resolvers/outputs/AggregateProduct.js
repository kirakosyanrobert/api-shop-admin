"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct = void 0;
const TypeGraphQL = require("type-graphql");
const ProductAvgAggregate_1 = require("../outputs/ProductAvgAggregate");
const ProductMaxAggregate_1 = require("../outputs/ProductMaxAggregate");
const ProductMinAggregate_1 = require("../outputs/ProductMinAggregate");
const ProductSumAggregate_1 = require("../outputs/ProductSumAggregate");
let AggregateProduct = class AggregateProduct {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], AggregateProduct.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductAvgAggregate_1.ProductAvgAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductAvgAggregate_1.ProductAvgAggregate)
], AggregateProduct.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductSumAggregate_1.ProductSumAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductSumAggregate_1.ProductSumAggregate)
], AggregateProduct.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductMinAggregate_1.ProductMinAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductMinAggregate_1.ProductMinAggregate)
], AggregateProduct.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductMaxAggregate_1.ProductMaxAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductMaxAggregate_1.ProductMaxAggregate)
], AggregateProduct.prototype, "max", void 0);
AggregateProduct = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], AggregateProduct);
exports.AggregateProduct = AggregateProduct;
