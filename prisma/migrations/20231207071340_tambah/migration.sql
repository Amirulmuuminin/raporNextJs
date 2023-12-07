/*
  Warnings:

  - You are about to drop the column `maqra` on the `Quran` table. All the data in the column will be lost.
  - You are about to drop the column `nilai` on the `Quran` table. All the data in the column will be lost.
  - Added the required column `maqraH` to the `Quran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maqraT` to the `Quran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nilaiH` to the `Quran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nilaiT` to the `Quran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Quran` DROP COLUMN `maqra`,
    DROP COLUMN `nilai`,
    ADD COLUMN `maqraH` VARCHAR(191) NOT NULL,
    ADD COLUMN `maqraT` VARCHAR(191) NOT NULL,
    ADD COLUMN `nilaiH` VARCHAR(191) NOT NULL,
    ADD COLUMN `nilaiT` VARCHAR(191) NOT NULL;
