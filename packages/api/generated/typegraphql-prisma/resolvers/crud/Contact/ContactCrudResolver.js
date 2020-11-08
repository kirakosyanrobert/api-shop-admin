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
exports.ContactCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateContactArgs_1 = require("./args/AggregateContactArgs");
const CreateContactArgs_1 = require("./args/CreateContactArgs");
const DeleteContactArgs_1 = require("./args/DeleteContactArgs");
const DeleteManyContactArgs_1 = require("./args/DeleteManyContactArgs");
const FindFirstContactArgs_1 = require("./args/FindFirstContactArgs");
const FindManyContactArgs_1 = require("./args/FindManyContactArgs");
const FindOneContactArgs_1 = require("./args/FindOneContactArgs");
const UpdateContactArgs_1 = require("./args/UpdateContactArgs");
const UpdateManyContactArgs_1 = require("./args/UpdateManyContactArgs");
const UpsertContactArgs_1 = require("./args/UpsertContactArgs");
const Contact_1 = require("../../../models/Contact");
const AggregateContact_1 = require("../../outputs/AggregateContact");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let ContactCrudResolver = class ContactCrudResolver {
    async contact(ctx, args) {
        return ctx.prisma.contact.findOne(args);
    }
    async findFirstContact(ctx, args) {
        return ctx.prisma.contact.findFirst(args);
    }
    async contacts(ctx, args) {
        return ctx.prisma.contact.findMany(args);
    }
    async createContact(ctx, args) {
        return ctx.prisma.contact.create(args);
    }
    async deleteContact(ctx, args) {
        return ctx.prisma.contact.delete(args);
    }
    async updateContact(ctx, args) {
        return ctx.prisma.contact.update(args);
    }
    async deleteManyContact(ctx, args) {
        return ctx.prisma.contact.deleteMany(args);
    }
    async updateManyContact(ctx, args) {
        return ctx.prisma.contact.updateMany(args);
    }
    async upsertContact(ctx, args) {
        return ctx.prisma.contact.upsert(args);
    }
    async aggregateContact(ctx, info, args) {
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
        return ctx.prisma.contact.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Contact_1.Contact, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneContactArgs_1.FindOneContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "contact", null);
__decorate([
    TypeGraphQL.Query(_returns => Contact_1.Contact, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstContactArgs_1.FindFirstContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "findFirstContact", null);
__decorate([
    TypeGraphQL.Query(_returns => [Contact_1.Contact], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyContactArgs_1.FindManyContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "contacts", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Contact_1.Contact, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateContactArgs_1.CreateContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "createContact", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Contact_1.Contact, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteContactArgs_1.DeleteContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "deleteContact", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Contact_1.Contact, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateContactArgs_1.UpdateContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "updateContact", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyContactArgs_1.DeleteManyContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "deleteManyContact", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyContactArgs_1.UpdateManyContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "updateManyContact", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Contact_1.Contact, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertContactArgs_1.UpsertContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "upsertContact", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateContact_1.AggregateContact, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateContactArgs_1.AggregateContactArgs]),
    __metadata("design:returntype", Promise)
], ContactCrudResolver.prototype, "aggregateContact", null);
ContactCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Contact_1.Contact)
], ContactCrudResolver);
exports.ContactCrudResolver = ContactCrudResolver;
