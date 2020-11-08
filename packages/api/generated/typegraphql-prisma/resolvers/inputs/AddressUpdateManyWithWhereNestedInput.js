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
exports.AddressUpdateManyWithWhereNestedInput = void 0;
const TypeGraphQL = require("type-graphql");
const AddressScalarWhereInput_1 = require("../inputs/AddressScalarWhereInput");
const AddressUpdateManyDataInput_1 = require("../inputs/AddressUpdateManyDataInput");
let AddressUpdateManyWithWhereNestedInput = class AddressUpdateManyWithWhereNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => AddressScalarWhereInput_1.AddressScalarWhereInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", AddressScalarWhereInput_1.AddressScalarWhereInput)
], AddressUpdateManyWithWhereNestedInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyDataInput_1.AddressUpdateManyDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", AddressUpdateManyDataInput_1.AddressUpdateManyDataInput)
], AddressUpdateManyWithWhereNestedInput.prototype, "data", void 0);
AddressUpdateManyWithWhereNestedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AddressUpdateManyWithWhereNestedInput);
exports.AddressUpdateManyWithWhereNestedInput = AddressUpdateManyWithWhereNestedInput;
