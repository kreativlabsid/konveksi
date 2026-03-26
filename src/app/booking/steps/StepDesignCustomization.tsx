"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stamp, Target, Upload, Link2, FileText, X } from "lucide-react";
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

const DECORATION_TYPES = [
  { id: "sablon-manual", label: "Sablon Manual" },
  { id: "sablon-dtf", label: "Sablon Digital (DTF)" },
  { id: "bordir", label: "Bordir Komputer" },
  { id: "woven-label", label: "Woven Label" },
];

const DECORATION_POINTS = [
  "1 Titik (Logo Dada)",
  "2 Titik (Dada & Punggung)",
  "3 Titik (Dada, Punggung & Lengan)",
  "4+ Titik (Full Custom)",
];

export default function StepDesignCustomization({
  formData,
  updateFormData,
  errors,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDecorationToggle = (id: string) => {
    const current = formData.decorationTypes;
    const updated = current.includes(id)
      ? current.filter((d) => d !== id)
      : [...current, id];
    updateFormData({ decorationTypes: updated });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData({ designFile: file, designFileName: file.name });
    }
  };

  const handleRemoveFile = () => {
    updateFormData({ designFile: null, designFileName: "" });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-6">
      {/* Jenis Aplikasi */}
      <div className="space-y-3">
        <Label className="text-primary/80">
          <Stamp className="size-3.5 text-secondary" />
          Jenis Aplikasi Label / Logo
          <span className="text-secondary">*</span>
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {DECORATION_TYPES.map((type) => {
            const isChecked = formData.decorationTypes.includes(type.id);
            return (
              <label
                key={type.id}
                className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                  isChecked
                    ? "border-secondary/40 bg-secondary/5 shadow-sm"
                    : "border-outline-variant/60 bg-white/50 hover:bg-white/80 hover:border-outline-variant"
                }`}
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => handleDecorationToggle(type.id)}
                />
                <span className="text-sm font-medium text-primary/80">
                  {type.label}
                </span>
              </label>
            );
          })}
        </div>
        <p className="text-xs text-on-surface-variant/70">
          Bisa pilih lebih dari satu.
        </p>
        <FieldError message={errors.decorationTypes} />
      </div>

      {/* Jumlah Titik */}
      <div className="space-y-2">
        <Label className="text-primary/80">
          <Target className="size-3.5 text-secondary" />
          Jumlah Titik Sablon / Bordir
          <span className="text-secondary">*</span>
        </Label>
        <Select
          value={formData.decorationPoints}
          onValueChange={(val) => { if (val) updateFormData({ decorationPoints: val }); }}
        >
          <SelectTrigger className="w-full h-11 rounded-xl bg-white/50 focus:bg-white transition-colors">
            <SelectValue placeholder="Pilih jumlah titik..." />
          </SelectTrigger>
          <SelectContent>
            {DECORATION_POINTS.map((point) => (
              <SelectItem key={point} value={point}>
                {point}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError message={errors.decorationPoints} />
      </div>

      {/* Upload File */}
      <div className="space-y-2">
        <Label className="text-primary/80">
          <Upload className="size-3.5 text-secondary" />
          Upload File Desain / Tech Pack
        </Label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.ai,.png,.jpg,.jpeg,.svg"
          onChange={handleFileChange}
          className="hidden"
        />
        {formData.designFileName ? (
          <div className="flex items-center gap-3 p-3.5 rounded-xl border border-secondary/30 bg-secondary/5">
            <FileText className="size-5 text-secondary shrink-0" />
            <span className="text-sm font-medium text-primary/80 truncate flex-1">
              {formData.designFileName}
            </span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="p-1 rounded-lg hover:bg-secondary/10 text-on-surface-variant transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex flex-col items-center gap-2 p-6 rounded-xl border-2 border-dashed border-outline-variant/60 bg-white/30 hover:bg-white/50 hover:border-secondary/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/15 transition-colors">
              <Upload className="size-5" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-primary/70">
                Klik untuk upload file
              </p>
              <p className="text-xs text-on-surface-variant/60 mt-0.5">
                Format: PDF, AI, PNG, JPG, SVG
              </p>
            </div>
          </button>
        )}
      </div>

      {/* Link Referensi */}
      <div className="space-y-2">
        <Label htmlFor="refLink" className="text-primary/80">
          <Link2 className="size-3.5 text-secondary" />
          Link Referensi Contoh Pakaian
          <span className="text-on-surface-variant/50 text-xs font-normal ml-1">
            (Opsional)
          </span>
        </Label>
        <Input
          id="refLink"
          type="url"
          placeholder="cth: https://instagram.com/p/xxx atau pinterest.com/pin/xxx"
          value={formData.referenceLink}
          onChange={(e) => updateFormData({ referenceLink: e.target.value })}
          aria-invalid={!!errors.referenceLink}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <p className="text-xs text-on-surface-variant/70">
          Share link dari Instagram, Pinterest, atau website lain untuk referensi
          desain.
        </p>
        <FieldError message={errors.referenceLink} />
      </div>
    </div>
  );
}
