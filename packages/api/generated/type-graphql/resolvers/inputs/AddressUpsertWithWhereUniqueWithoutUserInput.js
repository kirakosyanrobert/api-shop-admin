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
exports.AddressUpsertWithWhereUniqueWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressUpdateWithoutUserDataInput_1 = require("../inputs/AddressUpdateWithoutUserDataInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpsertWithWhereUniqueWithoutUserInput = class AddressUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutUserDataInput_1.AddressUpdateWithoutUserDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", AddressUpdateWithoutUserDataInput_1.AddressUpdateWithoutUserDataInput)
], AddressUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput)
], AddressUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
AddressUpsertWithWhereUniqueWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AddressUpsertWithWhereUniqueWithoutUserInput);
exports.AddressUpsertWithWhereUniqueWithoutUserInput = AddressUpsertWithWhereUniqueWithoutUserInput;
