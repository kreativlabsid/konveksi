"use client";

const IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9wjQirC0HVYunnZJ8dFg5-N__gCLa79t4nYNKEh3SPzE5TwX1nmfl7KVuKvgAcqmJBVE_2H-npHJTn8ZEQH8oMszFwrtEvBhBafqx_zCRr5e8sJ0FZGJj2MpNDk-UpXyPYBWOlyt4BOD7HlCjjr2hmhPoBZO4kH_z-9_KB4CQvideKfN7mSw4b2VRHK1rHtWIzGs1iuLDSgKs_LA3xL8VNr3b9kMpAjMIm8l5pGDRDUKOraiBks-K6BZzbp2WtPY32z3P3iMJrGk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2lpKnrPxnPKjjM0-xIA4UpHlGpJ4Ou_GTEc30PLSHoqKttsta598ZwGBaW9J0yiJq9iCLSj4Hl58LSQGxIDMnFufRdHgbj5y7EYFRnVgx78PFnhQoDxSEMiQMknAxwgs-2qIkvx0RRlO-A5ujnQIWg6TMNuh292DNoiqMCU8r_D9tTAj_5CXdI9LC2r76NGsurv3pAc3jdcjhxPsqa5taQeWLRO6pLheWFSQjupydyOymB0VXcHy2clMOBs6XyA90CWFyG0aMks",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIre8V1S7nyIPXyQaeStDFKF-OatoDcmFOZJsK6u2dnKhpDEmO_SPCzDBMV-6YrS9qf2506d5VgekmJU2ONyIAi-Jbf50HneLghpaydSNeppc1y_Rww1WRm5nkgn3YSKQIA7VCcDVcDiH9XOp-0kV2mDPGGLCEtWgqqSAJEQhtOibhdiRQw5-dmnI0FUvOfAktAHtTGKvvug3cWsDLQCWztBCa6eyQ9YYT-JQfcUo-_DKXDFr9LwVAEFxvcTXsMq6olYMFUdSwo5M",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWaFjsMh4n7oipNfeYFLwGkSEHCHJHBL3ACsPUVICqdQVrbQAwBrkhUdEnO1i0McizB21UkMOwB2559Gw_SbsqFWkdeYBJAJyIad1sGnUABr5Mgu6WQgh_goyfc99Cyo0R1wD8cz2y7gcEI9KhZmcfZgx9AiLlkDnH_0aBst5ZuiwQx_x5i4UgflTeIcEC-zsaV845seaXyl1LFWrGbtCs_9fwj0Z6SQ7jbri8eynUq2RhFMF4R617eL23W2cWGe-ekYnBYDkoD1c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBupPmPlFAx7I7GVKsAtSJOPouvylLSnaHZQ3fJpwNtyz_stc9Qeh764R55k6itJb6IDAiONYiSzah7nFW_XTOHamRQuq0xO-5BQvcgRhezyltpq8r7XJ9tcbexKTQcOEPuqAi1qfQ32CrpFgh83QMQMiuPMrKOx2W7Mjx4sxssPpexUiHtjjwYyBJY0z2YRN7bIho6PibVURtmiLsf-ymZwx81ev-fAB0cyIg_cvPA9aKT0WCEhHOfJGpxTU-02Sc8baKsPzbxQwk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA7jh26aB6nbtyxPhZIqUj_V9AH6_0oVjhPIRvJv5VvHBo9x2Wr0UmsG7tEVdfuq9LtDKwHOZzl0bNxn02KdaNExqVXQ8aOI-w0UfT5Z5BWQCeeKppfAOl37W-e-y022JlQHyQZ22jYmvKOKl6PgoXhoHvnUdnXPx7yYom9J7kJXw-OuIAyODx7pizRl54H4u9TE1z2fIWULRC7kWKPot32B73UPLP08SuxP11Q68GDpiATxTqFFyOwNHQQjS4r6MMDEhgFJt1uQng"
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 lg:py-16 px-4 lg:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-3 tracking-tight">Industrial Impact</h2>
          <p className="text-on-surface-variant text-sm md:text-base font-medium max-w-xl mx-auto">Membangun ekosistem produksi yang berkelanjutan untuk mitra bisnis kami di seluruh Indonesia.</p>
        </div>
        
        {/* Modern Stats Banner */}
        <div className="bg-primary rounded-[1.5rem] p-8 lg:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-heading font-extrabold text-white mb-1.5">10K<span className="text-secondary">+</span></div>
              <div className="text-slate-400 text-[9px] font-bold tracking-[0.2em] uppercase">Units Monthly</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-heading font-extrabold text-white mb-1.5">50<span className="text-secondary">+</span></div>
              <div className="text-slate-400 text-[9px] font-bold tracking-[0.2em] uppercase">Enterprise Clients</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-heading font-extrabold text-white mb-1.5">15<span className="text-secondary">+</span></div>
              <div className="text-slate-400 text-[9px] font-bold tracking-[0.2em] uppercase">Production Years</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-heading font-extrabold text-white mb-1.5">99<span className="text-secondary">%</span></div>
              <div className="text-slate-400 text-[9px] font-bold tracking-[0.2em] uppercase">Client Retention</div>
            </div>
          </div>
        </div>

        {/* Masonry Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px]">
          <div className="row-span-2 rounded-[1.5rem] overflow-hidden group">
            <img alt="Production" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={IMAGES[0]} />
          </div>
          <div className="col-span-2 rounded-[1.5rem] overflow-hidden group">
            <img alt="Warehouse" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={IMAGES[1]} />
          </div>
          <div className="row-span-1 rounded-[1.5rem] overflow-hidden group">
            <img alt="Tailoring" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={IMAGES[2]} />
          </div>
          <div className="row-span-2 rounded-[1.5rem] overflow-hidden group">
            <img alt="Product" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={IMAGES[3]} />
          </div>
          <div className="col-span-1 rounded-[1.5rem] overflow-hidden group">
            <img alt="Packaging" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={IMAGES[4]} />
          </div>
          <div className="row-span-1 rounded-[1.5rem] overflow-hidden group">
            <img alt="Embroidery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={IMAGES[5]} />
          </div>
        </div>
        
      </div>
    </section>
  );
}
