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
exports.AggregateCardArgs = void 0;
const TypeGraphQL = require("type-graphql");
const CardOrderByInput_1 = require("../../../inputs/CardOrderByInput");
const CardWhereInput_1 = require("../../../inputs/CardWhereInput");
const CardWhereUniqueInput_1 = require("../../../inputs/CardWhereUniqueInput");
const CardDistinctFieldEnum_1 = require("../../../../enums/CardDistinctFieldEnum");
let AggregateCardArgs = class AggregateCardArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CardWhereInput_1.CardWhereInput, { nullable: true }),
    __metadata("design:type", CardWhereInput_1.CardWhereInput)
], AggregateCardArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardOrderByInput_1.CardOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], AggregateCardArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardWhereUniqueInput_1.CardWhereUniqueInput, { nullable: true }),
    __metadata("design:type", CardWhereUniqueInput_1.CardWhereUniqueInput)
], AggregateCardArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateCardArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateCardArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardDistinctFieldEnum_1.CardDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], AggregateCardArgs.prototype, "distinct", void 0);
AggregateCardArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateCardArgs);
exports.AggregateCardArgs = AggregateCardArgs;
