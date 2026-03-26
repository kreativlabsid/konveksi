import type { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Booking Order | KonveksiPro",
  description:
    "Isi form pemesanan untuk memulai produksi pakaian custom. Kaos, kemeja, jaket, hoodie, dan lebih banyak lagi.",
};

export default function BookingPage() {
  return (
    <main className="flex-1 bg-surface">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Slot Produksi Tersedia
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
              Form Pemesanan
            </h1>
            <p className="text-on-surface-variant text-sm md:text-base max-w-lg mx-auto">
              Lengkapi detail pesanan Anda dan tim kami akan menghubungi Anda
              dalam 1×24 jam dengan quotation.
            </p>
          </div>

          {/* Form */}
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
