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
exports.ProductCreateWithoutMetaInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCreateOneWithoutProductInput_1 = require("../inputs/AuthorCreateOneWithoutProductInput");
const CategoryCreateManyWithoutProductInput_1 = require("../inputs/CategoryCreateManyWithoutProductInput");
const GalleryCreateManyWithoutProductInput_1 = require("../inputs/GalleryCreateManyWithoutProductInput");
const ProductType_1 = require("../../enums/ProductType");
let ProductCreateWithoutMetaInput = class ProductCreateWithoutMetaInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], ProductCreateWithoutMetaInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], ProductCreateWithoutMetaInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Number)
], ProductCreateWithoutMetaInput.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductType_1.ProductType, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], ProductCreateWithoutMetaInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateOneWithoutProductInput_1.AuthorCreateOneWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorCreateOneWithoutProductInput_1.AuthorCreateOneWithoutProductInput)
], ProductCreateWithoutMetaInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryCreateManyWithoutProductInput_1.GalleryCreateManyWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", GalleryCreateManyWithoutProductInput_1.GalleryCreateManyWithoutProductInput)
], ProductCreateWithoutMetaInput.prototype, "gallery", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryCreateManyWithoutProductInput_1.CategoryCreateManyWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CategoryCreateManyWithoutProductInput_1.CategoryCreateManyWithoutProductInput)
], ProductCreateWithoutMetaInput.prototype, "categories", void 0);
ProductCreateWithoutMetaInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductCreateWithoutMetaInput);
exports.ProductCreateWithoutMetaInput = ProductCreateWithoutMetaInput;
