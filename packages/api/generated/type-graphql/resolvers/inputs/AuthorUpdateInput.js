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
exports.AuthorUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductUpdateOneRequiredWithoutAuthorInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutAuthorInput");
const SocialUpdateManyWithoutAuthorInput_1 = require("../inputs/SocialUpdateManyWithoutAuthorInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AuthorUpdateInput = class AuthorUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateInput.prototype, "avatar", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateInput.prototype, "bio", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialUpdateManyWithoutAuthorInput_1.SocialUpdateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", SocialUpdateManyWithoutAuthorInput_1.SocialUpdateManyWithoutAuthorInput)
], AuthorUpdateInput.prototype, "socials", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutAuthorInput_1.ProductUpdateOneRequiredWithoutAuthorInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ProductUpdateOneRequiredWithoutAuthorInput_1.ProductUpdateOneRequiredWithoutAuthorInput)
], AuthorUpdateInput.prototype, "product", void 0);
AuthorUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AuthorUpdateInput);
exports.AuthorUpdateInput = AuthorUpdateInput;
