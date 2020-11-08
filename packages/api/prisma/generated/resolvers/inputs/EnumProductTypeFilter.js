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
exports.EnumProductTypeFilter = void 0;
const TypeGraphQL = require("type-graphql");
const NestedEnumProductTypeFilter_1 = require("../inputs/NestedEnumProductTypeFilter");
const ProductType_1 = require("../../enums/ProductType");
let EnumProductTypeFilter = class EnumProductTypeFilter {
};
__decorate([
    TypeGraphQL.Field(_type => ProductType_1.ProductType, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], EnumProductTypeFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductType_1.ProductType], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], EnumProductTypeFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductType_1.ProductType], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], EnumProductTypeFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumProductTypeFilter_1.NestedEnumProductTypeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedEnumProductTypeFilter_1.NestedEnumProductTypeFilter)
], EnumProductTypeFilter.prototype, "not", void 0);
EnumProductTypeFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], EnumProductTypeFilter);
exports.EnumProductTypeFilter = EnumProductTypeFilter;
