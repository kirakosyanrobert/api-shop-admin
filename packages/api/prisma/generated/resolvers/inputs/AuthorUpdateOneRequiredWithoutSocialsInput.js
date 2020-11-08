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
exports.AuthorUpdateOneRequiredWithoutSocialsInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCreateWithoutSocialsInput_1 = require("../inputs/AuthorCreateWithoutSocialsInput");
const AuthorUpdateWithoutSocialsDataInput_1 = require("../inputs/AuthorUpdateWithoutSocialsDataInput");
const AuthorUpsertWithoutSocialsInput_1 = require("../inputs/AuthorUpsertWithoutSocialsInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorUpdateOneRequiredWithoutSocialsInput = class AuthorUpdateOneRequiredWithoutSocialsInput {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutSocialsInput_1.AuthorCreateWithoutSocialsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorCreateWithoutSocialsInput_1.AuthorCreateWithoutSocialsInput)
], AuthorUpdateOneRequiredWithoutSocialsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorUpdateOneRequiredWithoutSocialsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateWithoutSocialsDataInput_1.AuthorUpdateWithoutSocialsDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorUpdateWithoutSocialsDataInput_1.AuthorUpdateWithoutSocialsDataInput)
], AuthorUpdateOneRequiredWithoutSocialsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpsertWithoutSocialsInput_1.AuthorUpsertWithoutSocialsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorUpsertWithoutSocialsInput_1.AuthorUpsertWithoutSocialsInput)
], AuthorUpdateOneRequiredWithoutSocialsInput.prototype, "upsert", void 0);
AuthorUpdateOneRequiredWithoutSocialsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AuthorUpdateOneRequiredWithoutSocialsInput);
exports.AuthorUpdateOneRequiredWithoutSocialsInput = AuthorUpdateOneRequiredWithoutSocialsInput;
