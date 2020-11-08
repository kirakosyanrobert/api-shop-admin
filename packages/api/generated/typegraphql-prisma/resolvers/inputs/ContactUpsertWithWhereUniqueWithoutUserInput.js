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
exports.ContactUpsertWithWhereUniqueWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const ContactCreateWithoutUserInput_1 = require("../inputs/ContactCreateWithoutUserInput");
const ContactUpdateWithoutUserDataInput_1 = require("../inputs/ContactUpdateWithoutUserDataInput");
const ContactWhereUniqueInput_1 = require("../inputs/ContactWhereUniqueInput");
let ContactUpsertWithWhereUniqueWithoutUserInput = class ContactUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => ContactWhereUniqueInput_1.ContactWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ContactWhereUniqueInput_1.ContactWhereUniqueInput)
], ContactUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactUpdateWithoutUserDataInput_1.ContactUpdateWithoutUserDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ContactUpdateWithoutUserDataInput_1.ContactUpdateWithoutUserDataInput)
], ContactUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactCreateWithoutUserInput_1.ContactCreateWithoutUserInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", ContactCreateWithoutUserInput_1.ContactCreateWithoutUserInput)
], ContactUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ContactUpsertWithWhereUniqueWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ContactUpsertWithWhereUniqueWithoutUserInput);
exports.ContactUpsertWithWhereUniqueWithoutUserInput = ContactUpsertWithWhereUniqueWithoutUserInput;
