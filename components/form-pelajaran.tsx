// MyForm.tsx
"use client";

import {
  createLughoh,
  createMPU,
  createQiroah,
} from "@/serverAction/pelajaran";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nilai: string;
  catatan: string;
}

interface MyFormProps {
  id: number;
  nilai?: string;
  catatan?: string;
  pelajaran: string;
}

const FormPelajaran: React.FC<MyFormProps> = ({
  id,
  nilai,
  catatan,
  pelajaran,
}) => {
  const [formData, setFormData] = useState<FormData>({
    nilai: nilai ?? "",
    catatan: catatan ?? "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pelajaran == "lughoh")
      createLughoh(id, formData.nilai, formData.catatan);
    if (pelajaran == "mpu") createMPU(id, formData.nilai, formData.catatan);
    if (pelajaran == "qiroah")
      createQiroah(id, formData.nilai, formData.catatan);

    console.log("Form data submitted:", formData);
    // Add your logic to handle the form data (e.g., send it to the server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Nilai"
          className="mt-3 border px-3 py-2 rounded-lg w-full"
          type="number"
          id="nilai"
          name="nilai"
          value={formData.nilai}
          onChange={handleChange}
        />
      </div>

      <div>
        <textarea
          className="mt-3 border px-3 py-2 rounded-lg w-full"
          name="catatan"
          id="catatan"
          cols={10}
          rows={10}
          value={formData.catatan}
          placeholder="Tulis catatan"
          onChange={handleChange}
        ></textarea>
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

export default FormPelajaran;
