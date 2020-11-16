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
exports.UpdateManyAddressArgs = void 0;
const TypeGraphQL = require("type-graphql");
const AddressUpdateManyMutationInput_1 = require("../../../inputs/AddressUpdateManyMutationInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
let UpdateManyAddressArgs = class UpdateManyAddressArgs {
};
__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyMutationInput_1.AddressUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", AddressUpdateManyMutationInput_1.AddressUpdateManyMutationInput)
], UpdateManyAddressArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, { nullable: true }),
    __metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], UpdateManyAddressArgs.prototype, "where", void 0);
UpdateManyAddressArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAddressArgs);
exports.UpdateManyAddressArgs = UpdateManyAddressArgs;
