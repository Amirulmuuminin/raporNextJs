"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface downloadProps {
  id: string;
}

const download = (id: string, router: AppRouterInstance) => {
  router.push(`/api?id=${id}`);
};

export const Download: FC<downloadProps> = ({ id }) => {
  const router = useRouter();
  return (
    <div
      className="border border-[#1E1E1E] shadow-[2px_2px_#1E1E1E] bg-[#FFFAF0] uppercase rounded-lg px-3 py-2 fixed bottom-4 right-4 font-bold"
      onClick={() => {
        download(id, router);
      }}
    >
      download
    </div>
  );
};
