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
exports.ProductUpdateOneRequiredWithoutCategoriesInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductUpdateWithoutCategoriesDataInput_1 = require("../inputs/ProductUpdateWithoutCategoriesDataInput");
const ProductUpsertWithoutCategoriesInput_1 = require("../inputs/ProductUpsertWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutCategoriesInput = class ProductUpdateOneRequiredWithoutCategoriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput)
], ProductUpdateOneRequiredWithoutCategoriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutCategoriesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesDataInput_1.ProductUpdateWithoutCategoriesDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpdateWithoutCategoriesDataInput_1.ProductUpdateWithoutCategoriesDataInput)
], ProductUpdateOneRequiredWithoutCategoriesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutCategoriesInput_1.ProductUpsertWithoutCategoriesInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpsertWithoutCategoriesInput_1.ProductUpsertWithoutCategoriesInput)
], ProductUpdateOneRequiredWithoutCategoriesInput.prototype, "upsert", void 0);
ProductUpdateOneRequiredWithoutCategoriesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpdateOneRequiredWithoutCategoriesInput);
exports.ProductUpdateOneRequiredWithoutCategoriesInput = ProductUpdateOneRequiredWithoutCategoriesInput;
