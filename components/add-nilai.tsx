import { FC } from "react";
import {
  AlertDialogContent,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import FormPelajaran from "./form-pelajaran";

interface TambahKelasProps {
  id: number;
  pelajaran: string;
  nilai?: string;
  catatan?: string;
}

export const AddNilai: FC<TambahKelasProps> = ({
  id,
  pelajaran,
  nilai,
  catatan,
}) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-[#CFADE8] px-3 py-1 rounded-lg border border-[#1E1E1E]">
            EDIT
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="font-bold">
            Lengkapi Data Kelas
          </AlertDialogHeader>
          <FormPelajaran
            id={id}
            pelajaran={pelajaran}
            catatan={catatan}
            nilai={nilai}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
