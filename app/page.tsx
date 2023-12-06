import { KelasTile } from "@/components/kelas-tile";
import { TambahKelas } from "@/components/tambah-kelas";
import prisma from "@/db";

export default async function Home() {
  const allKelas = await prisma.kelas.findMany();

  return (
    <>
      <TambahKelas />
      <KelasTile allKelas={allKelas} />
    </>
  );
}
