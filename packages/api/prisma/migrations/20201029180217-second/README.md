# Migration `20201029180217-second`

This migration has been generated at 10/29/2020, 10:02:17 PM.
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
"type" "ProductType"  NOT NULL ,
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
migration ..20201029180217-second
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,130 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+ 
+enum Role {
+  USER
+  ADMIN 
+}
+
+enum ProductType {
+  BOOK
+  BAGS
+  GROCERY
+  MEDICINE
+  CLOTH
+  CLOTHING
+  FURNITURE
+  FURNITURE_TWO
+  MAKEUP
+  BAKERY
+}
+
+model User {
+  id        String    @id @default(uuid())
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  email     String    @unique
+  name      String
+  role      Role     @default(USER)
+  image     String?   
+  password  String   
+  addresses Address[] 
+  contacts  Contact[] 
+  card      Card[]    
+}
+
+
+model Address {
+  id        String    @id @default(uuid())
+  type      String
+  title     String
+  location  String
+}
+
+model Contact {
+  id        String    @id @default(uuid())
+  type      String?
+  number     String?
+}
+
+model Card {
+  id              String    @id @default(uuid())
+  type            String
+  title           String
+  cardType        String
+  lastFourDigit   Int
+}
+
+
+
+model Meta {
+  id              String    @id @default(uuid())
+  publisher       String    
+  isbn            String
+  edition         String
+  country         String
+  languages       String[]
+  numberOfReader  String?
+  numberOfPage    String?
+  samplePDF       String?
+}
+
+model Social {
+  id              String    @id @default(uuid())
+  media           String    
+  profileLink     String?
+}
+
+model Author {
+  id              String    @id @default(uuid())
+  name            String
+  avatar          String?
+  bio             String?
+  email           String
+  website         String?
+  socials         Social[]
+}
+
+model Gallery {
+  id    String    @id @default(uuid())
+  url   String    
+}
+
+model Category {
+  id    String    @id @default(uuid())
+  title   String   
+  children  Category[]
+  type String
+  icon String?
+  slug String
+  itemCount Int?
+}
+
+model Product {
+  id        String    @id @default(uuid())
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  slug      String
+  title     String    
+  description      String?
+  unit      String    
+  image     String?  
+  gallery   Gallery[]
+  price  Int   
+  salePrice Int?
+  discountInPercent Int?
+  per_unit Int?
+  quantity Int?
+  views Int?
+  sales Int?
+  author  Author?
+  meta Meta?
+  type ProductType
+  categories  Category[] 
+}
```


