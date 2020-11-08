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
exports.AddressCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateAddressArgs_1 = require("./args/AggregateAddressArgs");
const CreateAddressArgs_1 = require("./args/CreateAddressArgs");
const DeleteAddressArgs_1 = require("./args/DeleteAddressArgs");
const DeleteManyAddressArgs_1 = require("./args/DeleteManyAddressArgs");
const FindFirstAddressArgs_1 = require("./args/FindFirstAddressArgs");
const FindManyAddressArgs_1 = require("./args/FindManyAddressArgs");
const FindOneAddressArgs_1 = require("./args/FindOneAddressArgs");
const UpdateAddressArgs_1 = require("./args/UpdateAddressArgs");
const UpdateManyAddressArgs_1 = require("./args/UpdateManyAddressArgs");
const UpsertAddressArgs_1 = require("./args/UpsertAddressArgs");
const Address_1 = require("../../../models/Address");
const AggregateAddress_1 = require("../../outputs/AggregateAddress");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let AddressCrudResolver = class AddressCrudResolver {
    async address(ctx, args) {
        return ctx.prisma.address.findOne(args);
    }
    async findFirstAddress(ctx, args) {
        return ctx.prisma.address.findFirst(args);
    }
    async addresses(ctx, args) {
        return ctx.prisma.address.findMany(args);
    }
    async createAddress(ctx, args) {
        return ctx.prisma.address.create(args);
    }
    async deleteAddress(ctx, args) {
        return ctx.prisma.address.delete(args);
    }
    async updateAddress(ctx, args) {
        return ctx.prisma.address.update(args);
    }
    async deleteManyAddress(ctx, args) {
        return ctx.prisma.address.deleteMany(args);
    }
    async updateManyAddress(ctx, args) {
        return ctx.prisma.address.updateMany(args);
    }
    async upsertAddress(ctx, args) {
        return ctx.prisma.address.upsert(args);
    }
    async aggregateAddress(ctx, info, args) {
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
        return ctx.prisma.address.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneAddressArgs_1.FindOneAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "address", null);
__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstAddressArgs_1.FindFirstAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "findFirstAddress", null);
__decorate([
    TypeGraphQL.Query(_returns => [Address_1.Address], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyAddressArgs_1.FindManyAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "addresses", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateAddressArgs_1.CreateAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "createAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteAddressArgs_1.DeleteAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "deleteAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateAddressArgs_1.UpdateAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "updateAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyAddressArgs_1.DeleteManyAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "deleteManyAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyAddressArgs_1.UpdateManyAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "updateManyAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertAddressArgs_1.UpsertAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "upsertAddress", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateAddress_1.AggregateAddress, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAddressArgs_1.AggregateAddressArgs]),
    __metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "aggregateAddress", null);
AddressCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressCrudResolver);
exports.AddressCrudResolver = AddressCrudResolver;
