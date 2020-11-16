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
exports.AggregateCard = void 0;
const TypeGraphQL = require("type-graphql");
const CardAvgAggregate_1 = require("../outputs/CardAvgAggregate");
const CardMaxAggregate_1 = require("../outputs/CardMaxAggregate");
const CardMinAggregate_1 = require("../outputs/CardMinAggregate");
const CardSumAggregate_1 = require("../outputs/CardSumAggregate");
let AggregateCard = class AggregateCard {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], AggregateCard.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardAvgAggregate_1.CardAvgAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CardAvgAggregate_1.CardAvgAggregate)
], AggregateCard.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardSumAggregate_1.CardSumAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CardSumAggregate_1.CardSumAggregate)
], AggregateCard.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardMinAggregate_1.CardMinAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CardMinAggregate_1.CardMinAggregate)
], AggregateCard.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardMaxAggregate_1.CardMaxAggregate, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CardMaxAggregate_1.CardMaxAggregate)
], AggregateCard.prototype, "max", void 0);
AggregateCard = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], AggregateCard);
exports.AggregateCard = AggregateCard;
