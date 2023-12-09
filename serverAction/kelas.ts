"use server";
import prisma from "@/db";

export async function addKelas(formData: any) {
  await prisma.kelas.create({
    data: formData,
  });
}

export async function getKelasByName(name: string) {
  return await prisma.kelas.findUnique({
    where: {
      arab: name,
    },
  });
}

export async function getKelasByIndoName(name: string) {
  return await prisma.kelas.findUnique({
    where: {
      indo: name,
    },
  });
}

export async function editKelas(formData: any, id: string) {
  await prisma.kelas.update({
    where: {
      id: id,
    },
    data: formData,
  });
}

export async function deleteKelas(id: string) {
  await prisma.kelas.delete({
    where: {
      id: id,
    },
  });
}
