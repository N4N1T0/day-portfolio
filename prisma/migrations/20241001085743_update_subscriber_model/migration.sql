/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Subscriber` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subscriber" DROP COLUMN "updatedAt",
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
