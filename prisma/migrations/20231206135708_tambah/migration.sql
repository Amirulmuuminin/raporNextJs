-- CreateTable
CREATE TABLE `Qiroah` (
    `userId` INTEGER NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Qiroah` ADD CONSTRAINT `Qiroah_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Murid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
