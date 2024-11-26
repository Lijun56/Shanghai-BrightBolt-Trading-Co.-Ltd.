import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Precision Bolts and Screws for Every Need
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Discover our wide range of high-quality bolts and screws, designed to
          meet the demands of any project. From industrial to DIY, we have the
          perfect fasteners for you.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Browse Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
