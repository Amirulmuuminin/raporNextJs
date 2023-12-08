import HafalanForm from "@/components/quran-form";
import { getMuridById } from "@/serverAction/murid";
import { quranDataPull } from "@/serverAction/quranData";
import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = async ({ params: { id } }) => {
  const murid = await getMuridById(parseInt(id));
  const existingData = await quranDataPull(parseInt(id));

  return (
    <div>
      <h1 className="text-center font-bold mt-5 underline mb-9">
        {murid?.namaIndo}
      </h1>
      <HafalanForm id={parseInt(id)} existingData={existingData} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default page;
