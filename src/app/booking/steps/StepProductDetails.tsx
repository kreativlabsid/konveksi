"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shirt, Palette, Droplets } from "lucide-react";
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

const GARMENT_TYPES = [
  "Kaos",
  "Kemeja",
  "Jaket",
  "Hoodie",
  "Celana",
  "Topi",
  "Custom / Lainnya",
];

const FABRIC_OPTIONS = [
  "Cotton Combed 20s",
  "Cotton Combed 24s",
  "Cotton Combed 30s",
  "Cotton CVC",
  "Fleece",
  "Taslan",
  "Drill",
  "Baby Terry",
  "Polyester",
  "Belum yakin, butuh saran",
];

export default function StepProductDetails({ formData, updateFormData, errors }: Props) {
  return (
    <div className="space-y-5">
      {/* Jenis Pakaian */}
      <div className="space-y-2">
        <Label className="text-primary/80">
          <Shirt className="size-3.5 text-secondary" />
          Jenis Pakaian yang Dibuat
          <span className="text-secondary">*</span>
        </Label>
        <Select
          value={formData.garmentType}
          onValueChange={(val) => { if (val) updateFormData({ garmentType: val }); }}
        >
          <SelectTrigger className="w-full h-11 rounded-xl bg-white/50 focus:bg-white transition-colors">
            <SelectValue placeholder="Pilih jenis pakaian..." />
          </SelectTrigger>
          <SelectContent>
            {GARMENT_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError message={errors.garmentType} />
      </div>

      {/* Bahan Kain */}
      <div className="space-y-2">
        <Label className="text-primary/80">
          <Droplets className="size-3.5 text-secondary" />
          Preferensi Bahan Kain
          <span className="text-secondary">*</span>
        </Label>
        <Select
          value={formData.fabricPreference}
          onValueChange={(val) => { if (val) updateFormData({ fabricPreference: val }); }}
        >
          <SelectTrigger className="w-full h-11 rounded-xl bg-white/50 focus:bg-white transition-colors">
            <SelectValue placeholder="Pilih bahan kain..." />
          </SelectTrigger>
          <SelectContent>
            {FABRIC_OPTIONS.map((fabric) => (
              <SelectItem key={fabric} value={fabric}>
                {fabric}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-on-surface-variant/70">
          Tidak yakin? Pilih &ldquo;Belum yakin, butuh saran&rdquo; dan tim kami
          akan merekomendasikan bahan terbaik.
        </p>
        <FieldError message={errors.fabricPreference} />
      </div>

      {/* Warna Utama */}
      <div className="space-y-2">
        <Label htmlFor="primaryColor" className="text-primary/80">
          <Palette className="size-3.5 text-secondary" />
          Warna Utama Produk
          <span className="text-secondary">*</span>
        </Label>
        <Input
          id="primaryColor"
          type="text"
          placeholder="cth: Navy Blue, Hitam, Maroon"
          value={formData.primaryColor}
          onChange={(e) => updateFormData({ primaryColor: e.target.value })}
          aria-invalid={!!errors.primaryColor}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <p className="text-xs text-on-surface-variant/70">
          Bisa lebih dari satu warna, pisahkan dengan koma.
        </p>
        <FieldError message={errors.primaryColor} />
      </div>
    </div>
  );
}
