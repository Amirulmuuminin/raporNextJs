"use client";
import { FC } from "react";
import { EditKelas } from "./edit-kelas";
import { DeleteKelas } from "./delete-kelas";
import Link from "next/link";

interface KelasTileProps {
  allKelas: {
    id: number;
    arab: string;
    wali: string;
    indo: string;
  }[];
}

export const KelasTile: FC<KelasTileProps> = ({ allKelas }) => {
  return (
    <div>
      {allKelas.map((item, i) => {
        return (
          <div
            key={i}
            className="mt-8 w-full border border-[#1E1E1E] bg-[#ABE5BC] uppercase py-2 px-3 rounded-lg font-bold text-end relative"
          >
            <Link href={`/kelas/${item.indo}`}>
              <h2>{item.arab}</h2>
              <p className="text-[10px] text-slate-500 font-normal">
                {item.wali}
              </p>
              <p className="text-[10px] text-[#1E1E1E] font-semibold border border-[#1E1E1E] text-start bg-[#FFD787] w-fit py-1 px-2 rounded-lg">
                HALAQAH {item.indo}
              </p>
            </Link>
            {/* edit delete */}
            <div className="flex gap-2 absolute -bottom-[16px] right-0 text-[12px]">
              <EditKelas
                arab={item.arab}
                id={item.id}
                indo={item.indo}
                wali={item.wali}
              />
              <DeleteKelas id={item.id} arab={item.arab} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
