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
exports.CardUpdateManyWithWhereNestedInput = void 0;
const TypeGraphQL = require("type-graphql");
const CardScalarWhereInput_1 = require("../inputs/CardScalarWhereInput");
const CardUpdateManyDataInput_1 = require("../inputs/CardUpdateManyDataInput");
let CardUpdateManyWithWhereNestedInput = class CardUpdateManyWithWhereNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => CardScalarWhereInput_1.CardScalarWhereInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CardScalarWhereInput_1.CardScalarWhereInput)
], CardUpdateManyWithWhereNestedInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => CardUpdateManyDataInput_1.CardUpdateManyDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", CardUpdateManyDataInput_1.CardUpdateManyDataInput)
], CardUpdateManyWithWhereNestedInput.prototype, "data", void 0);
CardUpdateManyWithWhereNestedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], CardUpdateManyWithWhereNestedInput);
exports.CardUpdateManyWithWhereNestedInput = CardUpdateManyWithWhereNestedInput;
