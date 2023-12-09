"use client";

import { quranDataPush } from "@/serverAction/quranData";
import React, { useState, FormEvent, ChangeEvent, FC } from "react";
import { useToast } from "./ui/use-toast";

export interface HafalanData {
  jumlahHafalan: string;
  juz: string;
  nilai: string;
  prediket: string;
}

export interface TilawahData {
  jumlahTilawah: string;
  juz: string;
  nilai: string;
  prediket: string;
}

export interface OtherData {
  miqdar: string;
  sakit: string;
  izin: string;
  lainnya: string;
  catatan: string;
}

interface HafalanFornProps {
  id: string;
  existingData?: {
    tilawahData: {
      jumlahTilawah: string;
      juz: string;
      nilai: string;
      prediket: string;
    }[];
    hafalanData: {
      jumlahHafalan: string;
      juz: string;
      nilai: string;
      prediket: string;
    }[];
    otherData: {
      miqdar: string;
      sakit: string;
      izin: string;
      lainnya: string;
      catatan: string;
    };
  };
}

const HafalanForm: FC<HafalanFornProps> = ({ id, existingData }) => {
  // hafalan
  const [hafalanData, setHafalanData] = useState<HafalanData[]>(
    existingData?.hafalanData ?? [
      { jumlahHafalan: "", juz: "", nilai: "", prediket: "" },
    ]
  );

  const addRow = () => {
    setHafalanData([
      ...hafalanData,
      { jumlahHafalan: "", juz: "", nilai: "", prediket: "" },
    ]);
  };

  const handleInputChange = (
    index: number,
    field: keyof HafalanData,
    value: string
  ) => {
    const newData = [...hafalanData];
    newData[index][field] = value;
    setHafalanData(newData);
  };

  // tilawah
  const [tilawahData, setTilawahData] = useState<TilawahData[]>(
    existingData?.tilawahData ?? [
      { jumlahTilawah: "", juz: "", nilai: "", prediket: "" },
    ]
  );

  const addRowTilawah = () => {
    setTilawahData([
      ...tilawahData,
      { jumlahTilawah: "", juz: "", nilai: "", prediket: "" },
    ]);
  };

  const handleInputChangeTilawah = (
    index: number,
    field: keyof TilawahData,
    value: string
  ) => {
    const newData = [...tilawahData];
    newData[index][field] = value;
    setTilawahData(newData);
  };

  // otherData
  const [otherData, setOtherData] = useState<OtherData>(
    existingData?.otherData ?? {
      izin: "",
      lainnya: "",
      miqdar: "",
      sakit: "",
      catatan: "",
    }
  );

  // handlechange
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOtherData({
      ...otherData,
      [name]: value,
    });
  };

  // submit
  const { toast } = useToast();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    quranDataPush(tilawahData, hafalanData, otherData, id);
    toast({
      title: "Berhasil memperbarui data",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-bold">Hasil Ujian Tahfidz</p>
      {hafalanData.map((data, index) => (
        <div key={index} className="mt-3 flex justify-between">
          <select
            className="border border-[#1E1E1E]  rounded-lg px-2 py-2"
            value={data.nilai}
            onChange={(e) => handleInputChange(index, "nilai", e.target.value)}
          >
            <option value="">nilai</option>

            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
          </select>

          <select
            className="border border-[#1E1E1E]  rounded-lg px-2 py-2"
            value={data.prediket}
            onChange={(e) =>
              handleInputChange(index, "prediket", e.target.value)
            }
          >
            <option value="">Prediket</option>
            <option value="+ممتاز">+ممتاز</option>
            <option value="ممتاز">ممتاز</option>
            <option value="+جيد جدا">+جيد جدا</option>
            <option value="جيد جدا">جيد جدا</option>
            <option value="+جيد">+جيد</option>
            <option value="جيد">جيد</option>
            <option value="+مقبول">+مقبول</option>
            <option value="مقبول">مقبول</option>
          </select>
          <select
            className="border border-[#1E1E1E] rounded-lg px-2 py-2"
            value={data.juz}
            onChange={(e) => handleInputChange(index, "juz", e.target.value)}
          >
            <option value="">Juz</option>

            {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <select
            className="border border-[#1E1E1E] rounded-lg px-2 py-2"
            value={data.jumlahHafalan}
            onChange={(e) =>
              handleInputChange(index, "jumlahHafalan", e.target.value)
            }
          >
            <option value="">Maqra</option>
            <option value="الربع الأول">الربع الأول</option>
            <option value="الربع الثاني">الربع الثاني</option>
            <option value="النصف الأول">النصف الأول</option>
            <option value="الربع الثالث">الربع الثالث</option>
            <option value="الربع الرابع">الربع الرابع</option>
            <option value="النصف الثاني">النصف الثاني</option>
            <option value="جزء واحد">جزء واحد</option>
          </select>
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="w-full px-3 py-2 bg-[#ABE5BC] mt-2 border border-[#1E1E1E] rounded-lg"
      >
        <p>Tambah Hasil Ujian</p>
      </button>

      {/* tilawah */}
      <p className="font-bold mt-9 uppercase">Hasil Ujian Tilawah</p>
      {tilawahData.map((data, index) => (
        <div key={index} className="mt-3 flex justify-between">
          <select
            className="border border-[#1E1E1E]  rounded-lg px-2 py-2"
            value={data.nilai}
            onChange={(e) =>
              handleInputChangeTilawah(index, "nilai", e.target.value)
            }
          >
            <option value="">nilai</option>

            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
          </select>
          <select
            className="border border-[#1E1E1E]  rounded-lg px-2 py-2"
            value={data.prediket}
            onChange={(e) =>
              handleInputChangeTilawah(index, "prediket", e.target.value)
            }
          >
            <option value="">prediket</option>
            <option value="+ممتاز">+ممتاز</option>
            <option value="ممتاز">ممتاز</option>
            <option value="+جيد جدا">+جيد جدا</option>
            <option value="جيد جدا">جيد جدا</option>
            <option value="+جيد">+جيد</option>
            <option value="جيد">جيد</option>
            <option value="+مقبول">+مقبول</option>
            <option value="مقبول">مقبول</option>
          </select>
          <select
            className="border border-[#1E1E1E] rounded-lg px-2 py-2"
            value={data.juz}
            onChange={(e) =>
              handleInputChangeTilawah(index, "juz", e.target.value)
            }
          >
            <option value="">Juz</option>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <select
            className="border border-[#1E1E1E] rounded-lg px-2 py-2"
            value={data.jumlahTilawah}
            onChange={(e) =>
              handleInputChangeTilawah(index, "jumlahTilawah", e.target.value)
            }
          >
            <option value="">Maqra</option>
            <option value="الربع الأول">الربع الأول</option>
            <option value="الربع الثاني">الربع الثاني</option>
            <option value="النصف الأول">النصف الأول</option>
            <option value="الربع الثالث">الربع الثالث</option>
            <option value="الربع الرابع">الربع الرابع</option>
            <option value="النصف الثاني">النصف الثاني</option>
            <option value="جزء واحد">جزء واحد</option>
          </select>
        </div>
      ))}

      <button
        type="button"
        onClick={addRowTilawah}
        className="w-full px-3 py-2 bg-[#ABE5BC] mt-2 border border-[#1E1E1E] rounded-lg"
      >
        <p>Tambah Hasil Ujian</p>
      </button>

      {/* miqdar, sakit, lainnya hifdz */}
      <div>
        <p className="font-bold mt-9 uppercase">Miqdarul Hifdzi</p>
        <input
          placeholder="Miqdar Hifdz (B.arab)"
          className="mt-3 border px-3 py-2 rounded-lg w-full border-[#1e1e1e]"
          type="text"
          id="miqdar"
          name="miqdar"
          value={otherData.miqdar}
          onChange={handleChange}
        />

        <p className="font-bold mt-9 uppercase">Kehadiran</p>

        <div className="flex justify-between gap-2">
          <input
            placeholder="Sakit"
            className="mt-3 border px-3 py-2 rounded-lg w-full border-[#1e1e1e]"
            type="number"
            id="sakit"
            name="sakit"
            value={otherData.sakit}
            onChange={handleChange}
          />
          <input
            placeholder="Izin"
            className="mt-3 border px-3 py-2 rounded-lg w-full border-[#1e1e1e]"
            type="number"
            id="izin"
            name="izin"
            value={otherData.izin}
            onChange={handleChange}
          />
          <input
            placeholder="lainnya"
            className="mt-3 border px-3 py-2 rounded-lg w-full border-[#1e1e1e]"
            type="number"
            id="lainnya"
            name="lainnya"
            value={otherData.lainnya}
            onChange={handleChange}
          />
        </div>

        <textarea
          className="mt-3 border px-3 py-2 rounded-lg w-full border-[#1e1e1e]"
          name="catatan"
          id="catatan"
          cols={10}
          rows={10}
          value={otherData.catatan}
          placeholder="Tulis catatan"
          onChange={handleChange}
        ></textarea>
      </div>

      {/* sumbit button */}
      <button
        type="submit"
        className="mt-5 border px-3 py-2 rounded-lg w-full bg-blue-700 text-white font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default HafalanForm;
