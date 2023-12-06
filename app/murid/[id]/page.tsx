import { LughohTile } from "@/components/lughoh-tile";
import { getLughohById } from "@/serverAction/lughoh";
import { getMuridById } from "@/serverAction/murid";
import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = async ({ params: { id } }) => {
  const murid = await getMuridById(parseInt(id));

  return (
    <div>
      <h1 className="text-center font-bold mt-5 underline">
        {murid?.namaIndo}
      </h1>

      {/* tiles */}
      <LughohTile id={parseInt(id)} />
    </div>
  );
};

export default page;
