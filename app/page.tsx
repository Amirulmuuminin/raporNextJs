import { KelasTile } from "@/components/kelas-tile";
import { TambahKelas } from "@/components/tambah-kelas";
import prisma from "@/db";
import { insertAllMuridData } from "@/insertData/insertMuridData";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allKelas = await prisma.kelas.findMany();
  // console.log(allKelas);
  // await insertAllMuridData();

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-10">
        <TambahKelas />
      </div>
      <KelasTile allKelas={allKelas} />
    </div>
  );
}
