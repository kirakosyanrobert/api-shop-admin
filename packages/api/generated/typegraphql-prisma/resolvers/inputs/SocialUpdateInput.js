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
exports.SocialUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorUpdateOneRequiredWithoutSocialsInput_1 = require("../inputs/AuthorUpdateOneRequiredWithoutSocialsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SocialUpdateInput = class SocialUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SocialUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SocialUpdateInput.prototype, "media", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SocialUpdateInput.prototype, "profileLink", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutSocialsInput_1.AuthorUpdateOneRequiredWithoutSocialsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorUpdateOneRequiredWithoutSocialsInput_1.AuthorUpdateOneRequiredWithoutSocialsInput)
], SocialUpdateInput.prototype, "author", void 0);
SocialUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], SocialUpdateInput);
exports.SocialUpdateInput = SocialUpdateInput;