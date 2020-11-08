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
exports.CardCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateCardArgs_1 = require("./args/AggregateCardArgs");
const CreateCardArgs_1 = require("./args/CreateCardArgs");
const DeleteCardArgs_1 = require("./args/DeleteCardArgs");
const DeleteManyCardArgs_1 = require("./args/DeleteManyCardArgs");
const FindFirstCardArgs_1 = require("./args/FindFirstCardArgs");
const FindManyCardArgs_1 = require("./args/FindManyCardArgs");
const FindOneCardArgs_1 = require("./args/FindOneCardArgs");
const UpdateCardArgs_1 = require("./args/UpdateCardArgs");
const UpdateManyCardArgs_1 = require("./args/UpdateManyCardArgs");
const UpsertCardArgs_1 = require("./args/UpsertCardArgs");
const Card_1 = require("../../../models/Card");
const AggregateCard_1 = require("../../outputs/AggregateCard");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let CardCrudResolver = class CardCrudResolver {
    async card(ctx, args) {
        return ctx.prisma.card.findOne(args);
    }
    async findFirstCard(ctx, args) {
        return ctx.prisma.card.findFirst(args);
    }
    async cards(ctx, args) {
        return ctx.prisma.card.findMany(args);
    }
    async createCard(ctx, args) {
        return ctx.prisma.card.create(args);
    }
    async deleteCard(ctx, args) {
        return ctx.prisma.card.delete(args);
    }
    async updateCard(ctx, args) {
        return ctx.prisma.card.update(args);
    }
    async deleteManyCard(ctx, args) {
        return ctx.prisma.card.deleteMany(args);
    }
    async updateManyCard(ctx, args) {
        return ctx.prisma.card.updateMany(args);
    }
    async upsertCard(ctx, args) {
        return ctx.prisma.card.upsert(args);
    }
    async aggregateCard(ctx, info, args) {
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
        return ctx.prisma.card.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Card_1.Card, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneCardArgs_1.FindOneCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "card", null);
__decorate([
    TypeGraphQL.Query(_returns => Card_1.Card, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstCardArgs_1.FindFirstCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "findFirstCard", null);
__decorate([
    TypeGraphQL.Query(_returns => [Card_1.Card], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyCardArgs_1.FindManyCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "cards", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Card_1.Card, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateCardArgs_1.CreateCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "createCard", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Card_1.Card, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteCardArgs_1.DeleteCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "deleteCard", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Card_1.Card, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateCardArgs_1.UpdateCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "updateCard", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyCardArgs_1.DeleteManyCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "deleteManyCard", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyCardArgs_1.UpdateManyCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "updateManyCard", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Card_1.Card, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertCardArgs_1.UpsertCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "upsertCard", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCard_1.AggregateCard, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCardArgs_1.AggregateCardArgs]),
    __metadata("design:returntype", Promise)
], CardCrudResolver.prototype, "aggregateCard", null);
CardCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Card_1.Card)
], CardCrudResolver);
exports.CardCrudResolver = CardCrudResolver;
