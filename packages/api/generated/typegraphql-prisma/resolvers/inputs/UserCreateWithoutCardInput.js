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
exports.UserCreateWithoutCardInput = void 0;
const TypeGraphQL = require("type-graphql");
const AddressCreateManyWithoutUserInput_1 = require("../inputs/AddressCreateManyWithoutUserInput");
const ContactCreateManyWithoutUserInput_1 = require("../inputs/ContactCreateManyWithoutUserInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutCardInput = class UserCreateWithoutCardInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutCardInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], UserCreateWithoutCardInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], UserCreateWithoutCardInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutCardInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutCardInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutCardInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutCardInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], UserCreateWithoutCardInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressCreateManyWithoutUserInput_1.AddressCreateManyWithoutUserInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", AddressCreateManyWithoutUserInput_1.AddressCreateManyWithoutUserInput)
], UserCreateWithoutCardInput.prototype, "addresses", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactCreateManyWithoutUserInput_1.ContactCreateManyWithoutUserInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ContactCreateManyWithoutUserInput_1.ContactCreateManyWithoutUserInput)
], UserCreateWithoutCardInput.prototype, "contacts", void 0);
UserCreateWithoutCardInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserCreateWithoutCardInput);
exports.UserCreateWithoutCardInput = UserCreateWithoutCardInput;
