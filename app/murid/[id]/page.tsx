import { Download } from "@/components/download";
import { PelajaranTile } from "@/components/pelajaran-tile";
import { getMuridById } from "@/serverAction/murid";
import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const download = async (id: string) => {
  await fetch(`/api?id=${id}`);
};

const page: FC<pageProps> = async ({ params: { id } }) => {
  const murid = await getMuridById(parseInt(id));
  console.log(murid);
  return (
    <div className="pb-9">
      <h1 className="text-center font-bold mt-5 underline">
        {murid?.namaIndo}
      </h1>

      {/* tiles */}
      <div className="flex flex-col gap-9">
        <PelajaranTile id={parseInt(id)} pelajaran="quran" />
        <PelajaranTile id={parseInt(id)} pelajaran="lughoh" />
        <PelajaranTile id={parseInt(id)} pelajaran="mpu" />
        <PelajaranTile id={parseInt(id)} pelajaran="qiroah" />
      </div>

      <Download id={id} />
    </div>
  );
};

export default page;
