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
var CategoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CategoryWhereInput = CategoryWhereInput_1 = class CategoryWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereInput.prototype, "icon", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], CategoryWhereInput.prototype, "itemCount", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], CategoryWhereInput.prototype, "product", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "productId", void 0);
CategoryWhereInput = CategoryWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CategoryWhereInput);
exports.CategoryWhereInput = CategoryWhereInput;
