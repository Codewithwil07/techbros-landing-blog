"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import  Button from "@/components/ui/custom/Button";

interface BlogDialogProps {
  open: boolean;
  message: string;
  onClose: () => void;
  onOk: () => void;
}

export default function BlogDialog({ open, message, onClose, onOk }: BlogDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Konfirmasi</DialogTitle>
        </DialogHeader>
        <div className="text-sm">{message}</div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button onClick={onOk}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
