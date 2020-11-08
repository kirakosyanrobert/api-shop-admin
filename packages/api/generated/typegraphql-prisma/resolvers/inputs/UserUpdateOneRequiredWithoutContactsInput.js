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
exports.UserUpdateOneRequiredWithoutContactsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutContactsInput_1 = require("../inputs/UserCreateWithoutContactsInput");
const UserUpdateWithoutContactsDataInput_1 = require("../inputs/UserUpdateWithoutContactsDataInput");
const UserUpsertWithoutContactsInput_1 = require("../inputs/UserUpsertWithoutContactsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutContactsInput = class UserUpdateOneRequiredWithoutContactsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutContactsInput_1.UserCreateWithoutContactsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateWithoutContactsInput_1.UserCreateWithoutContactsInput)
], UserUpdateOneRequiredWithoutContactsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutContactsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutContactsDataInput_1.UserUpdateWithoutContactsDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpdateWithoutContactsDataInput_1.UserUpdateWithoutContactsDataInput)
], UserUpdateOneRequiredWithoutContactsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutContactsInput_1.UserUpsertWithoutContactsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpsertWithoutContactsInput_1.UserUpsertWithoutContactsInput)
], UserUpdateOneRequiredWithoutContactsInput.prototype, "upsert", void 0);
UserUpdateOneRequiredWithoutContactsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserUpdateOneRequiredWithoutContactsInput);
exports.UserUpdateOneRequiredWithoutContactsInput = UserUpdateOneRequiredWithoutContactsInput;
