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
exports.UserCreateWithoutAddressesInput = void 0;
const TypeGraphQL = require("type-graphql");
const CardCreateManyWithoutUserInput_1 = require("../inputs/CardCreateManyWithoutUserInput");
const ContactCreateManyWithoutUserInput_1 = require("../inputs/ContactCreateManyWithoutUserInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutAddressesInput = class UserCreateWithoutAddressesInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutAddressesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], UserCreateWithoutAddressesInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], UserCreateWithoutAddressesInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutAddressesInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutAddressesInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutAddressesInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutAddressesInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutAddressesInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactCreateManyWithoutUserInput_1.ContactCreateManyWithoutUserInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ContactCreateManyWithoutUserInput_1.ContactCreateManyWithoutUserInput)
], UserCreateWithoutAddressesInput.prototype, "contacts", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardCreateManyWithoutUserInput_1.CardCreateManyWithoutUserInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", CardCreateManyWithoutUserInput_1.CardCreateManyWithoutUserInput)
], UserCreateWithoutAddressesInput.prototype, "card", void 0);
UserCreateWithoutAddressesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserCreateWithoutAddressesInput);
exports.UserCreateWithoutAddressesInput = UserCreateWithoutAddressesInput;
