"use server";
import { HafalanData, OtherData, TilawahData } from "@/components/quran-form";
import {
  createKehadiran,
  createQuran,
  getKehadiranById,
  getQuranById,
} from "./pelajaran";

export const quranDataPush = async (
  tilawahData: TilawahData[],
  hafalanData: HafalanData[],
  otherData: OtherData,
  id: string
) => {
  // tilawah
  const maqraT = tilawahData
    .map((item, i) => {
      return `${item.jumlahTilawah} (${item.juz})`;
    })
    .join("\n");
  const nilaiT = tilawahData
    .map((item) => {
      return item.nilai;
    })
    .join("\n");
  const prediketT = tilawahData
    .map((item) => {
      return item.prediket;
    })
    .join("\n");

  // hafalan
  const maqraH = hafalanData
    .map((item, i) => {
      return `${item.jumlahHafalan} (${item.juz})`;
    })
    .join("\n");
  const nilaiH = hafalanData
    .map((item) => {
      return item.nilai;
    })
    .join("\n");
  const prediketH = hafalanData
    .map((item) => {
      return item.prediket;
    })
    .join("\n");

  // miqdar dan kehadiran
  const miqdar = otherData.miqdar;

  const sakit = otherData.sakit;
  const izin = otherData.izin;
  const lainnya = otherData.lainnya;
  const catatan = otherData.catatan;

  const quran = await createQuran(
    id,
    maqraH,
    nilaiH,
    maqraT,
    nilaiT,
    catatan,
    miqdar,
    prediketH,
    prediketT
  );

  const kehadiran = await createKehadiran(
    id,
    parseInt(izin),
    parseInt(lainnya),
    parseInt(sakit)
  );
};

export const quranDataPull = async (id: string) => {
  const data = await getQuranById(id);

  if (!data) return;

  // fungsi untuk mengekstrak juz
  const extractNumbersInsideParentheses = (inputString: string) => {
    const regex = /\((\d+)\)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(inputString)) !== null) {
      matches.push(parseInt(match[1], 10));
    }

    return matches;
  };

  const juzT = extractNumbersInsideParentheses(data.maqraT);
  const maqraT = data?.maqraT.split("\n").map((item) => {
    return item.replace(/\([^)]+\)/, "").trim();
  });
  const nilaiT = data?.nilaiT.split("\n").map((item) => {
    return item;
  });
  const prediketT = data?.prediketT.split("\n").map((item) => {
    return item;
  });
  const tilawahData = maqraT
    ?.map((item, i) => {
      return {
        jumlahTilawah: item,
        juz: juzT[i]?.toString(),
        nilai: nilaiT[i],
        prediket: prediketT[i],
      };
    })
    .filter((item) => item.jumlahTilawah !== "()");

  if (tilawahData.length == 0)
    tilawahData.push({
      jumlahTilawah: "",
      juz: "",
      nilai: "",
      prediket: "",
    });

  // ekstrak hafalan
  const juzH = extractNumbersInsideParentheses(data.maqraH);
  const maqraH = data?.maqraH.split("\n").map((item) => {
    return item.replace(/\([^)]+\)/, "").trim();
  });

  const nilaiH = data?.nilaiH.split("\n").map((item) => {
    return item;
  });
  const prediketH = data?.prediketH.split("\n").map((item) => {
    return item;
  });
  const hafalanData = maqraH
    ?.map((item, i) => {
      return {
        jumlahHafalan: item,
        juz: juzH[i]?.toString(),
        nilai: nilaiH[i],
        prediket: prediketH[i],
      };
    })
    .filter((item) => item.jumlahHafalan !== "()");

  if (hafalanData.length == 0)
    hafalanData.push({
      jumlahHafalan: "",
      juz: "",
      nilai: "",
      prediket: "",
    });

  const kehadiran = await getKehadiranById(id);

  // extract other data
  const miqdar = data.miqdar;
  const catatan = data.catatan;
  const sakit = kehadiran?.sakit?.toString() ?? "";
  const izin = kehadiran?.izin?.toString() ?? "";
  const lainnya = kehadiran?.lainnya?.toString() ?? "";

  const otherData = { miqdar, catatan, sakit, izin, lainnya };

  return { tilawahData, hafalanData, otherData };
};
