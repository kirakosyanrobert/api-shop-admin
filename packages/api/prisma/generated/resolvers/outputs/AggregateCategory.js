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
exports.AggregateCategory = void 0;
const TypeGraphQL = require("type-graphql");
const CategoryAvgAggregate_1 = require("../outputs/CategoryAvgAggregate");
const CategoryMaxAggregate_1 = require("../outputs/CategoryMaxAggregate");
const CategoryMinAggregate_1 = require("../outputs/CategoryMinAggregate");
const CategorySumAggregate_1 = require("../outputs/CategorySumAggregate");
let AggregateCategory = class AggregateCategory {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], AggregateCategory.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryAvgAggregate_1.CategoryAvgAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategoryAvgAggregate_1.CategoryAvgAggregate)
], AggregateCategory.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategorySumAggregate_1.CategorySumAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategorySumAggregate_1.CategorySumAggregate)
], AggregateCategory.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryMinAggregate_1.CategoryMinAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategoryMinAggregate_1.CategoryMinAggregate)
], AggregateCategory.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryMaxAggregate_1.CategoryMaxAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategoryMaxAggregate_1.CategoryMaxAggregate)
], AggregateCategory.prototype, "max", void 0);
AggregateCategory = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], AggregateCategory);
exports.AggregateCategory = AggregateCategory;
