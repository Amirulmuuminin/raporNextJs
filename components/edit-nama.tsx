import { FC } from "react";
import {
  AlertDialogContent,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import FormNama from "./form-nama";

interface TambahKelasProps {
  id: number;
  namaArab?: string;
}

export const EditNama: FC<TambahKelasProps> = ({ id, namaArab }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-[#CFADE8] px-3 py-1 rounded-lg border border-[#1E1E1E] text-sm">
            EDIT NAMA (ARAB)
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="font-bold uppercase">
            Masukan Nama (Arab)
          </AlertDialogHeader>
          <FormNama namaArab={namaArab} id={id} />
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
