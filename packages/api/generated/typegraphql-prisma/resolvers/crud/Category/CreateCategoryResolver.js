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
exports.CreateCategoryResolver = void 0;
const TypeGraphQL = require("type-graphql");
const CreateCategoryArgs_1 = require("./args/CreateCategoryArgs");
const Category_1 = require("../../../models/Category");
let CreateCategoryResolver = class CreateCategoryResolver {
    async createCategory(ctx, args) {
        return ctx.prisma.category.create(args);
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateCategoryArgs_1.CreateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CreateCategoryResolver.prototype, "createCategory", null);
CreateCategoryResolver = __decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CreateCategoryResolver);
exports.CreateCategoryResolver = CreateCategoryResolver;