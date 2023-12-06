import { FC } from "react";
import { AddNilai } from "./add-nilai";
import { getLughohById } from "@/serverAction/lughoh";

interface LughohTileProps {
  id: number;
}

export const LughohTile: FC<LughohTileProps> = async ({ id }) => {
  const lughoh = await getLughohById(id);

  return (
    <div className="mt-6 bg-[#ABE5BC] h-32 w-full rounded-xl border border-[#1E1E1E] relative">
      <div className="uppercase mt-2 ml-2 w-fit text-[#1E1E1E] font-semibold border border-[#1E1E1E] text-start bg-[#FFD787] py-1 px-2 rounded-lg">
        lughoh
      </div>

      <div className="mt-2 ml-2 h-28 w-64 text-[#1E1E1E] border border-[#1E1E1E] text-start bg-[#FFA89A] py-1 px-2 rounded-lg text-[10px]">
        <div className="mt-1 ml-1 w-fit text-[#1E1E1E] border border-[#1E1E1E] text-start bg-[#FFFAF0] py-1 px-2 rounded-lg shadow-[2px_2px_#1E1E1E]">
          NILAI: {lughoh?.nilai ?? "Belum Tersedia"}
        </div>
        <div className="ml-1 mt-2">
          Catatan: <br /> {lughoh?.catatan ?? "Belum Tersedia"}
        </div>
      </div>

      {/* button */}
      <div className="absolute right-0 -bottom-[16px]">
        <AddNilai id={id} pelajaran={"lughoh"} />
      </div>
    </div>
  );
};
