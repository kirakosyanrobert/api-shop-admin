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
exports.Product = void 0;
const TypeGraphQL = require("type-graphql");
const ProductType_1 = require("../enums/ProductType");
let Product = class Product {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "salePrice", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "discountInPercent", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "per_unit", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "views", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    }),
    __metadata("design:type", Number)
], Product.prototype, "sales", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductType_1.ProductType, {
        nullable: false,
        description: undefined,
    }),
    __metadata("design:type", String)
], Product.prototype, "type", void 0);
Product = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true,
        description: undefined,
        simpleResolvers: undefined,
    })
], Product);
exports.Product = Product;