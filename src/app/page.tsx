import Hero from "@/components/sections/Hero";
import OrderTracking from "@/components/sections/OrderTracking";
import ProductCatalog from "@/components/sections/ProductCatalog";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <OrderTracking />
      <ProductCatalog />
      <Portfolio />
    </main>
  );
}
