import { FC } from "react";
import { AddNilai } from "./add-nilai";
import {
  getLughohById,
  getMPUById,
  getQiroahById,
  getQuranById,
} from "@/serverAction/pelajaran";
import Link from "next/link";

interface PelajaranTileProps {
  id: string;
  pelajaran: "lughoh" | "mpu" | "qiroah" | "quran";
}

export const PelajaranTile: FC<PelajaranTileProps> = async ({
  id,
  pelajaran,
}) => {
  const getActiveLesson = async () => {
    if (pelajaran == "lughoh") return await getLughohById(id);
    if (pelajaran == "mpu") return await getMPUById(id);
    if (pelajaran == "qiroah") return await getQiroahById(id);
  };

  const quran = await getQuranById(id);

  const active = await getActiveLesson();

  return (
    <div className="mt-6 bg-[#ABE5BC] h-32 w-full rounded-xl border border-[#1E1E1E] relative">
      <div className="uppercase mt-2 ml-2 w-fit text-[#1E1E1E] font-semibold border border-[#1E1E1E] text-start bg-[#FFD787] py-1 px-2 rounded-lg">
        {pelajaran}
      </div>

      <div className="mt-2 ml-2 h-28 w-64 text-[#1E1E1E] border border-[#1E1E1E] text-start bg-[#FFA89A] py-1 px-2 rounded-lg text-[10px]">
        <div className="mt-1 ml-1 w-fit text-[#1E1E1E] border border-[#1E1E1E] text-start bg-[#FFFAF0] py-1 px-2 rounded-lg shadow-[2px_2px_#1E1E1E] line-clamp-1">
          {pelajaran !== "quran"
            ? `Nilai: ${active?.nilai ?? "Belum Tersedia"}`
            : quran?.maqraH ?? quran?.maqraT
            ? "Data Exist"
            : "Belum Tersedia"}
        </div>
        <div className="ml-1 mt-2 line-clamp-4">
          Catatan: <br />{" "}
          {pelajaran == "quran"
            ? quran?.catatan
            : active?.catatan ?? "Belum Tersedia"}
        </div>
      </div>

      {/* button */}
      <div className="absolute right-0 -bottom-[16px]">
        {pelajaran !== "quran" && (
          <AddNilai
            id={id}
            pelajaran={pelajaran}
            catatan={active?.catatan}
            nilai={active?.nilai}
          />
        )}
        {pelajaran == "quran" && (
          <Link href={`/quran/${id}`}>
            <div className="bg-[#CFADE8] px-3 py-1 rounded-lg border border-[#1E1E1E]">
              EDIT
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
