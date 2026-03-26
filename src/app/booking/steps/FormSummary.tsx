"use client";

import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Shirt,
  Droplets,
  Palette,
  Stamp,
  Target,
  FileText,
  Link2,
  Hash,
  TableProperties,
  Banknote,
  CalendarDays,
  MessageSquare,
  Pencil,
  CheckCircle2,
  Send,
} from "lucide-react";
import type { BookingFormData } from "../types";

interface Props {
  formData: BookingFormData;
  goToStep: (step: number) => void;
  isSubmitted: boolean;
}

const DECORATION_LABELS: Record<string, string> = {
  "sablon-manual": "Sablon Manual",
  "sablon-dtf": "Sablon Digital (DTF)",
  bordir: "Bordir Komputer",
  "woven-label": "Woven Label",
};

function SectionHeader({
  icon: Icon,
  title,
  step,
  onEdit,
  isSubmitted,
}: {
  icon: React.ElementType;
  title: string;
  step: number;
  onEdit: (step: number) => void;
  isSubmitted: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-secondary/10">
          <Icon className="size-3.5 text-secondary" />
        </div>
        <h3 className="font-heading text-sm font-semibold text-primary">
          {title}
        </h3>
      </div>
      {!isSubmitted && (
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="flex items-center gap-1 text-xs text-secondary hover:text-secondary/80 transition-colors font-medium"
        >
          <Pencil className="size-3" />
          Edit
        </button>
      )}
    </div>
  );
}

function DataRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2.5 py-1.5">
      <Icon className="size-3.5 text-on-surface-variant/50 mt-0.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-on-surface-variant/70">{label}</p>
        <p className="text-sm font-medium text-primary/80 break-words">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function FormSummary({ formData, goToStep, isSubmitted }: Props) {
  const grandTotal =
    Object.values(formData.sizeBreakdown.pria).reduce((s, v) => s + v, 0) +
    Object.values(formData.sizeBreakdown.wanita).reduce((s, v) => s + v, 0);

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
          <div className="relative p-4 rounded-full bg-green-500/10">
            <CheckCircle2 className="size-12 text-green-500" />
          </div>
        </div>
        <h3 className="font-heading text-xl font-bold text-primary mb-2">
          Pesanan Berhasil Dikirim! 🎉
        </h3>
        <p className="text-sm text-on-surface-variant max-w-sm">
          Terima kasih, <strong>{formData.fullName}</strong>! Tim kami akan
          mengirimkan quotation ke{" "}
          <strong className="text-secondary">{formData.email}</strong> dalam
          1×24 jam.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Kembali ke Beranda
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
          >
            <Send className="size-3.5" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-on-surface-variant">
        Periksa kembali semua detail pesanan Anda sebelum mengirim.
      </p>

      {/* Section 1: Client Info */}
      <div className="p-4 rounded-xl bg-surface-variant/30 border border-outline-variant/30">
        <SectionHeader
          icon={User}
          title="Informasi Klien"
          step={1}
          onEdit={goToStep}
          isSubmitted={isSubmitted}
        />
        <div className="space-y-0.5">
          <DataRow icon={User} label="Nama PIC" value={formData.fullName} />
          <DataRow
            icon={Building2}
            label="Brand / Perusahaan"
            value={formData.brandName}
          />
          <DataRow icon={Mail} label="Email" value={formData.email} />
          <DataRow icon={Phone} label="WhatsApp" value={formData.whatsapp} />
          <DataRow
            icon={MapPin}
            label="Alamat Pengiriman"
            value={formData.shippingAddress}
          />
        </div>
      </div>

      {/* Section 2: Product */}
      <div className="p-4 rounded-xl bg-surface-variant/30 border border-outline-variant/30">
        <SectionHeader
          icon={Shirt}
          title="Detail Produk"
          step={2}
          onEdit={goToStep}
          isSubmitted={isSubmitted}
        />
        <div className="space-y-0.5">
          <DataRow
            icon={Shirt}
            label="Jenis Pakaian"
            value={formData.garmentType}
          />
          <DataRow
            icon={Droplets}
            label="Bahan Kain"
            value={formData.fabricPreference}
          />
          <DataRow
            icon={Palette}
            label="Warna Utama"
            value={formData.primaryColor}
          />
        </div>
      </div>

      {/* Section 3: Design */}
      <div className="p-4 rounded-xl bg-surface-variant/30 border border-outline-variant/30">
        <SectionHeader
          icon={Stamp}
          title="Desain & Customisasi"
          step={3}
          onEdit={goToStep}
          isSubmitted={isSubmitted}
        />
        <div className="space-y-0.5">
          <DataRow
            icon={Stamp}
            label="Jenis Dekorasi"
            value={formData.decorationTypes
              .map((d) => DECORATION_LABELS[d] || d)
              .join(", ")}
          />
          <DataRow
            icon={Target}
            label="Titik Sablon/Bordir"
            value={formData.decorationPoints}
          />
          <DataRow
            icon={FileText}
            label="File Desain"
            value={formData.designFileName || "Belum diupload"}
          />
          <DataRow
            icon={Link2}
            label="Link Referensi"
            value={formData.referenceLink}
          />
        </div>
      </div>

      {/* Section 4: Quantity */}
      <div className="p-4 rounded-xl bg-surface-variant/30 border border-outline-variant/30">
        <SectionHeader
          icon={Hash}
          title="Kuantitas & Ukuran"
          step={4}
          onEdit={goToStep}
          isSubmitted={isSubmitted}
        />
        <div className="space-y-0.5">
          <DataRow
            icon={Hash}
            label="Estimasi MOQ"
            value={formData.moqRange}
          />
          <DataRow
            icon={TableProperties}
            label="Grand Total (dari tabel)"
            value={grandTotal > 0 ? `${grandTotal} pcs` : "Belum diisi"}
          />
        </div>
        {grandTotal > 0 && (
          <div className="mt-2 overflow-x-auto rounded-lg border border-outline-variant/30">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-surface-variant/50">
                  <th className="text-left py-2 px-3 font-semibold text-primary/60">
                    Kategori
                  </th>
                  {(["S", "M", "L", "XL", "XXL"] as const).map((s) => (
                    <th
                      key={s}
                      className="text-center py-2 px-2 font-semibold text-primary/60"
                    >
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(["pria", "wanita"] as const).map((cat) => (
                  <tr key={cat} className="border-t border-outline-variant/20">
                    <td className="py-2 px-3 font-medium text-primary/70 capitalize">
                      {cat}
                    </td>
                    {(["S", "M", "L", "XL", "XXL"] as const).map((s) => (
                      <td
                        key={s}
                        className="text-center py-2 px-2 text-primary/70"
                      >
                        {formData.sizeBreakdown[cat][s] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Section 5: Timeline */}
      <div className="p-4 rounded-xl bg-surface-variant/30 border border-outline-variant/30">
        <SectionHeader
          icon={CalendarDays}
          title="Timeline & Budget"
          step={5}
          onEdit={goToStep}
          isSubmitted={isSubmitted}
        />
        <div className="space-y-0.5">
          <DataRow
            icon={Banknote}
            label="Budget per Pcs"
            value={
              formData.budgetPerPcs
                ? `Rp ${formData.budgetPerPcs}`
                : "Tidak ditentukan"
            }
          />
          <DataRow
            icon={CalendarDays}
            label="Deadline"
            value={
              formData.deadline
                ? new Date(formData.deadline).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Belum ditentukan"
            }
          />
          <DataRow
            icon={MessageSquare}
            label="Catatan Tambahan"
            value={formData.additionalNotes}
          />
        </div>
      </div>
    </div>
  );
}
