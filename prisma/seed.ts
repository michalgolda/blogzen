import { prisma } from "./client";
import { faker } from "@faker-js/faker";

const DEFAULT_POSTS_COUNT = 25;
const DEFAULT_TAG_NAMES = [
  "javascript",
  "typescript",
  "react",
  "node",
  "graphql",
  "AI",
  "ML",
];

const getRandomTagName = () => {
  const index = faker.number.int({ min: 0, max: DEFAULT_TAG_NAMES.length - 1 });
  return DEFAULT_TAG_NAMES[index];
};

const clear = async () => {
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
};

const postSeed = async () => {
  const promises = [];
  for (let i = 0; i < DEFAULT_POSTS_COUNT; i++) {
    const firstTagName = getRandomTagName();
    const secondTagName = getRandomTagName();

    promises.push(
      prisma.post.create({
        data: {
          title: faker.lorem.sentence(),
          tldr: faker.lorem.paragraph(1),
          thumbnailUrl: "/thumbnail.webp",
          upvotesCount: faker.number.int({ min: 0, max: 9999 }),
          viewsCount: faker.number.int({ min: 0, max: 9999 }),
          resourceUrl: faker.internet.url(),
          tags: {
            connectOrCreate: [
              {
                where: {
                  name: firstTagName,
                },
                create: {
                  name: firstTagName,
                },
              },
              {
                where: {
                  name: secondTagName,
                },
                create: {
                  name: secondTagName,
                },
              },
            ],
          },
        },
      })
    );
  }

  await Promise.all(promises);
};

const main = async () => {
  await clear();
  await postSeed();
};

main().then(() => console.log("Database successfully seeded!"));
