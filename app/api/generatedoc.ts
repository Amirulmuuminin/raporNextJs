// PizZip is required because docx/pptx/xlsx files are all zipped files, and
// the PizZip library allows us to load the file in memory
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

import fs from "fs";
import path from "path";

import { getMuridById } from "@/serverAction/murid";
import { getKelasByIndoName } from "@/serverAction/kelas";

export async function generate(id: string) {
  // gaining data from prisma
  const murid = await getMuridById(id);
  const kelas = await getKelasByIndoName(murid?.kelas!);

  const kelasLima =
    kelas?.arab == "الزبير بن العوام" || "طلحة بن عبيد الله"
      ? `الخامس/${kelas?.arab}`
      : undefined;

  const kelasSatu =
    kelas?.arab == "عبد الله بن مسعود" ? `الأول/${kelas.arab}` : undefined;
  // filter for special kelas muadz
  if (murid?.kelas !== "Muadz") {
    const getNilai = (nilai: number) => {
      if (nilai >= 90) return "ممتاز";
      if (nilai < 90 && nilai >= 80) return "جيد جدا";
      if (nilai < 80 && nilai >= 70) return "جيد";
      if (nilai < 70 && nilai >= 60) return "مقبول";
    };

    // Load the docx file as binary content

    const content = fs.readFileSync(
      // error disini lamaa. ./app/api
      path.resolve("./app/api", "input.docx"),
      "binary"
    );

    // Unzip the content of the file
    const zip = new PizZip(content);

    // This will parse the template, and will throw an error if the template is
    // invalid, for example, if the template is "{user" (no closing tag)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
    doc.render({
      tanggal_rapor: "17 Desember 2023",
      jumlah_sakit: murid?.Kehadiran?.sakit ?? "-",
      jumlah_izin: murid?.Kehadiran?.izin ?? "-",
      jumlah_lainnya: murid?.Kehadiran?.lainnya ?? "-",
      wali_kelas: kelas?.wali ?? "belum diinput",
      nama: murid?.namaArab ?? "belum diinput",
      no_induk: murid?.induk ?? "belum diinput",
      kelas: kelasSatu ?? kelasLima ?? kelas?.arab ?? "belum diinput",
      maqraH:
        murid?.Quran?.maqraH.replace(/[()]/g, "").replace(/[undefined]/g, "") ??
        "",
      maqraT:
        murid?.Quran?.maqraT.replace(/[()]/g, "").replace(/[undefined]/g, "") ??
        "",
      prediketH: murid?.Quran?.prediketH ?? "",
      prediketT: murid?.Quran?.prediketT ?? "",
      nilaiH: murid?.Quran?.nilaiH ?? "",
      nilaiT: murid?.Quran?.nilaiT ?? "",
      taqdirL: murid?.Lughoh?.nilai ?? "",
      taqdirM: murid?.MPU?.nilai ?? "",
      taqdirQ: murid?.Qiroah?.nilai ?? "",
      miqdar: murid?.Quran?.miqdar ?? "",
      catatanQ: murid?.Quran?.catatan ?? "",
      catatanL: murid?.Lughoh?.catatan ?? "",
      catatanM: murid?.MPU?.catatan ?? "",
      catatanQi: murid?.Qiroah?.catatan ?? "",
      nilaiL: murid?.Lughoh?.nilai
        ? getNilai(parseInt(murid?.Lughoh?.nilai!))
        : "",
      nilaiM: murid?.MPU?.nilai ? getNilai(parseInt(murid?.MPU?.nilai!)) : "",
      nilaiQ: murid?.Qiroah?.nilai
        ? getNilai(parseInt(murid?.Qiroah?.nilai!))
        : "",
    });

    // Get the zip document and generate it as a nodebuffer
    const buf = doc.getZip().generate({
      type: "nodebuffer",
      // compression: DEFLATE adds a compression step.
      // For a 50MB output document, expect 500ms additional CPU time
      compression: "DEFLATE",
    });

    return buf;
  }
}
