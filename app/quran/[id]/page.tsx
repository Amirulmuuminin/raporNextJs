import HafalanForm from "@/components/quran-form";
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
      <h1 className="text-center font-bold mt-5 underline mb-9">
        {murid?.namaIndo}
      </h1>
      <HafalanForm />
    </div>
  );
};

export default page;
