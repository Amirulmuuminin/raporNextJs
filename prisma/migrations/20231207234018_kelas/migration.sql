/*
  Warnings:

  - A unique constraint covering the columns `[indo]` on the table `Kelas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Kelas_indo_key` ON `Kelas`(`indo`);
