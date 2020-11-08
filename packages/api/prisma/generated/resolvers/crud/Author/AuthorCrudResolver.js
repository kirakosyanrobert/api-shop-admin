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
exports.AuthorCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateAuthorArgs_1 = require("./args/AggregateAuthorArgs");
const CreateAuthorArgs_1 = require("./args/CreateAuthorArgs");
const DeleteAuthorArgs_1 = require("./args/DeleteAuthorArgs");
const DeleteManyAuthorArgs_1 = require("./args/DeleteManyAuthorArgs");
const FindFirstAuthorArgs_1 = require("./args/FindFirstAuthorArgs");
const FindManyAuthorArgs_1 = require("./args/FindManyAuthorArgs");
const FindOneAuthorArgs_1 = require("./args/FindOneAuthorArgs");
const UpdateAuthorArgs_1 = require("./args/UpdateAuthorArgs");
const UpdateManyAuthorArgs_1 = require("./args/UpdateManyAuthorArgs");
const UpsertAuthorArgs_1 = require("./args/UpsertAuthorArgs");
const Author_1 = require("../../../models/Author");
const AggregateAuthor_1 = require("../../outputs/AggregateAuthor");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let AuthorCrudResolver = class AuthorCrudResolver {
    async author(ctx, args) {
        return ctx.prisma.author.findOne(args);
    }
    async findFirstAuthor(ctx, args) {
        return ctx.prisma.author.findFirst(args);
    }
    async authors(ctx, args) {
        return ctx.prisma.author.findMany(args);
    }
    async createAuthor(ctx, args) {
        return ctx.prisma.author.create(args);
    }
    async deleteAuthor(ctx, args) {
        return ctx.prisma.author.delete(args);
    }
    async updateAuthor(ctx, args) {
        return ctx.prisma.author.update(args);
    }
    async deleteManyAuthor(ctx, args) {
        return ctx.prisma.author.deleteMany(args);
    }
    async updateManyAuthor(ctx, args) {
        return ctx.prisma.author.updateMany(args);
    }
    async upsertAuthor(ctx, args) {
        return ctx.prisma.author.upsert(args);
    }
    async aggregateAuthor(ctx, info, args) {
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
        return ctx.prisma.author.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneAuthorArgs_1.FindOneAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "author", null);
__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstAuthorArgs_1.FindFirstAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "findFirstAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => [Author_1.Author], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyAuthorArgs_1.FindManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "authors", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateAuthorArgs_1.CreateAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "createAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteAuthorArgs_1.DeleteAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "deleteAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateAuthorArgs_1.UpdateAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "updateAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyAuthorArgs_1.DeleteManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "deleteManyAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyAuthorArgs_1.UpdateManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "updateManyAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertAuthorArgs_1.UpsertAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "upsertAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateAuthor_1.AggregateAuthor, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAuthorArgs_1.AggregateAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "aggregateAuthor", null);
AuthorCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], AuthorCrudResolver);
exports.AuthorCrudResolver = AuthorCrudResolver;
