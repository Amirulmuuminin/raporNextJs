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

interface TambahKelasProps {
  id?: string;
  arab?: string;
  wali?: string;
  indo?: string;
}

export const EditKelas: FC<TambahKelasProps> = ({ id, arab, indo, wali }) => {
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
          <MyForm arab={arab} id={id} indo={indo} wali={wali} />
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
