"use server";
import prisma from "@/db";

export async function getMuridByKelas(kelas: string) {
  return await prisma.murid.findMany({
    where: {
      kelas: kelas,
    },
  });
}

export async function editNamaMurid(id: number, namaArab: string) {
  await prisma.murid.update({
    where: {
      id: id,
    },
    data: {
      namaArab: namaArab,
    },
  });
}

export async function getMuridById(id: number) {
  return await prisma.murid.findUnique({
    where: {
      id: id,
    },
  });
}
