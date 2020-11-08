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
exports.AggregateMetaArgs = void 0;
const TypeGraphQL = require("type-graphql");
const MetaOrderByInput_1 = require("../../../inputs/MetaOrderByInput");
const MetaWhereInput_1 = require("../../../inputs/MetaWhereInput");
const MetaWhereUniqueInput_1 = require("../../../inputs/MetaWhereUniqueInput");
const MetaDistinctFieldEnum_1 = require("../../../../enums/MetaDistinctFieldEnum");
let AggregateMetaArgs = class AggregateMetaArgs {
};
__decorate([
    TypeGraphQL.Field(_type => MetaWhereInput_1.MetaWhereInput, { nullable: true }),
    __metadata("design:type", MetaWhereInput_1.MetaWhereInput)
], AggregateMetaArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MetaOrderByInput_1.MetaOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], AggregateMetaArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaWhereUniqueInput_1.MetaWhereUniqueInput, { nullable: true }),
    __metadata("design:type", MetaWhereUniqueInput_1.MetaWhereUniqueInput)
], AggregateMetaArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateMetaArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateMetaArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MetaDistinctFieldEnum_1.MetaDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], AggregateMetaArgs.prototype, "distinct", void 0);
AggregateMetaArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateMetaArgs);
exports.AggregateMetaArgs = AggregateMetaArgs;
