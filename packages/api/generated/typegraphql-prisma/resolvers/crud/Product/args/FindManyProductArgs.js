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
exports.FindManyProductArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ProductOrderByInput_1 = require("../../../inputs/ProductOrderByInput");
const ProductWhereInput_1 = require("../../../inputs/ProductWhereInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
const ProductDistinctFieldEnum_1 = require("../../../../enums/ProductDistinctFieldEnum");
let FindManyProductArgs = class FindManyProductArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, { nullable: true }),
    __metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], FindManyProductArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductOrderByInput_1.ProductOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyProductArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, { nullable: true }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], FindManyProductArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyProductArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyProductArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductDistinctFieldEnum_1.ProductDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyProductArgs.prototype, "distinct", void 0);
FindManyProductArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyProductArgs);
exports.FindManyProductArgs = FindManyProductArgs;
