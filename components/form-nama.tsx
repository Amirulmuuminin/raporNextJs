// MyForm.tsx
"use client";

import { editNamaMurid } from "@/serverAction/murid";
import { useState, ChangeEvent, FormEvent } from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface FormData {
  arab: string;
}

interface MyFormProps {
  id: string;
  namaArab?: string;
}

const FormNama: React.FC<MyFormProps> = ({ id, namaArab }) => {
  const [formData, setFormData] = useState<FormData>({
    arab: namaArab ?? "",
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

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editNamaMurid(id, formData.arab);
    toast({
      description: "nama berhasil diganti",
    });
    router.refresh();
    // Add your logic to handle the form data (e.g., send it to the server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Nama Murid (Arab)"
          className="mt-3 border px-3 py-2 rounded-lg w-full"
          type="text"
          id="arab"
          name="arab"
          value={formData.arab}
          onChange={handleChange}
        />
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

export default FormNama;
