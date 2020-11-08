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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutGalleryInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateWithoutGalleryInput_1 = require("../inputs/ProductCreateWithoutGalleryInput");
const ProductUpdateWithoutGalleryDataInput_1 = require("../inputs/ProductUpdateWithoutGalleryDataInput");
const ProductUpsertWithoutGalleryInput_1 = require("../inputs/ProductUpsertWithoutGalleryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutGalleryInput = class ProductUpdateOneRequiredWithoutGalleryInput {
};
__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutGalleryInput_1.ProductCreateWithoutGalleryInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductCreateWithoutGalleryInput_1.ProductCreateWithoutGalleryInput)
], ProductUpdateOneRequiredWithoutGalleryInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutGalleryInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutGalleryDataInput_1.ProductUpdateWithoutGalleryDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpdateWithoutGalleryDataInput_1.ProductUpdateWithoutGalleryDataInput)
], ProductUpdateOneRequiredWithoutGalleryInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutGalleryInput_1.ProductUpsertWithoutGalleryInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpsertWithoutGalleryInput_1.ProductUpsertWithoutGalleryInput)
], ProductUpdateOneRequiredWithoutGalleryInput.prototype, "upsert", void 0);
ProductUpdateOneRequiredWithoutGalleryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpdateOneRequiredWithoutGalleryInput);
exports.ProductUpdateOneRequiredWithoutGalleryInput = ProductUpdateOneRequiredWithoutGalleryInput;
