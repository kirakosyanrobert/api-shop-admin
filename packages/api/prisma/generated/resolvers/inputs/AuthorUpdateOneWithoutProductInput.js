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
exports.AuthorUpdateOneWithoutProductInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCreateWithoutProductInput_1 = require("../inputs/AuthorCreateWithoutProductInput");
const AuthorUpdateWithoutProductDataInput_1 = require("../inputs/AuthorUpdateWithoutProductDataInput");
const AuthorUpsertWithoutProductInput_1 = require("../inputs/AuthorUpsertWithoutProductInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorUpdateOneWithoutProductInput = class AuthorUpdateOneWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutProductInput_1.AuthorCreateWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorCreateWithoutProductInput_1.AuthorCreateWithoutProductInput)
], AuthorUpdateOneWithoutProductInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorUpdateOneWithoutProductInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], AuthorUpdateOneWithoutProductInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], AuthorUpdateOneWithoutProductInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateWithoutProductDataInput_1.AuthorUpdateWithoutProductDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorUpdateWithoutProductDataInput_1.AuthorUpdateWithoutProductDataInput)
], AuthorUpdateOneWithoutProductInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpsertWithoutProductInput_1.AuthorUpsertWithoutProductInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AuthorUpsertWithoutProductInput_1.AuthorUpsertWithoutProductInput)
], AuthorUpdateOneWithoutProductInput.prototype, "upsert", void 0);
AuthorUpdateOneWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AuthorUpdateOneWithoutProductInput);
exports.AuthorUpdateOneWithoutProductInput = AuthorUpdateOneWithoutProductInput;
