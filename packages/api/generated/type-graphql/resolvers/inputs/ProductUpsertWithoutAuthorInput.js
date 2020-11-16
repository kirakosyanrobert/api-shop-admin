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
exports.ProductUpsertWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateWithoutAuthorInput_1 = require("../inputs/ProductCreateWithoutAuthorInput");
const ProductUpdateWithoutAuthorDataInput_1 = require("../inputs/ProductUpdateWithoutAuthorDataInput");
let ProductUpsertWithoutAuthorInput = class ProductUpsertWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutAuthorDataInput_1.ProductUpdateWithoutAuthorDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ProductUpdateWithoutAuthorDataInput_1.ProductUpdateWithoutAuthorDataInput)
], ProductUpsertWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutAuthorInput_1.ProductCreateWithoutAuthorInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ProductCreateWithoutAuthorInput_1.ProductCreateWithoutAuthorInput)
], ProductUpsertWithoutAuthorInput.prototype, "create", void 0);
ProductUpsertWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ProductUpsertWithoutAuthorInput);
exports.ProductUpsertWithoutAuthorInput = ProductUpsertWithoutAuthorInput;
