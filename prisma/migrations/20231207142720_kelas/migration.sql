/*
  Warnings:

  - A unique constraint covering the columns `[arab]` on the table `Kelas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Kelas_arab_key` ON `Kelas`(`arab`);
