import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '.prisma/client'
 
import { UserResolver } from './shop/services/user/user.resolver';
import { ProductResolver } from './shop/services/product/product.resolver';
import { PaymentResolver } from './shop/services/payment/payment.resolver';
import { OrderResolver } from './shop/services/order/order.resolver';
import { CouponResolver } from './shop/services/coupon/coupon.resolver';
import { CategoryResolver } from './shop/services/category/category.resolver';
import { VendorResolver } from './shop/services/vendors/vendors.resolver';
import { Context } from './types'; 

import { 
  UserRelationsResolver,
  ProductRelationsResolver, 
  CategoryRelationsResolver,
  AddressRelationsResolver, 
  ContactRelationsResolver,
  CardRelationsResolver,
  MetaRelationsResolver,
  SocialRelationsResolver,
  AuthorRelationsResolver,
  GalleryRelationsResolver
} from './generated/type-graphql';

const app: express.Application = express();
const path = '/shop/graphql';
const PORT = process.env.PORT || 4000;
 
const prisma = new PrismaClient();

const relations = [
  UserRelationsResolver,
  AddressRelationsResolver,
  ProductRelationsResolver,
  CategoryRelationsResolver,
  ContactRelationsResolver,
  CardRelationsResolver,
  MetaRelationsResolver,
  SocialRelationsResolver,
  AuthorRelationsResolver,
  GalleryRelationsResolver
];

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProductResolver,
      ProductRelationsResolver,
      PaymentResolver,
      OrderResolver,
      CouponResolver,
      CategoryResolver,
      VendorResolver,
      ...relations
    ],
    validate: false
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: (): Context => ({ prisma }),
  });
  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main().catch(err => console.log(err));
