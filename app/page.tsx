import React from "react";
// difference between @ and ../ is that @ is an alias for the src folder(refer to tsconfig.json)
// and../ is a relative path
import FeatureProducts from "@/components/home/featureProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";
function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeatureProducts />
      </Suspense>
      {/* <LoadingContainer /> */}
    </>
  );
}

export default HomePage;
