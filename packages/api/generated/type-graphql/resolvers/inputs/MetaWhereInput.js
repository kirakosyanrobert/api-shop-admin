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
var MetaWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let MetaWhereInput = MetaWhereInput_1 = class MetaWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [MetaWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], MetaWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MetaWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], MetaWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MetaWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], MetaWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "publisher", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "isbn", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "edition", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MetaWhereInput.prototype, "languages", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "numberOfReader", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "numberOfPage", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "samplePDF", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], MetaWhereInput.prototype, "product", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MetaWhereInput.prototype, "productId", void 0);
MetaWhereInput = MetaWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], MetaWhereInput);
exports.MetaWhereInput = MetaWhereInput;
