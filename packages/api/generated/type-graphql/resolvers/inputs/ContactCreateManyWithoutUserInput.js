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
exports.ContactCreateManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const ContactCreateWithoutUserInput_1 = require("../inputs/ContactCreateWithoutUserInput");
const ContactWhereUniqueInput_1 = require("../inputs/ContactWhereUniqueInput");
let ContactCreateManyWithoutUserInput = class ContactCreateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ContactCreateWithoutUserInput_1.ContactCreateWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactCreateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactWhereUniqueInput_1.ContactWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], ContactCreateManyWithoutUserInput.prototype, "connect", void 0);
ContactCreateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ContactCreateManyWithoutUserInput);
exports.ContactCreateManyWithoutUserInput = ContactCreateManyWithoutUserInput;
