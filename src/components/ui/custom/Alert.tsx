"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type AlertDialogProps = {
  msg: string;
};

export default function AlertDialog({ msg }: AlertDialogProps) {
  const [open, setOpen] = useState(true); // Biar otomatis terbuka saat render

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Peringatan</DialogTitle>
        </DialogHeader>
        <div>{msg}</div>
      </DialogContent>
    </Dialog>
  );
}
