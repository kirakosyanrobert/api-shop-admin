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
exports.ProductCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateProductArgs_1 = require("./args/AggregateProductArgs");
const CreateProductArgs_1 = require("./args/CreateProductArgs");
const DeleteManyProductArgs_1 = require("./args/DeleteManyProductArgs");
const DeleteProductArgs_1 = require("./args/DeleteProductArgs");
const FindFirstProductArgs_1 = require("./args/FindFirstProductArgs");
const FindManyProductArgs_1 = require("./args/FindManyProductArgs");
const FindOneProductArgs_1 = require("./args/FindOneProductArgs");
const UpdateManyProductArgs_1 = require("./args/UpdateManyProductArgs");
const UpdateProductArgs_1 = require("./args/UpdateProductArgs");
const UpsertProductArgs_1 = require("./args/UpsertProductArgs");
const Product_1 = require("../../../models/Product");
const AggregateProduct_1 = require("../../outputs/AggregateProduct");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let ProductCrudResolver = class ProductCrudResolver {
    async product(ctx, args) {
        return ctx.prisma.product.findOne(args);
    }
    async findFirstProduct(ctx, args) {
        return ctx.prisma.product.findFirst(args);
    }
    async products(ctx, args) {
        return ctx.prisma.product.findMany(args);
    }
    async createProduct(ctx, args) {
        return ctx.prisma.product.create(args);
    }
    async deleteProduct(ctx, args) {
        return ctx.prisma.product.delete(args);
    }
    async updateProduct(ctx, args) {
        return ctx.prisma.product.update(args);
    }
    async deleteManyProduct(ctx, args) {
        return ctx.prisma.product.deleteMany(args);
    }
    async updateManyProduct(ctx, args) {
        return ctx.prisma.product.updateMany(args);
    }
    async upsertProduct(ctx, args) {
        return ctx.prisma.product.upsert(args);
    }
    async aggregateProduct(ctx, info, args) {
        function transformFields(fields) {
            return Object.fromEntries(Object.entries(fields)
                .filter(([key, value]) => !key.startsWith("_"))
                .map(([key, value]) => {
                if (Object.keys(value).length === 0) {
                    return [key, true];
                }
                return [key, transformFields(value)];
            }));
        }
        return ctx.prisma.product.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneProductArgs_1.FindOneProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "product", null);
__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstProductArgs_1.FindFirstProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "findFirstProduct", null);
__decorate([
    TypeGraphQL.Query(_returns => [Product_1.Product], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyProductArgs_1.FindManyProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "products", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateProductArgs_1.CreateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "createProduct", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteProductArgs_1.DeleteProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "deleteProduct", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateProductArgs_1.UpdateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "updateProduct", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyProductArgs_1.DeleteManyProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "deleteManyProduct", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyProductArgs_1.UpdateManyProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "updateManyProduct", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertProductArgs_1.UpsertProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "upsertProduct", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_1.AggregateProduct, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateProductArgs_1.AggregateProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCrudResolver.prototype, "aggregateProduct", null);
ProductCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductCrudResolver);
exports.ProductCrudResolver = ProductCrudResolver;
