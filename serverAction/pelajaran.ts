"use server";
import prisma from "@/db";

// quran
export async function createQuran(
  id: string,
  maqraH: string,
  nilaiH: string,
  maqraT: string,
  nilaiT: string,
  catatan: string,
  miqdar: string,
  prediketH: string,
  prediketT: string
) {
  // todo: perbaiki format sebelum masuk db

  return await prisma.quran.upsert({
    where: {
      userId: id,
    },
    update: {
      maqraH,
      maqraT,
      nilaiH,
      nilaiT,
      prediketH,
      prediketT,
      catatan,
      miqdar,
    },
    create: {
      userId: id,
      maqraH,
      maqraT,
      nilaiH,
      nilaiT,
      prediketH,
      prediketT,
      catatan,
      miqdar,
    },
  });
}

export async function getQuranById(id: string) {
  return await prisma.quran.findUnique({
    where: {
      userId: id,
    },
  });
}

// lughoh
export async function createLughoh(id: string, nilai: string, catatan: string) {
  return await prisma.lughoh.upsert({
    where: {
      userId: id,
    },
    update: {
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

export async function getLughohById(id: string) {
  return await prisma.lughoh.findUnique({
    where: {
      userId: id,
    },
  });
}

// mpu
export async function createMPU(id: string, nilai: string, catatan: string) {
  return await prisma.mPU.upsert({
    where: {
      userId: id,
    },
    update: {
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

export async function getMPUById(id: string) {
  return await prisma.mPU.findUnique({
    where: {
      userId: id,
    },
  });
}

// qiroah
export async function createQiroah(id: string, nilai: string, catatan: string) {
  return await prisma.qiroah.upsert({
    where: {
      userId: id,
    },
    update: {
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

export async function getQiroahById(id: string) {
  return await prisma.qiroah.findUnique({
    where: {
      userId: id,
    },
  });
}

// kehadiran
export async function createKehadiran(
  id: string,
  izin: number,
  lainnya: number,
  sakit: number
) {
  return await prisma.kehadiran.upsert({
    where: {
      userId: id,
    },
    update: {
      izin: izin,
      lainnya: lainnya,
      sakit: sakit,
    },
    create: {
      userId: id,
      izin: izin,
      lainnya: lainnya,
      sakit: sakit,
    },
  });
}

export async function getKehadiranById(id: string) {
  return await prisma.kehadiran.findUnique({
    where: {
      userId: id,
    },
  });
}
