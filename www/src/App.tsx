import { Fragment } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <HeroSection />
        <ProductsSection />
      </main>
    </Fragment>
  );
}
