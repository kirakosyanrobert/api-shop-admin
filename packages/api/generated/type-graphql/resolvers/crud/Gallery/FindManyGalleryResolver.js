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
exports.FindManyGalleryResolver = void 0;
const TypeGraphQL = require("type-graphql");
const FindManyGalleryArgs_1 = require("./args/FindManyGalleryArgs");
const Gallery_1 = require("../../../models/Gallery");
let FindManyGalleryResolver = class FindManyGalleryResolver {
    async galleries(ctx, args) {
        return ctx.prisma.gallery.findMany(args);
    }
};
__decorate([
    TypeGraphQL.Query(_returns => [Gallery_1.Gallery], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyGalleryArgs_1.FindManyGalleryArgs]),
    __metadata("design:returntype", Promise)
], FindManyGalleryResolver.prototype, "galleries", null);
FindManyGalleryResolver = __decorate([
    TypeGraphQL.Resolver(_of => Gallery_1.Gallery)
], FindManyGalleryResolver);
exports.FindManyGalleryResolver = FindManyGalleryResolver;
