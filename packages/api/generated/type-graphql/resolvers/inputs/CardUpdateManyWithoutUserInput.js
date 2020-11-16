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
exports.CardUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const CardCreateWithoutUserInput_1 = require("../inputs/CardCreateWithoutUserInput");
const CardScalarWhereInput_1 = require("../inputs/CardScalarWhereInput");
const CardUpdateManyWithWhereNestedInput_1 = require("../inputs/CardUpdateManyWithWhereNestedInput");
const CardUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/CardUpdateWithWhereUniqueWithoutUserInput");
const CardUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/CardUpsertWithWhereUniqueWithoutUserInput");
const CardWhereUniqueInput_1 = require("../inputs/CardWhereUniqueInput");
let CardUpdateManyWithoutUserInput = class CardUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CardCreateWithoutUserInput_1.CardCreateWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardWhereUniqueInput_1.CardWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardWhereUniqueInput_1.CardWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardWhereUniqueInput_1.CardWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardWhereUniqueInput_1.CardWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardUpdateWithWhereUniqueWithoutUserInput_1.CardUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardUpdateManyWithWhereNestedInput_1.CardUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardScalarWhereInput_1.CardScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CardUpsertWithWhereUniqueWithoutUserInput_1.CardUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], CardUpdateManyWithoutUserInput.prototype, "upsert", void 0);
CardUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CardUpdateManyWithoutUserInput);
exports.CardUpdateManyWithoutUserInput = CardUpdateManyWithoutUserInput;
