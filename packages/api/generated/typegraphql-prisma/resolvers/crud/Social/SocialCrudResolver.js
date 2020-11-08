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
exports.SocialCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateSocialArgs_1 = require("./args/AggregateSocialArgs");
const CreateSocialArgs_1 = require("./args/CreateSocialArgs");
const DeleteManySocialArgs_1 = require("./args/DeleteManySocialArgs");
const DeleteSocialArgs_1 = require("./args/DeleteSocialArgs");
const FindFirstSocialArgs_1 = require("./args/FindFirstSocialArgs");
const FindManySocialArgs_1 = require("./args/FindManySocialArgs");
const FindOneSocialArgs_1 = require("./args/FindOneSocialArgs");
const UpdateManySocialArgs_1 = require("./args/UpdateManySocialArgs");
const UpdateSocialArgs_1 = require("./args/UpdateSocialArgs");
const UpsertSocialArgs_1 = require("./args/UpsertSocialArgs");
const Social_1 = require("../../../models/Social");
const AggregateSocial_1 = require("../../outputs/AggregateSocial");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let SocialCrudResolver = class SocialCrudResolver {
    async social(ctx, args) {
        return ctx.prisma.social.findOne(args);
    }
    async findFirstSocial(ctx, args) {
        return ctx.prisma.social.findFirst(args);
    }
    async socials(ctx, args) {
        return ctx.prisma.social.findMany(args);
    }
    async createSocial(ctx, args) {
        return ctx.prisma.social.create(args);
    }
    async deleteSocial(ctx, args) {
        return ctx.prisma.social.delete(args);
    }
    async updateSocial(ctx, args) {
        return ctx.prisma.social.update(args);
    }
    async deleteManySocial(ctx, args) {
        return ctx.prisma.social.deleteMany(args);
    }
    async updateManySocial(ctx, args) {
        return ctx.prisma.social.updateMany(args);
    }
    async upsertSocial(ctx, args) {
        return ctx.prisma.social.upsert(args);
    }
    async aggregateSocial(ctx, info, args) {
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
        return ctx.prisma.social.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Social_1.Social, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneSocialArgs_1.FindOneSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "social", null);
__decorate([
    TypeGraphQL.Query(_returns => Social_1.Social, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstSocialArgs_1.FindFirstSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "findFirstSocial", null);
__decorate([
    TypeGraphQL.Query(_returns => [Social_1.Social], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManySocialArgs_1.FindManySocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "socials", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Social_1.Social, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateSocialArgs_1.CreateSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "createSocial", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Social_1.Social, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteSocialArgs_1.DeleteSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "deleteSocial", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Social_1.Social, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateSocialArgs_1.UpdateSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "updateSocial", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManySocialArgs_1.DeleteManySocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "deleteManySocial", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManySocialArgs_1.UpdateManySocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "updateManySocial", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Social_1.Social, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertSocialArgs_1.UpsertSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "upsertSocial", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSocial_1.AggregateSocial, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSocialArgs_1.AggregateSocialArgs]),
    __metadata("design:returntype", Promise)
], SocialCrudResolver.prototype, "aggregateSocial", null);
SocialCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Social_1.Social)
], SocialCrudResolver);
exports.SocialCrudResolver = SocialCrudResolver;
