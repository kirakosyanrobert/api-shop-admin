# Migration `20201029183000-thrid`

This migration has been generated at 10/29/2020, 10:30:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN')

CREATE TYPE "public"."ProductType" AS ENUM ('BOOK', 'BAGS', 'GROCERY', 'MEDICINE', 'CLOTH', 'CLOTHING', 'FURNITURE', 'FURNITURE_TWO', 'MAKEUP', 'BAKERY')

CREATE TABLE "public"."User" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"email" text   NOT NULL ,
"name" text   NOT NULL ,
"role" "Role"  NOT NULL DEFAULT E'USER',
"image" text   ,
"password" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Address" (
"id" text   NOT NULL ,
"type" text   NOT NULL ,
"title" text   NOT NULL ,
"location" text   NOT NULL ,
"userId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Contact" (
"id" text   NOT NULL ,
"type" text   ,
"number" text   ,
"userId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Card" (
"id" text   NOT NULL ,
"type" text   NOT NULL ,
"title" text   NOT NULL ,
"cardType" text   NOT NULL ,
"lastFourDigit" integer   NOT NULL ,
"userId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Meta" (
"id" text   NOT NULL ,
"publisher" text   NOT NULL ,
"isbn" text   NOT NULL ,
"edition" text   NOT NULL ,
"country" text   NOT NULL ,
"languages" text []  ,
"numberOfReader" text   ,
"numberOfPage" text   ,
"samplePDF" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Social" (
"id" text   NOT NULL ,
"media" text   NOT NULL ,
"profileLink" text   ,
"authorId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Author" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
"avatar" text   ,
"bio" text   ,
"email" text   NOT NULL ,
"website" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Gallery" (
"id" text   NOT NULL ,
"url" text   NOT NULL ,
"productId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Category" (
"id" text   NOT NULL ,
"title" text   NOT NULL ,
"type" text   NOT NULL ,
"icon" text   ,
"slug" text   NOT NULL ,
"itemCount" integer   ,
"categoryId" text   ,
"productId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Product" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"slug" text   NOT NULL ,
"title" text   NOT NULL ,
"description" text   ,
"unit" text   NOT NULL ,
"image" text   ,
"price" integer   NOT NULL ,
"salePrice" integer   ,
"discountInPercent" integer   ,
"per_unit" integer   ,
"quantity" integer   ,
"views" integer   ,
"sales" integer   ,
"type" text   NOT NULL ,
"authorId" text   ,
"metaId" text   ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

ALTER TABLE "public"."Address" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Contact" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Card" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Social" ADD FOREIGN KEY("authorId")REFERENCES "public"."Author"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Gallery" ADD FOREIGN KEY("productId")REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Category" ADD FOREIGN KEY("categoryId")REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Category" ADD FOREIGN KEY("productId")REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Product" ADD FOREIGN KEY("authorId")REFERENCES "public"."Author"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Product" ADD FOREIGN KEY("metaId")REFERENCES "public"."Meta"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201029180217-second..20201029183000-thrid
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -12,9 +12,9 @@
   ADMIN 
 }
 enum ProductType {
-  BOOK
+  BOOK 
   BAGS
   GROCERY
   MEDICINE
   CLOTH
@@ -124,7 +124,7 @@
   views Int?
   sales Int?
   author  Author?
   meta Meta?
-  type ProductType
+  type String
   categories  Category[] 
 }
```


