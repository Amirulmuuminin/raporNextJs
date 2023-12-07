"use server";
import prisma from "@/db";

// quran
export async function createQuran(
  id: number,
  nilai: string,
  catatan: string,
  maqra: string,
  miqdar: string
) {
  return await prisma.quran.upsert({
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
      maqra: maqra,
      miqdar: miqdar,
    },
  });
}

export async function getQuranById(id: number) {
  return await prisma.quran.findUnique({
    where: {
      userId: id,
    },
  });
}

// lughoh
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

// mpu
export async function createMPU(id: number, nilai: string, catatan: string) {
  return await prisma.mPU.upsert({
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

export async function getMPUById(id: number) {
  return await prisma.mPU.findUnique({
    where: {
      userId: id,
    },
  });
}

// qiroah
export async function createQiroah(id: number, nilai: string, catatan: string) {
  return await prisma.qiroah.upsert({
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

export async function getQiroahById(id: number) {
  return await prisma.qiroah.findUnique({
    where: {
      userId: id,
    },
  });
}
