import { FC } from "react";
import { EditNama } from "./edit-nama";
import Link from "next/link";

interface MuridTileProps {
  allMurid: {
    namaIndo: string;
    namaArab: string | null;
    kelas: string;
    id: number;
  }[];
}

export const MuridTile: FC<MuridTileProps> = ({ allMurid }) => {
  return (
    <div>
      {allMurid.map((item, i) => {
        return (
          <div
            key={i}
            className={`relative mt-8 w-full border border-[#1E1E1E] bg-[#ABE5BC] uppercase py-5 px-3 rounded-lg font-semibold text-sm ${
              item.namaArab ? "text-end" : ""
            }`}
          >
            <Link href={`/murid/${item.id}`}>
              <h2>{item.namaArab ?? item.namaIndo}</h2>
            </Link>

            {/* edit nama */}
            <div className="flex gap-2 absolute -bottom-[16px] right-0 text-[12px]">
              <EditNama id={item.id} namaArab={item.namaArab ?? undefined} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
