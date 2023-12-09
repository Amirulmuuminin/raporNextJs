import { Download } from "@/components/download";
import { PelajaranTile } from "@/components/pelajaran-tile";
import { getMuridById } from "@/serverAction/murid";
import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = async ({ params: { id } }) => {
  const murid = await getMuridById(id);
  return (
    <div className="pb-9">
      <h1 className="text-center font-bold mt-5 underline">
        {murid?.namaIndo}
      </h1>

      {/* tiles */}
      <div className="flex flex-col gap-9">
        <PelajaranTile id={id} pelajaran="quran" />
        <PelajaranTile id={id} pelajaran="lughoh" />
        <PelajaranTile id={id} pelajaran="mpu" />
        <PelajaranTile id={id} pelajaran="qiroah" />
      </div>

      <Download id={id} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default page;
