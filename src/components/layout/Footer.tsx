import { Factory, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          <div className="lg:col-span-5">
            <div className="text-lg lg:text-xl font-black font-heading mb-5 text-white flex items-center gap-2">
              <div className="w-7 h-7 bg-secondary rounded-lg flex items-center justify-center">
                <Factory className="text-white h-3.5 w-3.5" />
              </div>
              Konveksi<span className="text-secondary">Pro</span>
            </div>
            <p className="text-slate-400 font-medium text-sm lg:text-base leading-relaxed mb-6 max-w-sm">
              Partner produksi garment terpercaya untuk kualitas skala industri dengan sentuhan presisi butik.
            </p>
            <div className="flex gap-3">
              <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group" href="#">
                <Globe className="h-3.5 w-3.5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group" href="#">
                <Mail className="h-3.5 w-3.5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group" href="#">
                <Phone className="h-3.5 w-3.5 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-8">
              <h5 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-secondary">Company</h5>
              <ul className="space-y-4">
                <li><a className="text-slate-400 hover:text-white transition-all text-sm font-medium" href="#">About Us</a></li>
                <li><a className="text-slate-400 hover:text-white transition-all text-sm font-medium" href="#">Careers</a></li>
                <li><a className="text-slate-400 hover:text-white transition-all text-sm font-medium" href="#">Our Factory</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-secondary">Legal</h5>
              <ul className="space-y-4">
                <li><a className="text-slate-400 hover:text-white transition-all text-sm font-medium" href="#">Terms of Service</a></li>
                <li><a className="text-slate-400 hover:text-white transition-all text-sm font-medium" href="#">Privacy Policy</a></li>
                <li><a className="text-slate-400 hover:text-white transition-all text-sm font-medium" href="#">Sustainability</a></li>
              </ul>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1">
              <h5 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-secondary">Newsletter</h5>
              <p className="text-xs text-slate-500 font-medium">Get production updates and material insights.</p>
              <div className="relative">
                <input className="w-full bg-white/5 border-transparent rounded-xl py-3 px-4 text-sm focus:bg-white/10 focus:border-secondary focus:ring-0 outline-none transition-all" placeholder="Email" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">© 2026 KonveksiPro. Engineered for quality.</p>
          <div className="flex gap-8">
            <span className="text-slate-600 text-[10px] font-bold tracking-widest cursor-pointer hover:text-slate-400">INSTAGRAM</span>
            <span className="text-slate-600 text-[10px] font-bold tracking-widest cursor-pointer hover:text-slate-400">LINKEDIN</span>
            <span className="text-slate-600 text-[10px] font-bold tracking-widest cursor-pointer hover:text-slate-400">TWITTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
