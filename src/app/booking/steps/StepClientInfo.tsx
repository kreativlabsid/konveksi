"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Building2, Mail, Phone, MapPin } from "lucide-react";
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

export default function StepClientInfo({ formData, updateFormData, errors }: Props) {
  return (
    <div className="space-y-5">
      {/* Nama Lengkap */}
      <div className="space-y-2 group">
        <Label htmlFor="fullName" className="text-primary/80">
          <User className="size-3.5 text-secondary" />
          Nama Lengkap / PIC
          <span className="text-secondary">*</span>
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="cth: Ahmad Rizky"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          aria-invalid={!!errors.fullName}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <FieldError message={errors.fullName} />
      </div>

      {/* Nama Brand */}
      <div className="space-y-2 group">
        <Label htmlFor="brandName" className="text-primary/80">
          <Building2 className="size-3.5 text-secondary" />
          Nama Brand / Perusahaan
          <span className="text-secondary">*</span>
        </Label>
        <Input
          id="brandName"
          type="text"
          placeholder="cth: Streetwear Co."
          value={formData.brandName}
          onChange={(e) => updateFormData({ brandName: e.target.value })}
          aria-invalid={!!errors.brandName}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <p className="text-xs text-on-surface-variant/70">
          Agar kami bisa mengenali skala bisnis Anda.
        </p>
        <FieldError message={errors.brandName} />
      </div>

      {/* Email */}
      <div className="space-y-2 group">
        <Label htmlFor="email" className="text-primary/80">
          <Mail className="size-3.5 text-secondary" />
          Email Aktif
          <span className="text-secondary">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="cth: ahmad@brand.com"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          aria-invalid={!!errors.email}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <p className="text-xs text-on-surface-variant/70">
          Invoice & quotation akan dikirim ke email ini.
        </p>
        <FieldError message={errors.email} />
      </div>

      {/* WhatsApp */}
      <div className="space-y-2 group">
        <Label htmlFor="whatsapp" className="text-primary/80">
          <Phone className="size-3.5 text-secondary" />
          No. WhatsApp / Telepon
          <span className="text-secondary">*</span>
        </Label>
        <Input
          id="whatsapp"
          type="tel"
          placeholder="cth: 0812-3456-7890"
          value={formData.whatsapp}
          onChange={(e) => updateFormData({ whatsapp: e.target.value })}
          aria-invalid={!!errors.whatsapp}
          className="h-11 rounded-xl bg-white/50 focus:bg-white transition-colors"
        />
        <FieldError message={errors.whatsapp} />
      </div>

      {/* Alamat Pengiriman */}
      <div className="space-y-2 group">
        <Label htmlFor="shippingAddress" className="text-primary/80">
          <MapPin className="size-3.5 text-secondary" />
          Alamat Pengiriman (Kota/Negara)
          <span className="text-secondary">*</span>
        </Label>
        <Textarea
          id="shippingAddress"
          placeholder="cth: Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190"
          value={formData.shippingAddress}
          onChange={(e) => updateFormData({ shippingAddress: e.target.value })}
          aria-invalid={!!errors.shippingAddress}
          className="min-h-20 rounded-xl bg-white/50 focus:bg-white transition-colors resize-none"
        />
        <p className="text-xs text-on-surface-variant/70">
          Untuk menghitung estimasi ongkos kirim.
        </p>
        <FieldError message={errors.shippingAddress} />
      </div>
    </div>
  );
}
