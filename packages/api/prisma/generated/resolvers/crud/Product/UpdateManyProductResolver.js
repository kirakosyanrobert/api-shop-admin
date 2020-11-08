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
exports.UpdateManyProductResolver = void 0;
const TypeGraphQL = require("type-graphql");
const UpdateManyProductArgs_1 = require("./args/UpdateManyProductArgs");
const Product_1 = require("../../../models/Product");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let UpdateManyProductResolver = class UpdateManyProductResolver {
    async updateManyProduct(ctx, args) {
        return ctx.prisma.product.updateMany(args);
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyProductArgs_1.UpdateManyProductArgs]),
    __metadata("design:returntype", Promise)
], UpdateManyProductResolver.prototype, "updateManyProduct", null);
UpdateManyProductResolver = __decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], UpdateManyProductResolver);
exports.UpdateManyProductResolver = UpdateManyProductResolver;
