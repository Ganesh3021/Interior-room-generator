import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const User=pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl').notNull(),
    credits:integer('credits').default(3)   
})


export const AiGeneratedImage=pgTable('aiGenerated Image', {
    id:serial('id').primaryKey(),
    roomType: varchar('roomType').notNull(),
    designType: varchar('designType').notNull(),
    orgImage: varchar('orgImage').notNull(),
    aiImage: varchar('aiImage').notNull(),
    userEmail: varchar('userEmail')

})