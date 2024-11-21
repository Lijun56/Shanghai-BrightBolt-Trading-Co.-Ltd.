import React from "react";
// difference between @ and ../ is that @ is an alias for the src folder(refer to tsconfig.json)
// and../ is a relative path
import FeatureProducts from "@/components/home/featureProducts";
import Hero from "@/components/home/Hero";
function HomePage() {
  return (
    <>
      <Hero />
      <FeatureProducts />
    </>
  );
}

export default HomePage;
