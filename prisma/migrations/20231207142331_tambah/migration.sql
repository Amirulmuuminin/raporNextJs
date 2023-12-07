/*
  Warnings:

  - Added the required column `prediketH` to the `Quran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prediketT` to the `Quran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Quran` ADD COLUMN `prediketH` VARCHAR(191) NOT NULL,
    ADD COLUMN `prediketT` VARCHAR(191) NOT NULL;
