import { prisma } from "@@/prisma/client";

export default defineEventHandler(async () => await prisma.tag.findMany());
