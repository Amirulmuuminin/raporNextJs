-- CreateTable
CREATE TABLE `Kelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `arab` VARCHAR(191) NOT NULL,
    `wali` VARCHAR(191) NOT NULL,
    `indo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Murid` (
    `namaIndo` VARCHAR(191) NOT NULL,
    `namaArab` VARCHAR(191) NOT NULL,
    `kelas` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kehadiran` (
    `userId` INTEGER NOT NULL,
    `sakit` INTEGER NULL,
    `izin` INTEGER NULL,
    `lainnya` INTEGER NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lughoh` (
    `userId` INTEGER NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MPU` (
    `userId` INTEGER NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ulum` (
    `userId` INTEGER NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quran` (
    `userId` INTEGER NOT NULL,
    `maqra` VARCHAR(191) NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `miqdar` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kehadiran` ADD CONSTRAINT `Kehadiran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Murid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lughoh` ADD CONSTRAINT `Lughoh_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Murid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MPU` ADD CONSTRAINT `MPU_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Murid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ulum` ADD CONSTRAINT `Ulum_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Murid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quran` ADD CONSTRAINT `Quran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Murid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
