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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Author_1 = require("../../../models/Author");
const Category_1 = require("../../../models/Category");
const Gallery_1 = require("../../../models/Gallery");
const Meta_1 = require("../../../models/Meta");
const Product_1 = require("../../../models/Product");
const ProductCategoriesArgs_1 = require("./args/ProductCategoriesArgs");
const ProductGalleryArgs_1 = require("./args/ProductGalleryArgs");
let ProductRelationsResolver = class ProductRelationsResolver {
    async author(product, ctx) {
        return ctx.prisma.product.findOne({
            where: {
                id: product.id,
            },
        }).author({});
    }
    async meta(product, ctx) {
        return ctx.prisma.product.findOne({
            where: {
                id: product.id,
            },
        }).meta({});
    }
    async gallery(product, ctx, args) {
        return ctx.prisma.product.findOne({
            where: {
                id: product.id,
            },
        }).gallery(args);
    }
    async categories(product, ctx, args) {
        return ctx.prisma.product.findOne({
            where: {
                id: product.id,
            },
        }).categories(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Author_1.Author, {
        nullable: true,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "author", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Meta_1.Meta, {
        nullable: true,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "meta", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Gallery_1.Gallery], {
        nullable: true,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object, ProductGalleryArgs_1.ProductGalleryArgs]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "gallery", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Category_1.Category], {
        nullable: true,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object, ProductCategoriesArgs_1.ProductCategoriesArgs]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "categories", null);
ProductRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
