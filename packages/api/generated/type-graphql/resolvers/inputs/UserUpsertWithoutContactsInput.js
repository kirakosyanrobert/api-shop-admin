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
exports.UserUpsertWithoutContactsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutContactsInput_1 = require("../inputs/UserCreateWithoutContactsInput");
const UserUpdateWithoutContactsDataInput_1 = require("../inputs/UserUpdateWithoutContactsDataInput");
let UserUpsertWithoutContactsInput = class UserUpsertWithoutContactsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutContactsDataInput_1.UserUpdateWithoutContactsDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", UserUpdateWithoutContactsDataInput_1.UserUpdateWithoutContactsDataInput)
], UserUpsertWithoutContactsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutContactsInput_1.UserCreateWithoutContactsInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", UserCreateWithoutContactsInput_1.UserCreateWithoutContactsInput)
], UserUpsertWithoutContactsInput.prototype, "create", void 0);
UserUpsertWithoutContactsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserUpsertWithoutContactsInput);
exports.UserUpsertWithoutContactsInput = UserUpsertWithoutContactsInput;
