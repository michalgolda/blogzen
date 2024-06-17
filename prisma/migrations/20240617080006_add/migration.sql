/*
  Warnings:

  - You are about to drop the column `resourceUrl` on the `Post` table. All the data in the column will be lost.
  - Added the required column `redirectCode` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "tldr" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "upvotesCount" INTEGER NOT NULL DEFAULT 0,
    "viewsCount" INTEGER NOT NULL DEFAULT 0,
    "sourceUrl" TEXT NOT NULL,
    "redirectCode" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Post" ("createdAt", "id", "thumbnailUrl", "title", "tldr", "updatedAt", "upvotesCount", "viewsCount") SELECT "createdAt", "id", "thumbnailUrl", "title", "tldr", "updatedAt", "upvotesCount", "viewsCount" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_redirectCode_key" ON "Post"("redirectCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
