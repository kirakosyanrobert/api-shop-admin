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
exports.AuthorCreateWithoutSocialsInput = void 0;
const TypeGraphQL = require("type-graphql");
const ProductCreateOneWithoutAuthorInput_1 = require("../inputs/ProductCreateOneWithoutAuthorInput");
let AuthorCreateWithoutSocialsInput = class AuthorCreateWithoutSocialsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutSocialsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutSocialsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutSocialsInput.prototype, "avatar", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutSocialsInput.prototype, "bio", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutSocialsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AuthorCreateWithoutSocialsInput.prototype, "website", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateOneWithoutAuthorInput_1.ProductCreateOneWithoutAuthorInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ProductCreateOneWithoutAuthorInput_1.ProductCreateOneWithoutAuthorInput)
], AuthorCreateWithoutSocialsInput.prototype, "product", void 0);
AuthorCreateWithoutSocialsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AuthorCreateWithoutSocialsInput);
exports.AuthorCreateWithoutSocialsInput = AuthorCreateWithoutSocialsInput;
