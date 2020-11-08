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
exports.AuthorCreateWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const SocialCreateManyWithoutAuthorInput_1 = require("../inputs/SocialCreateManyWithoutAuthorInput");
let AuthorCreateWithoutProductInput = class AuthorCreateWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutProductInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutProductInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutProductInput.prototype, "avatar", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutProductInput.prototype, "bio", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutProductInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutProductInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => SocialCreateManyWithoutAuthorInput_1.SocialCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", SocialCreateManyWithoutAuthorInput_1.SocialCreateManyWithoutAuthorInput)
], AuthorCreateWithoutProductInput.prototype, "socials", void 0);
AuthorCreateWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AuthorCreateWithoutProductInput);
exports.AuthorCreateWithoutProductInput = AuthorCreateWithoutProductInput;
