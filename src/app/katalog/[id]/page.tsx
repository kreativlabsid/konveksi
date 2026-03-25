import { FULL_CATALOG } from "@/data/mockData";
import { MessageCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Required for Next.js App Router dynamic params
export default async function ProductDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = FULL_CATALOG.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-on-surface-variant mb-6 lg:mb-8 font-heading uppercase tracking-widest flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/katalog" className="hover:text-primary transition-colors">Katalog</Link>
          <span>/</span>
          <span className="text-secondary truncate max-w-[150px] sm:max-w-none">{product.title}</span>
        </div>
        
        <Link href="/katalog" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-primary mb-8 hover:gap-3 transition-all group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Katalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square w-full">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
            {product.isBestSeller && (
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                <span className="glass px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-[9px] lg:text-[10px] font-bold tracking-widest uppercase text-primary shadow-lg">BEST SELLER</span>
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="py-2 lg:py-6 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 lg:gap-3 mb-4 lg:mb-6">
              <span className="text-[9px] lg:text-[10px] font-bold text-secondary uppercase border border-secondary/30 bg-secondary/5 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full">{product.tags[0]}</span>
              <span className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase border border-slate-200 bg-white px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full">{product.tags[1]}</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-3xl lg:text-5xl text-primary mb-3 lg:mb-4 leading-tight">
              {product.title}
            </h1>
            
            <p className="text-on-surface-variant text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed font-medium">
              {product.longDesc || product.desc}
            </p>
            
            <div className="bg-white rounded-xl lg:rounded-2xl p-5 lg:p-8 card-shadow mb-6 lg:mb-8 border border-outline-variant/30">
              <h3 className="font-heading font-bold text-base lg:text-lg text-primary mb-4 lg:mb-5">Spesifikasi Detail</h3>
              <ul className="space-y-2.5 lg:space-y-3">
                {product.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 lg:gap-3">
                    <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs lg:text-sm font-medium text-slate-600 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 pt-5 lg:mt-6 lg:pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-5 lg:gap-6">
                <div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Minimum Order</div>
                  <div className="font-heading font-bold text-primary text-base lg:text-lg">{product.minOrder}</div>
                </div>
                <div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Estimasi Pengerjaan</div>
                  <div className="font-heading font-bold text-primary text-base lg:text-lg">{product.estimatedTime}</div>
                </div>
              </div>
            </div>
            
            <a 
              href={`https://wa.me/6281234567890?text=Halo Kak, saya tertarik untuk pesan *${product.title}*. Boleh minta detail harga dan prosedurnya?`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-secondary text-white py-3.5 lg:py-4 rounded-xl font-heading font-bold text-xs lg:text-sm flex items-center justify-center gap-2 lg:gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20"
            >
              <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
              Pesan via WhatsApp Sekarang
            </a>
            
            <p className="text-center text-[10px] lg:text-xs font-medium text-slate-400 mt-3 lg:mt-4">
              Tim kami akan membalas pesan Anda dalam waktu kurang dari 5 menit (Jam Kerja).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
