"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Banknote, CalendarDays, MessageSquare } from "lucide-react";
import type { BookingFormData } from "../types";

interface Props {
  formData: BookingFormData;
  updateFormData: (updates: Partial<BookingFormData>) => void;
  errors: Record<string, string>;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-red-500 mt-1">{message}</p>;
}

export default function StepTimelineBudget({
  formData,
  updateFormData,
  errors,
}: Props) {
  return (
    <div className="space-y-5">
      {/* Budget */}
      <div className="space-y-2">
        <Label htmlFor="budget" className="text-primary/80">
          <Banknote className="size-3.5 text-secondary" />
          Target Budget per Pcs
          <span className="text-on-surface-variant/50 text-xs font-normal ml-1">
            (Opsional)
          </span>
        </Label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-on-surface-variant/60">
            Rp
          </span>
          <Input
            id="budget"
            type="text"
            inputMode="numeric"
            placeholder="cth: 85.000"
            value={formData.budgetPerPcs}
            onChange={(e) => updateFormData({ budgetPerPcs: e.target.value })}
            aria-invalid={!!errors.budgetPerPcs}
            className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors pl-10"
          />
        </div>
        <p className="text-xs text-on-surface-variant/70">
          Informasi ini membantu kami menyesuaikan material dan metode produksi
          dengan budget Anda.
        </p>
        <FieldError message={errors.budgetPerPcs} />
      </div>

      {/* Deadline */}
      <div className="space-y-2">
        <Label htmlFor="deadline" className="text-primary/80">
          <CalendarDays className="size-3.5 text-secondary" />
          Target Waktu Selesai (Deadline)
          <span className="text-secondary">*</span>
        </Label>
        <Input
          id="deadline"
          type="date"
          value={formData.deadline}
          onChange={(e) => updateFormData({ deadline: e.target.value })}
          aria-invalid={!!errors.deadline}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <p className="text-xs text-on-surface-variant/70">
          Kapan barang ini harus sudah siap dipakai? Estimasi produksi 14-30
          hari kerja.
        </p>
        <FieldError message={errors.deadline} />
      </div>

      {/* Catatan Tambahan */}
      <div className="space-y-2">
        <Label htmlFor="notes" className="text-primary/80">
          <MessageSquare className="size-3.5 text-secondary" />
          Catatan Tambahan
          <span className="text-on-surface-variant/50 text-xs font-normal ml-1">
            (Opsional)
          </span>
        </Label>
        <Textarea
          id="notes"
          placeholder="Ada permintaan khusus? Misal: jahitan rantai, label khusus, packaging tertentu, dll."
          value={formData.additionalNotes}
          onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
          className="min-h-28 rounded-xl bg-white/50 focus:bg-white transition-colors resize-none"
        />
      </div>

      {/* Info Box */}
      <div className="flex gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/15">
        <div className="shrink-0 mt-0.5">
          <div className="p-1.5 rounded-lg bg-secondary/15">
            <CalendarDays className="size-4 text-secondary" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-primary/80">
            Apa yang terjadi setelah submit?
          </p>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Tim kami akan review pesanan Anda dan mengirimkan quotation resmi via
            email dalam 1×24 jam. Proses produksi dimulai setelah DP diterima.
          </p>
        </div>
      </div>
    </div>
  );
}
