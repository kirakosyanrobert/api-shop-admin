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
exports.CategoryCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateCategoryArgs_1 = require("./args/AggregateCategoryArgs");
const CreateCategoryArgs_1 = require("./args/CreateCategoryArgs");
const DeleteCategoryArgs_1 = require("./args/DeleteCategoryArgs");
const DeleteManyCategoryArgs_1 = require("./args/DeleteManyCategoryArgs");
const FindFirstCategoryArgs_1 = require("./args/FindFirstCategoryArgs");
const FindManyCategoryArgs_1 = require("./args/FindManyCategoryArgs");
const FindOneCategoryArgs_1 = require("./args/FindOneCategoryArgs");
const UpdateCategoryArgs_1 = require("./args/UpdateCategoryArgs");
const UpdateManyCategoryArgs_1 = require("./args/UpdateManyCategoryArgs");
const UpsertCategoryArgs_1 = require("./args/UpsertCategoryArgs");
const Category_1 = require("../../../models/Category");
const AggregateCategory_1 = require("../../outputs/AggregateCategory");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let CategoryCrudResolver = class CategoryCrudResolver {
    async category(ctx, args) {
        return ctx.prisma.category.findOne(args);
    }
    async findFirstCategory(ctx, args) {
        return ctx.prisma.category.findFirst(args);
    }
    async categories(ctx, args) {
        return ctx.prisma.category.findMany(args);
    }
    async createCategory(ctx, args) {
        return ctx.prisma.category.create(args);
    }
    async deleteCategory(ctx, args) {
        return ctx.prisma.category.delete(args);
    }
    async updateCategory(ctx, args) {
        return ctx.prisma.category.update(args);
    }
    async deleteManyCategory(ctx, args) {
        return ctx.prisma.category.deleteMany(args);
    }
    async updateManyCategory(ctx, args) {
        return ctx.prisma.category.updateMany(args);
    }
    async upsertCategory(ctx, args) {
        return ctx.prisma.category.upsert(args);
    }
    async aggregateCategory(ctx, info, args) {
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
        return ctx.prisma.category.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneCategoryArgs_1.FindOneCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "category", null);
__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstCategoryArgs_1.FindFirstCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "findFirstCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [Category_1.Category], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyCategoryArgs_1.FindManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "categories", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateCategoryArgs_1.CreateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "createCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteCategoryArgs_1.DeleteCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "deleteCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateCategoryArgs_1.UpdateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "updateCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyCategoryArgs_1.DeleteManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "deleteManyCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyCategoryArgs_1.UpdateManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "updateManyCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertCategoryArgs_1.UpsertCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "upsertCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCategory_1.AggregateCategory, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCategoryArgs_1.AggregateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "aggregateCategory", null);
CategoryCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CategoryCrudResolver);
exports.CategoryCrudResolver = CategoryCrudResolver;
