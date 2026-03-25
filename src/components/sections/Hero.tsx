"use client";

import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden px-4 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16 bg-surface min-h-[calc(100vh-64px)] lg:min-h-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
        <div className="lg:col-span-7 z-10 text-center lg:text-left mt-4 md:mt-0">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-[9px] uppercase tracking-widest mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary pulse-soft"></span>
            High Precision Manufacturing
          </div>
          
          <h1 className="font-heading font-extrabold text-4xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-4 text-primary">
            Evolving <br className="hidden lg:block"/><span className="text-secondary">Garment</span> <br className="hidden lg:block"/>Standards.
          </h1>
          
          <p className="text-on-surface-variant text-sm md:text-base max-w-md mb-8 leading-relaxed font-medium mx-auto lg:mx-0">
            Kualitas premium, tepat waktu, dan transparan. Kami mewujudkan standar manufaktur tinggi untuk kebutuhan brand dan korporasi global.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link href="/katalog" className="bg-primary text-white px-6 py-3 rounded-full font-heading font-bold text-[13px] transition-all flex items-center gap-2 group hover:pr-8 shadow-md shadow-primary/20">
              Lihat Katalog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#lacak" className="bg-white border border-outline-variant hover:border-primary text-primary px-6 py-3 rounded-full font-heading font-bold text-[13px] transition-all flex items-center gap-2">
              <Search className="h-4 w-4" />
              Lacak Pesanan
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 max-w-[450px] mx-auto w-full">
          <div className="absolute -inset-8 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl opacity-30"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square xl:aspect-[4/3] max-h-[380px] w-full">
            <img 
              alt="Manufacturing floor" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC20qxYQHKEzw9ir-rF4GO-0bjp_OuIc-asoUyQRtJd-0pRCOJ9_PQu5-syT2tHgENDNr2UQy68X9ldxWygU4tfiOUm4_9NLSjLqvBIxqdtJapJMWAoW6FO-2-uSA0sEGFppU7hx4-a24jhoK9A91YcaKWLUkhZnFsvyKmRYw6GVmln6LMRmDd2QIqeq9nbDXQOd14lJcq4omBJKjAzLdAzJx1K5uz-BkzvRpNROPrKI9JXwdbmH8u-oerDYMQDSsd7nAQhbul4SHA"
            />
          </div>
          
          {/* High-End Stats Widget */}
          <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl shadow-lg border border-white/50 hidden md:flex items-center gap-3">
            <div className="bg-secondary text-white p-2.5 rounded-lg shadow-md shadow-secondary/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xl font-black font-heading text-primary leading-none mb-0.5">99.8%</div>
              <div className="text-[8px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Accuracy rate</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
