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
exports.AddressRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Address_1 = require("../../../models/Address");
const User_1 = require("../../../models/User");
let AddressRelationsResolver = class AddressRelationsResolver {
    async user(address, ctx) {
        return ctx.prisma.address.findOne({
            where: {
                id: address.id,
            },
        }).user({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Address_1.Address, Object]),
    __metadata("design:returntype", Promise)
], AddressRelationsResolver.prototype, "user", null);
AddressRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressRelationsResolver);
exports.AddressRelationsResolver = AddressRelationsResolver;
