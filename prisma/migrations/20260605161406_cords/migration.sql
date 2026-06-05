/*
  Warnings:

  - Added the required column `alias` to the `cords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interaction_user` to the `cords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cords" ADD COLUMN     "alias" TEXT NOT NULL,
ADD COLUMN     "interaction_user" TEXT NOT NULL;
