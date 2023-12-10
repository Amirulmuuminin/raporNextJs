import { MuridTile } from "@/components/murid-tile";
import { getMuridByKelas } from "@/serverAction/murid";
import { FC } from "react";

interface pageProps {
  params: {
    namaKelas: string;
  };
}

const page: FC<pageProps> = async ({ params: { namaKelas } }) => {
  namaKelas = namaKelas.replace(/%20/g, " ");

  const allMurid = await getMuridByKelas(namaKelas);

  return (
    <div>
      <h2 className="font-extrabold uppercase text-center mt-5 text-xl">
        Halaqah {namaKelas}
      </h2>
      <MuridTile allMurid={allMurid} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default page;
