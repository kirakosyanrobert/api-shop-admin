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
exports.MetaCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateMetaArgs_1 = require("./args/AggregateMetaArgs");
const CreateMetaArgs_1 = require("./args/CreateMetaArgs");
const DeleteManyMetaArgs_1 = require("./args/DeleteManyMetaArgs");
const DeleteMetaArgs_1 = require("./args/DeleteMetaArgs");
const FindFirstMetaArgs_1 = require("./args/FindFirstMetaArgs");
const FindManyMetaArgs_1 = require("./args/FindManyMetaArgs");
const FindOneMetaArgs_1 = require("./args/FindOneMetaArgs");
const UpdateManyMetaArgs_1 = require("./args/UpdateManyMetaArgs");
const UpdateMetaArgs_1 = require("./args/UpdateMetaArgs");
const UpsertMetaArgs_1 = require("./args/UpsertMetaArgs");
const Meta_1 = require("../../../models/Meta");
const AggregateMeta_1 = require("../../outputs/AggregateMeta");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let MetaCrudResolver = class MetaCrudResolver {
    async meta(ctx, args) {
        return ctx.prisma.meta.findOne(args);
    }
    async findFirstMeta(ctx, args) {
        return ctx.prisma.meta.findFirst(args);
    }
    async metas(ctx, args) {
        return ctx.prisma.meta.findMany(args);
    }
    async createMeta(ctx, args) {
        return ctx.prisma.meta.create(args);
    }
    async deleteMeta(ctx, args) {
        return ctx.prisma.meta.delete(args);
    }
    async updateMeta(ctx, args) {
        return ctx.prisma.meta.update(args);
    }
    async deleteManyMeta(ctx, args) {
        return ctx.prisma.meta.deleteMany(args);
    }
    async updateManyMeta(ctx, args) {
        return ctx.prisma.meta.updateMany(args);
    }
    async upsertMeta(ctx, args) {
        return ctx.prisma.meta.upsert(args);
    }
    async aggregateMeta(ctx, info, args) {
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
        return ctx.prisma.meta.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Meta_1.Meta, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneMetaArgs_1.FindOneMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "meta", null);
__decorate([
    TypeGraphQL.Query(_returns => Meta_1.Meta, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstMetaArgs_1.FindFirstMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "findFirstMeta", null);
__decorate([
    TypeGraphQL.Query(_returns => [Meta_1.Meta], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyMetaArgs_1.FindManyMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "metas", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meta_1.Meta, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateMetaArgs_1.CreateMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "createMeta", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meta_1.Meta, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteMetaArgs_1.DeleteMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "deleteMeta", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meta_1.Meta, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateMetaArgs_1.UpdateMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "updateMeta", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyMetaArgs_1.DeleteManyMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "deleteManyMeta", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyMetaArgs_1.UpdateManyMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "updateManyMeta", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Meta_1.Meta, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertMetaArgs_1.UpsertMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "upsertMeta", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateMeta_1.AggregateMeta, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateMetaArgs_1.AggregateMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaCrudResolver.prototype, "aggregateMeta", null);
MetaCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Meta_1.Meta)
], MetaCrudResolver);
exports.MetaCrudResolver = MetaCrudResolver;
