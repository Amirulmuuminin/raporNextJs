"use server";
import prisma from "@/db";

export async function getMuridByKelas(kelas: string) {
  return await prisma.murid.findMany({
    where: {
      kelas: kelas,
    },
  });
}

export async function editNamaMurid(id: string, namaArab: string) {
  await prisma.murid.update({
    where: {
      id: id,
    },
    data: {
      namaArab: namaArab,
    },
  });
}

export async function getMuridById(id: string) {
  return await prisma.murid.findUnique({
    where: {
      id,
    },
    include: {
      Kehadiran: true,
      Lughoh: true,
      MPU: true,
      Qiroah: true,
      Quran: true,
      Ulum: true,
    },
  });
}
