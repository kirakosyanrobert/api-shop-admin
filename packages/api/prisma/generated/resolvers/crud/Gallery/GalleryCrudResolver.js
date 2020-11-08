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
exports.GalleryCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateGalleryArgs_1 = require("./args/AggregateGalleryArgs");
const CreateGalleryArgs_1 = require("./args/CreateGalleryArgs");
const DeleteGalleryArgs_1 = require("./args/DeleteGalleryArgs");
const DeleteManyGalleryArgs_1 = require("./args/DeleteManyGalleryArgs");
const FindFirstGalleryArgs_1 = require("./args/FindFirstGalleryArgs");
const FindManyGalleryArgs_1 = require("./args/FindManyGalleryArgs");
const FindOneGalleryArgs_1 = require("./args/FindOneGalleryArgs");
const UpdateGalleryArgs_1 = require("./args/UpdateGalleryArgs");
const UpdateManyGalleryArgs_1 = require("./args/UpdateManyGalleryArgs");
const UpsertGalleryArgs_1 = require("./args/UpsertGalleryArgs");
const Gallery_1 = require("../../../models/Gallery");
const AggregateGallery_1 = require("../../outputs/AggregateGallery");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let GalleryCrudResolver = class GalleryCrudResolver {
    async gallery(ctx, args) {
        return ctx.prisma.gallery.findOne(args);
    }
    async findFirstGallery(ctx, args) {
        return ctx.prisma.gallery.findFirst(args);
    }
    async galleries(ctx, args) {
        return ctx.prisma.gallery.findMany(args);
    }
    async createGallery(ctx, args) {
        return ctx.prisma.gallery.create(args);
    }
    async deleteGallery(ctx, args) {
        return ctx.prisma.gallery.delete(args);
    }
    async updateGallery(ctx, args) {
        return ctx.prisma.gallery.update(args);
    }
    async deleteManyGallery(ctx, args) {
        return ctx.prisma.gallery.deleteMany(args);
    }
    async updateManyGallery(ctx, args) {
        return ctx.prisma.gallery.updateMany(args);
    }
    async upsertGallery(ctx, args) {
        return ctx.prisma.gallery.upsert(args);
    }
    async aggregateGallery(ctx, info, args) {
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
        return ctx.prisma.gallery.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Gallery_1.Gallery, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneGalleryArgs_1.FindOneGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "gallery", null);
__decorate([
    TypeGraphQL.Query(_returns => Gallery_1.Gallery, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstGalleryArgs_1.FindFirstGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "findFirstGallery", null);
__decorate([
    TypeGraphQL.Query(_returns => [Gallery_1.Gallery], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyGalleryArgs_1.FindManyGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "galleries", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Gallery_1.Gallery, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateGalleryArgs_1.CreateGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "createGallery", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Gallery_1.Gallery, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteGalleryArgs_1.DeleteGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "deleteGallery", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Gallery_1.Gallery, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateGalleryArgs_1.UpdateGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "updateGallery", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyGalleryArgs_1.DeleteManyGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "deleteManyGallery", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyGalleryArgs_1.UpdateManyGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "updateManyGallery", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Gallery_1.Gallery, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertGalleryArgs_1.UpsertGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "upsertGallery", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateGallery_1.AggregateGallery, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateGalleryArgs_1.AggregateGalleryArgs]),
    __metadata("design:returntype", Promise)
], GalleryCrudResolver.prototype, "aggregateGallery", null);
GalleryCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Gallery_1.Gallery)
], GalleryCrudResolver);
exports.GalleryCrudResolver = GalleryCrudResolver;
