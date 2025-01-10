
// app/page.tsx

import CategoryNav from "./components/CategoryNav";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import Shop1 from "./components/Shop1";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryNav />
      <FeaturedProducts />
      <Shop1 />
    </main>
  )
}