import { FULL_CATALOG } from "@/data/mockData";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-surface pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-[9px] uppercase tracking-widest mb-4">
            Custom Manufacturing
          </div>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-primary mb-4">
            Katalog <span className="text-secondary">Lengkap</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-medium text-sm md:text-base">
            Jelajahi berbagai pilihan koleksi produk manufaktur garment kami. Dari seragam korporat hingga koleksi streetwear premium, semuanya diproduksi dengan standar tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FULL_CATALOG.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift group">
              <Link href={`/katalog/${item.id}`} className="block aspect-[4/5] overflow-hidden relative">
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {item.isBestSeller && (
                  <div className="absolute top-4 right-4">
                    <span className="glass px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase text-primary">BEST SELLER</span>
                  </div>
                )}
              </Link>
              
              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="text-[9px] font-bold text-secondary uppercase border border-secondary/30 px-2.5 py-1 rounded-full">{item.tags[0]}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase border border-slate-100 px-2.5 py-1 rounded-full">{item.tags[1]}</span>
                </div>
                
                <Link href={`/katalog/${item.id}`} className="hover:text-secondary transition-colors inline-block">
                  <h3 className="font-heading font-bold text-lg text-primary mb-1.5">{item.title}</h3>
                </Link>
                <p className="text-on-surface-variant text-xs mb-5 leading-relaxed font-medium">{item.desc}</p>
                
                <a 
                  href={`https://wa.me/6281234567890?text=Halo Kak, saya tertarik untuk pesan *${item.title}*. Boleh minta detail harganya?`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-secondary text-white py-3 rounded-lg font-heading font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-secondary/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
