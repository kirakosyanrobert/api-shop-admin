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
exports.FindManyAddressArgs = void 0;
const TypeGraphQL = require("type-graphql");
const AddressOrderByInput_1 = require("../../../inputs/AddressOrderByInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
const AddressDistinctFieldEnum_1 = require("../../../../enums/AddressDistinctFieldEnum");
let FindManyAddressArgs = class FindManyAddressArgs {
};
__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, { nullable: true }),
    __metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], FindManyAddressArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressOrderByInput_1.AddressOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyAddressArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, { nullable: true }),
    __metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], FindManyAddressArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyAddressArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyAddressArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressDistinctFieldEnum_1.AddressDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyAddressArgs.prototype, "distinct", void 0);
FindManyAddressArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyAddressArgs);
exports.FindManyAddressArgs = FindManyAddressArgs;
