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
exports.UserUpdateOneRequiredWithoutAddressesInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutAddressesInput_1 = require("../inputs/UserCreateWithoutAddressesInput");
const UserUpdateWithoutAddressesDataInput_1 = require("../inputs/UserUpdateWithoutAddressesDataInput");
const UserUpsertWithoutAddressesInput_1 = require("../inputs/UserUpsertWithoutAddressesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAddressesInput = class UserUpdateOneRequiredWithoutAddressesInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateWithoutAddressesInput_1.UserCreateWithoutAddressesInput)
], UserUpdateOneRequiredWithoutAddressesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAddressesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAddressesDataInput_1.UserUpdateWithoutAddressesDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpdateWithoutAddressesDataInput_1.UserUpdateWithoutAddressesDataInput)
], UserUpdateOneRequiredWithoutAddressesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAddressesInput_1.UserUpsertWithoutAddressesInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpsertWithoutAddressesInput_1.UserUpsertWithoutAddressesInput)
], UserUpdateOneRequiredWithoutAddressesInput.prototype, "upsert", void 0);
UserUpdateOneRequiredWithoutAddressesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserUpdateOneRequiredWithoutAddressesInput);
exports.UserUpdateOneRequiredWithoutAddressesInput = UserUpdateOneRequiredWithoutAddressesInput;
