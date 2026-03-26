"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Hash, TableProperties } from "lucide-react";
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

const MOQ_OPTIONS = [
  "24 - 50 pcs",
  "50 - 100 pcs",
  "100 - 300 pcs",
  "300 - 500 pcs",
  "500 - 1000 pcs",
  "1000+ pcs",
];

const SIZES = ["S", "M", "L", "XL", "XXL"] as const;
const CATEGORIES = ["pria", "wanita"] as const;

export default function StepQuantitySizing({
  formData,
  updateFormData,
  errors,
}: Props) {
  const handleSizeChange = (
    category: "pria" | "wanita",
    size: (typeof SIZES)[number],
    value: string
  ) => {
    const num = value === "" ? 0 : parseInt(value, 10);
    if (isNaN(num) || num < 0) return;

    updateFormData({
      sizeBreakdown: {
        ...formData.sizeBreakdown,
        [category]: {
          ...formData.sizeBreakdown[category],
          [size]: num,
        },
      },
    });
  };

  const getCategoryTotal = (category: "pria" | "wanita") => {
    return Object.values(formData.sizeBreakdown[category]).reduce(
      (sum, val) => sum + val,
      0
    );
  };

  const getGrandTotal = () => {
    return getCategoryTotal("pria") + getCategoryTotal("wanita");
  };

  return (
    <div className="space-y-6">
      {/* MOQ */}
      <div className="space-y-2">
        <Label className="text-primary/80">
          <Hash className="size-3.5 text-secondary" />
          Total Estimasi Produksi (MOQ)
          <span className="text-secondary">*</span>
        </Label>
        <Select
          value={formData.moqRange}
          onValueChange={(val) => { if (val) updateFormData({ moqRange: val }); }}
        >
          <SelectTrigger className="w-full h-11 rounded-xl bg-white/50 focus:bg-white transition-colors">
            <SelectValue placeholder="Pilih estimasi jumlah..." />
          </SelectTrigger>
          <SelectContent>
            {MOQ_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-on-surface-variant/70">
          Minimum order 24 pcs untuk semua jenis produk.
        </p>
        <FieldError message={errors.moqRange} />
      </div>

      {/* Size Breakdown Table */}
      <div className="space-y-3">
        <Label className="text-primary/80">
          <TableProperties className="size-3.5 text-secondary" />
          Rincian Size Breakdown
          <span className="text-secondary">*</span>
        </Label>
        <p className="text-xs text-on-surface-variant/70">
          Masukkan jumlah pcs untuk setiap ukuran. Kosongkan jika tidak
          diperlukan.
        </p>

        <div className="overflow-x-auto rounded-xl border border-outline-variant/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-variant/50">
                <th className="text-left py-3 px-4 font-semibold text-primary/70 text-xs uppercase tracking-wider w-24">
                  Kategori
                </th>
                {SIZES.map((size) => (
                  <th
                    key={size}
                    className="text-center py-3 px-2 font-semibold text-primary/70 text-xs uppercase tracking-wider"
                  >
                    {size}
                  </th>
                ))}
                <th className="text-center py-3 px-3 font-semibold text-secondary text-xs uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map((category) => (
                <tr
                  key={category}
                  className="border-t border-outline-variant/30"
                >
                  <td className="py-3 px-4 font-medium text-primary/80 capitalize">
                    {category}
                  </td>
                  {SIZES.map((size) => (
                    <td key={size} className="py-2 px-1.5">
                      <input
                        type="number"
                        min="0"
                        value={
                          formData.sizeBreakdown[category][size] || ""
                        }
                        onChange={(e) =>
                          handleSizeChange(category, size, e.target.value)
                        }
                        placeholder="0"
                        className="w-full text-center h-10 rounded-lg border border-outline-variant/50 bg-white/50 focus:bg-white focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm font-medium"
                      />
                    </td>
                  ))}
                  <td className="py-3 px-3 text-center font-bold text-secondary">
                    {getCategoryTotal(category)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-outline-variant/50 bg-secondary/5">
                <td className="py-3 px-4 font-bold text-primary text-xs uppercase tracking-wider">
                  Grand Total
                </td>
                <td colSpan={5} />
                <td className="py-3 px-3 text-center font-bold text-secondary text-lg">
                  {getGrandTotal()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <FieldError message={errors.sizeBreakdown} />
      </div>
    </div>
  );
}
