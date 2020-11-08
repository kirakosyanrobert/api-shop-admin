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
exports.ProductUpdateOneRequiredWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateWithoutAuthorInput_1 = require("../inputs/ProductCreateWithoutAuthorInput");
const ProductUpdateWithoutAuthorDataInput_1 = require("../inputs/ProductUpdateWithoutAuthorDataInput");
const ProductUpsertWithoutAuthorInput_1 = require("../inputs/ProductUpsertWithoutAuthorInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutAuthorInput = class ProductUpdateOneRequiredWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutAuthorInput_1.ProductCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductCreateWithoutAuthorInput_1.ProductCreateWithoutAuthorInput)
], ProductUpdateOneRequiredWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutAuthorDataInput_1.ProductUpdateWithoutAuthorDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpdateWithoutAuthorDataInput_1.ProductUpdateWithoutAuthorDataInput)
], ProductUpdateOneRequiredWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutAuthorInput_1.ProductUpsertWithoutAuthorInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpsertWithoutAuthorInput_1.ProductUpsertWithoutAuthorInput)
], ProductUpdateOneRequiredWithoutAuthorInput.prototype, "upsert", void 0);
ProductUpdateOneRequiredWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpdateOneRequiredWithoutAuthorInput);
exports.ProductUpdateOneRequiredWithoutAuthorInput = ProductUpdateOneRequiredWithoutAuthorInput;
