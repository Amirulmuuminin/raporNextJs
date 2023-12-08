import { KelasTile } from "@/components/kelas-tile";
import { TambahKelas } from "@/components/tambah-kelas";
import prisma from "@/db";
import { insertAllMuridData } from "@/insertData/insertMuridData";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allKelas = await prisma.kelas.findMany();
  // await insertAllMuridData();

  return (
    <>
      <TambahKelas />
      <KelasTile allKelas={allKelas} />
    </>
  );
}
