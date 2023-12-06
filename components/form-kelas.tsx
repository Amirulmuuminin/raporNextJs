// MyForm.tsx
"use client";

import { addKelas, editKelas } from "@/serverAction/kelas";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  arab: string;
  indo: string;
  wali: string;
}

interface MyFormProps {
  id?: number;
  arab?: string;
  wali?: string;
  indo?: string;
}

const FormKelas: React.FC<MyFormProps> = ({ id, arab, wali, indo }) => {
  const uniqueNames = [
    "Abdullah",
    "Aisyah",
    "Fathimah",
    "Khadijah",
    "Ubay",
    "Utsman",
    "Abu Bakr",
    "Shafiyyah",
    "Umar",
    "Zainab",
    "zainab",
    "Ali",
    "Ruqayyah",
    "Sa'ad",
    "Ummu Kultsum",
    "Maimunah",
    "Maryam",
    "Thalhah",
    "Zubair",
    "Asma'",
    "Muadz",
    "Khansa'",
    "Mush'ab",
    "Khalid",
    "Ummu Salamah",
    "Bilal",
    "Sarah",
  ];

  const [formData, setFormData] = useState<FormData>({
    arab: arab ?? "",
    indo: indo ?? "",
    wali: wali ?? "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    id ? editKelas(formData, id) : addKelas(formData);
    console.log("Form data submitted:", formData);
    // Add your logic to handle the form data (e.g., send it to the server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Nama Kelas (Arab)"
          className="mt-3 border px-3 py-2 rounded-lg w-full"
          type="text"
          id="arab"
          name="arab"
          value={formData.arab}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="mt-3 border px-3 py-2 rounded-lg w-full"
          type="text"
          id="wali"
          name="wali"
          placeholder="Nama Musyrif (Arab)"
          value={formData.wali}
          onChange={handleChange}
        />
      </div>
      <div>
        <select
          className="mt-3 border px-3 py-2 rounded-lg"
          id="indo"
          name="indo"
          value={formData.indo}
          onChange={handleChange}
        >
          <option value="">Pilih Kelas</option>
          {uniqueNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-5 border px-3 py-2 rounded-lg w-full bg-blue-700 text-white font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default FormKelas;
