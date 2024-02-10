// const express = require("express");
// const app = express();
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();


// export default async function handler(req, res) {
//   const prisma = new PrismaClient();

//   try {
//     const products = await prisma.product.findMany(); // Adjust model and query accordingly
    
//     res.json(products);
//   } catch (error) {
//     console.error('Error retrieving products:', error);

//     // res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// }