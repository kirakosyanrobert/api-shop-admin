import { Resolver, Query, Arg, Int, Mutation, Ctx } from 'type-graphql';

import { User, UserCreateInput } from '../../../prisma/generated';
import { Context } from '../../../types';


@Resolver()
export class UserResolver {
  @Query(() => User)
  async me(@Arg('id') id: string, @Ctx() { prisma }: Context): Promise<User | null> {
    // as auth user. check from middleware.
    const user = await prisma.user.findOne({
      where: { id: id }
    })

    // if(user) {
    //   const newUser = await prisma.user.create({
    //     data: {
    //       name: 'Ivan Pushkin',
    //       email: 'pushkin@demo.com',
    //       password: '1234', 
    //       image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    //     }
    //   })
    // }

    console.log(id, 'user_id');
    return user;
  }

  @Mutation(() => User, { description: 'Update User' })
  async updateMe(
    @Arg('meInput') meInput: string, 
    @Ctx() { prisma }: Context
  ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(meInput, 'meInput');
    return users[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Address' })
  async updateAddress(
    @Arg('addressInput') addressInput: string,
    @Ctx() { prisma }: Context
  ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(addressInput, 'addressinput');
    return users[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Contact' })
  async updateContact(
    @Arg('contactInput') contactInput: string,
    @Ctx() { prisma }: Context
  ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(contactInput, 'contactinput');
    return users[0];
  }

  @Mutation(() => User, { description: 'Delete Address' })
  async deleteAddress(
    @Arg('addressId') addressId: string,
    @Ctx() { prisma }: Context
  ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(addressId, 'address_id');
    return users[0];
  }

  @Mutation(() => User, { description: 'Delete Contact' })
  async deleteContact(
    @Arg('contactId') contactId: string,
    @Ctx() { prisma }: Context
    ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(contactId, 'contact_id');
    return users[0];
  }

  @Mutation(() => User, { description: 'Add Payment Card' })
  async addPaymentCard(
    @Arg('cardInput') cardInput: string,
    @Ctx() { prisma }: Context
    ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(cardInput, 'cardInput');
    return users[0];
  }

  @Mutation(() => User, { description: 'Delete Payment Card' })
  async deletePaymentCard(
    @Arg('cardId') cardId: string,
    @Ctx() { prisma }: Context
  ): Promise<User | undefined> {
    const users = await prisma.user.findMany({
      include: {
        addresses: true,
        contacts: true,
        card: true,
      }
    })
    console.log(cardId, 'card_id');
    return users[0];
  }
}
