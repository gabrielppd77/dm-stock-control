/*
  Warnings:

  - Added the required column `status` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "status",
ADD COLUMN     "status" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "StatusProduct";
