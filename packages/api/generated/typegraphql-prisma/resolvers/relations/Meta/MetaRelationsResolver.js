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
exports.MetaRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Meta_1 = require("../../../models/Meta");
const Product_1 = require("../../../models/Product");
let MetaRelationsResolver = class MetaRelationsResolver {
    async product(meta, ctx) {
        return ctx.prisma.meta.findOne({
            where: {
                id: meta.id,
            },
        }).product({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Meta_1.Meta, Object]),
    __metadata("design:returntype", Promise)
], MetaRelationsResolver.prototype, "product", null);
MetaRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Meta_1.Meta)
], MetaRelationsResolver);
exports.MetaRelationsResolver = MetaRelationsResolver;
