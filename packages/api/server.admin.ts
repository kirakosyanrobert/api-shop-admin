import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client'

 

import ProductResolver from './admin/services/product/product.resolver';
import CategoryResolver from './admin/services/category/category.resolver';
import CustomerResolver from './admin/services/customer/customer.resolver';
import CouponResolver from './admin/services/coupon/coupon.resolver';
import OrderResolver from './admin/services/order/order.resolver';
import StaffResolver from './admin/services/staff/staff.resolver';
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
} from './generated/type-graphql'

const app: express.Application = express();
const path = '/admin/graphql';
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
      ProductResolver,
      CategoryResolver,
      CustomerResolver,
      OrderResolver,
      CouponResolver,
      StaffResolver,
      ...relations
    ],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: (): Context => ({ prisma }),
  }); 


  // CORS configuration
  const cors = {
    origin: 'http://localhost:3000',
    credentials: true
  }

  apolloServer.applyMiddleware({ app, path, cors });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main();
