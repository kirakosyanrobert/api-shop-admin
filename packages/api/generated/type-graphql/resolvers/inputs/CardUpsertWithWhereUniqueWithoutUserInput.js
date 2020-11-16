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
exports.CardUpsertWithWhereUniqueWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const CardCreateWithoutUserInput_1 = require("../inputs/CardCreateWithoutUserInput");
const CardUpdateWithoutUserDataInput_1 = require("../inputs/CardUpdateWithoutUserDataInput");
const CardWhereUniqueInput_1 = require("../inputs/CardWhereUniqueInput");
let CardUpsertWithWhereUniqueWithoutUserInput = class CardUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => CardWhereUniqueInput_1.CardWhereUniqueInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CardWhereUniqueInput_1.CardWhereUniqueInput)
], CardUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardUpdateWithoutUserDataInput_1.CardUpdateWithoutUserDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CardUpdateWithoutUserDataInput_1.CardUpdateWithoutUserDataInput)
], CardUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardCreateWithoutUserInput_1.CardCreateWithoutUserInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CardCreateWithoutUserInput_1.CardCreateWithoutUserInput)
], CardUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
CardUpsertWithWhereUniqueWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CardUpsertWithWhereUniqueWithoutUserInput);
exports.CardUpsertWithWhereUniqueWithoutUserInput = CardUpsertWithWhereUniqueWithoutUserInput;
