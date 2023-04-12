import pkg from '@prisma/client';
import dotenv from "dotenv";
dotenv.config();

const { PrismaClient } = pkg;

//const configDatabase = {
  //connectionString: process.env.DATABASE_URL
//};

const prisma = new PrismaClient();
export default prisma;