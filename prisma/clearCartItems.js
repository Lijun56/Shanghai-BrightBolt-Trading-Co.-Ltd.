const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Delete all cart items first due to foreign key constraints
    await prisma.cartItem.deleteMany({});

    // Then delete all carts
    await prisma.cart.deleteMany({});

    console.log('All cart items and carts have been deleted');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });