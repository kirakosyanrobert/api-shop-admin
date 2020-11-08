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
exports.UserContactsArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ContactOrderByInput_1 = require("../../../inputs/ContactOrderByInput");
const ContactWhereInput_1 = require("../../../inputs/ContactWhereInput");
const ContactWhereUniqueInput_1 = require("../../../inputs/ContactWhereUniqueInput");
const ContactDistinctFieldEnum_1 = require("../../../../enums/ContactDistinctFieldEnum");
let UserContactsArgs = class UserContactsArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ContactWhereInput_1.ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput_1.ContactWhereInput)
], UserContactsArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactOrderByInput_1.ContactOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], UserContactsArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => ContactWhereUniqueInput_1.ContactWhereUniqueInput, { nullable: true }),
    __metadata("design:type", ContactWhereUniqueInput_1.ContactWhereUniqueInput)
], UserContactsArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], UserContactsArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], UserContactsArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ContactDistinctFieldEnum_1.ContactDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], UserContactsArgs.prototype, "distinct", void 0);
UserContactsArgs = __decorate([
    TypeGraphQL.ArgsType()
], UserContactsArgs);
exports.UserContactsArgs = UserContactsArgs;
