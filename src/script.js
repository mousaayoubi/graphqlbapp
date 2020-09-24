const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	const newLink = await prisma.link.create({
		data: {
			description: 'Fullstack tutorial for GraphQL',
			url: 'www.howtographql.com',
		},
	});
	console.log(newLink);
};

main()
  .catch(e => {
	  throw e
  })
  .finally(async () => {
	  await prisma.$disconnect();
  });
