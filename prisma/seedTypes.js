

const { PrismaClient } = require('@prisma/client');
const specifications = require('../assets/Size-Pitch-Length_Table.json');
const prisma = new PrismaClient();

async function main() {
    // Assuming you have a default product to attach types to
    // You'll need to modify this based on your needs
    const product = await prisma.product.findFirst({
        where: {
            name: 'Thread Socket'
        }
    });

    if (!product) {
        console.error('No product found to attach types to');
        return;
    }

    // Create product types
    for (const type of specifications) {
        await prisma.productType.create({
            data: {
                type,
                productId: product.id
            }
        });
    }

    console.log('Seed completed successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });