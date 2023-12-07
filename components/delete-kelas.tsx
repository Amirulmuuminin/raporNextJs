import { FC } from "react";
import {
  AlertDialogContent,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { deleteKelas } from "@/serverAction/kelas";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface TambahKelasProps {
  id: number;
  arab: string;
  wali?: string;
  indo?: string;
}

export const DeleteKelas: FC<TambahKelasProps> = ({ id, arab, indo, wali }) => {
  const { toast } = useToast();
  const router = useRouter();
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteKelas(id);
    toast({
      title: "Kelas berhasil dihapus",
      description: "Data murid tetap ada",
    });
    router.refresh();
    // Add your logic to handle the form data (e.g., send it to the server)
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-[#FFA89A] px-3 py-1 rounded-lg border border-[#1E1E1E]">
            DELETE
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah anda serius?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan menghapus kelas {arab}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
