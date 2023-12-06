"use server";
import prisma from "@/db";

export async function createLughoh(id: number, nilai: string, catatan: string) {
  return await prisma.lughoh.upsert({
    where: {
      userId: id,
    },
    update: {
      userId: id,
      nilai: nilai,
      catatan: catatan,
    },
    create: {
      userId: id,
      nilai: nilai,
      catatan: catatan,
    },
  });
}

export async function getLughohById(id: number) {
  return await prisma.lughoh.findUnique({
    where: {
      userId: id,
    },
  });
}
