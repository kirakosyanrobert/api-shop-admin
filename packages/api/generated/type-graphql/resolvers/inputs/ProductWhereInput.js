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
var ProductWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorRelationFilter_1 = require("../inputs/AuthorRelationFilter");
const CategoryListRelationFilter_1 = require("../inputs/CategoryListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumProductTypeFilter_1 = require("../inputs/EnumProductTypeFilter");
const GalleryListRelationFilter_1 = require("../inputs/GalleryListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const MetaRelationFilter_1 = require("../inputs/MetaRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ProductWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ProductWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ProductWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ProductWhereInput.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ProductWhereInput.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumProductTypeFilter_1.EnumProductTypeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", EnumProductTypeFilter_1.EnumProductTypeFilter)
], ProductWhereInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorRelationFilter_1.AuthorRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorRelationFilter_1.AuthorRelationFilter)
], ProductWhereInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => MetaRelationFilter_1.MetaRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", MetaRelationFilter_1.MetaRelationFilter)
], ProductWhereInput.prototype, "meta", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryListRelationFilter_1.GalleryListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", GalleryListRelationFilter_1.GalleryListRelationFilter)
], ProductWhereInput.prototype, "gallery", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryListRelationFilter_1.CategoryListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategoryListRelationFilter_1.CategoryListRelationFilter)
], ProductWhereInput.prototype, "categories", void 0);
ProductWhereInput = ProductWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
