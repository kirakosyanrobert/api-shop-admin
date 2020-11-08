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
exports.FindOneContactResolver = void 0;
const TypeGraphQL = require("type-graphql");
const FindOneContactArgs_1 = require("./args/FindOneContactArgs");
const Contact_1 = require("../../../models/Contact");
let FindOneContactResolver = class FindOneContactResolver {
    async contact(ctx, args) {
        return ctx.prisma.contact.findOne(args);
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
], FindOneContactResolver.prototype, "contact", null);
FindOneContactResolver = __decorate([
    TypeGraphQL.Resolver(_of => Contact_1.Contact)
], FindOneContactResolver);
exports.FindOneContactResolver = FindOneContactResolver;
