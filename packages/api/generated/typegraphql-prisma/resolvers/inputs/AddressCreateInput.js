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
exports.AddressCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOneWithoutAddressesInput_1 = require("../inputs/UserCreateOneWithoutAddressesInput");
let AddressCreateInput = class AddressCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], AddressCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AddressCreateInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AddressCreateInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], AddressCreateInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOneWithoutAddressesInput_1.UserCreateOneWithoutAddressesInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", UserCreateOneWithoutAddressesInput_1.UserCreateOneWithoutAddressesInput)
], AddressCreateInput.prototype, "user", void 0);
AddressCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AddressCreateInput);
exports.AddressCreateInput = AddressCreateInput;
