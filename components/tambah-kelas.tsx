import { FC } from "react";
import {
  AlertDialogContent,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import MyForm from "./form-kelas";

interface TambahKelasProps {}

export const TambahKelas: FC<TambahKelasProps> = ({}) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="border border-[#1E1E1E] bg-[#ABE5BC] uppercase rounded-lg px-3 py-2 fixed bottom-4 right-4 font-bold">
            Tambah Kelas
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="font-bold">
            Lengkapi Data Kelas
          </AlertDialogHeader>
          <MyForm />
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
