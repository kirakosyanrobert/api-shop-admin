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
exports.ContactListRelationFilter = void 0;
const TypeGraphQL = require("type-graphql");
const ContactWhereInput_1 = require("../inputs/ContactWhereInput");
let ContactListRelationFilter = class ContactListRelationFilter {
};
__decorate([
    TypeGraphQL.Field(_type => ContactWhereInput_1.ContactWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ContactWhereInput_1.ContactWhereInput)
], ContactListRelationFilter.prototype, "every", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactWhereInput_1.ContactWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ContactWhereInput_1.ContactWhereInput)
], ContactListRelationFilter.prototype, "some", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactWhereInput_1.ContactWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", ContactWhereInput_1.ContactWhereInput)
], ContactListRelationFilter.prototype, "none", void 0);
ContactListRelationFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], ContactListRelationFilter);
exports.ContactListRelationFilter = ContactListRelationFilter;
