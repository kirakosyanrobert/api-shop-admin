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
exports.FindFirstUserResolver = void 0;
const TypeGraphQL = require("type-graphql");
const FindFirstUserArgs_1 = require("./args/FindFirstUserArgs");
const User_1 = require("../../../models/User");
let FindFirstUserResolver = class FindFirstUserResolver {
    async findFirstUser(ctx, args) {
        return ctx.prisma.user.findFirst(args);
    }
};
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstUserArgs_1.FindFirstUserArgs]),
    __metadata("design:returntype", Promise)
], FindFirstUserResolver.prototype, "findFirstUser", null);
FindFirstUserResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], FindFirstUserResolver);
exports.FindFirstUserResolver = FindFirstUserResolver;
