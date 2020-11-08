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
exports.ContactUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const ContactCreateWithoutUserInput_1 = require("../inputs/ContactCreateWithoutUserInput");
const ContactScalarWhereInput_1 = require("../inputs/ContactScalarWhereInput");
const ContactUpdateManyWithWhereNestedInput_1 = require("../inputs/ContactUpdateManyWithWhereNestedInput");
const ContactUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ContactUpdateWithWhereUniqueWithoutUserInput");
const ContactUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ContactUpsertWithWhereUniqueWithoutUserInput");
const ContactWhereUniqueInput_1 = require("../inputs/ContactWhereUniqueInput");
let ContactUpdateManyWithoutUserInput = class ContactUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ContactCreateWithoutUserInput_1.ContactCreateWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereUniqueInput_1.ContactWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereUniqueInput_1.ContactWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereUniqueInput_1.ContactWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereUniqueInput_1.ContactWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactUpdateWithWhereUniqueWithoutUserInput_1.ContactUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactUpdateManyWithWhereNestedInput_1.ContactUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactScalarWhereInput_1.ContactScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactUpsertWithWhereUniqueWithoutUserInput_1.ContactUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactUpdateManyWithoutUserInput.prototype, "upsert", void 0);
ContactUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ContactUpdateManyWithoutUserInput);
exports.ContactUpdateManyWithoutUserInput = ContactUpdateManyWithoutUserInput;
