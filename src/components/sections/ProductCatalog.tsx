"use client";

import { MessageCircle, ArrowRight } from "lucide-react";

const CATALOG = [
  {
    id: 1,
    title: "Premium Essential Tee",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrFVrPjz0783cbfXnTn1Jxmsud-ENuHcOHFK3mmmvDPknn6NiIqOWaYAurGV0TalmSiV6T3S-NaYoPcxoVHkV6bF6ivkA7oOZ9vaTAdIeo_yrj8Qi8IqYR0-7M8w6ALl31jgxHpolS_0rLohdMHrFLeW4g8dMDVpFrI36Am62ozAahm-PQDQ716Ut6q2s9MiXPsv37V7L7DsGP0hfoZmDrXuWjSgoUNzdynxLwM2-hatg07Ql5X4NAifuHn0lDwUkyyNGw6Oe_SYY",
    tags: ["Cotton 30s", "Min. 24 Pcs"],
    desc: "Material sejuk dengan daya serap tinggi. Sempurna untuk merch brand modern.",
    isBestSeller: true
  },
  {
    id: 2,
    title: "Heavyweight Hoodie",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtHDiYGpMXwxOdf53_lwWhSrPJN8-snnNySro8fdo_VzMfxrz-OC6xDztCUzQU3HxKZCyAJ1RIPl7tzdxfPMivCXF-wjsyByOtFS80Fn6wK9Swh_N_ypXEnlehXDzWf4BtQRkuaHOSJyPV6b6GlWFwdJeKhtwR5r_d6fCCLo55o51qiJTZbFJ_FnCH3U3ihi8l1RVY57AQ9kg0cBVX7VB1X8zoVARidYQ1edQeGwZF000yw75UvprYXQGhSSbsh8msmBBsq66xRDY",
    tags: ["Heavy Fleece", "Min. 12 Pcs"],
    desc: "Potongan oversized modern dengan bahan fleece tebal yang sangat lembut.",
    isBestSeller: false
  },
  {
    id: 3,
    title: "Tactical Work Shirt",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDPbRBHRhM8BDZ0lKqMvNCbS9fRWotBijaPBcYr25opxo_yKAmWcXpIWWc92-DG4xE4T7LkAPeYNiL8WYNiaHdX0UpXiy26czzUOyam9CINKzH0YTuI6dVaASEh3P72W0cwPa9U0BlPTmvjlReLTFvSRDCnp8nCTxdGmpuS5J02MEKcKsLJc5miN6PRnOAEPRX0EI3FZ2AHwrNrRcOvR4avheE8ysVAe14NMPKxlYVNw-vVJT3U64gyotYywG8Jatj-OHotRHMhVU",
    tags: ["American Drill", "Min. 24 Pcs"],
    desc: "Kekuatan jahitan ganda dengan material tahan gesek untuk medan berat.",
    isBestSeller: false
  }
];

export default function ProductCatalog() {
  return (
    <section id="katalog" className="py-12 lg:py-16 px-4 lg:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Our Selection</div>
            <h2 className="font-heading font-bold text-3xl text-primary tracking-tight">Product Catalog</h2>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-xs group">
            EXPLORE ALL COLLECTIONS <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATALOG.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift group">
              <div className="aspect-[4/5] overflow-hidden relative">
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
              </div>
              
              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="text-[9px] font-bold text-secondary uppercase border border-secondary/30 px-2.5 py-1 rounded-full">{item.tags[0]}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase border border-slate-100 px-2.5 py-1 rounded-full">{item.tags[1]}</span>
                </div>
                
                <h3 className="font-heading font-bold text-lg text-primary mb-1.5">{item.title}</h3>
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
    </section>
  );
}
