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
exports.AddressUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressScalarWhereInput_1 = require("../inputs/AddressScalarWhereInput");
const AddressUpdateManyWithWhereNestedInput_1 = require("../inputs/AddressUpdateManyWithWhereNestedInput");
const AddressUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AddressUpdateWithWhereUniqueWithoutUserInput");
const AddressUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AddressUpsertWithWhereUniqueWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateManyWithoutUserInput = class AddressUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutUserInput_1.AddressUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereNestedInput_1.AddressUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressScalarWhereInput_1.AddressScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AddressUpsertWithWhereUniqueWithoutUserInput_1.AddressUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], AddressUpdateManyWithoutUserInput.prototype, "upsert", void 0);
AddressUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], AddressUpdateManyWithoutUserInput);
exports.AddressUpdateManyWithoutUserInput = AddressUpdateManyWithoutUserInput;
