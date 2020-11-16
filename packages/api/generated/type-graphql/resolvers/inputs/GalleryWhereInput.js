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
var GalleryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let GalleryWhereInput = GalleryWhereInput_1 = class GalleryWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], GalleryWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], GalleryWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], GalleryWhereInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], GalleryWhereInput.prototype, "product", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], GalleryWhereInput.prototype, "productId", void 0);
GalleryWhereInput = GalleryWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], GalleryWhereInput);
exports.GalleryWhereInput = GalleryWhereInput;
