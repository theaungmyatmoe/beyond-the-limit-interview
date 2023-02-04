import { Fragment } from "react";
import NavBar from "./components/NavBar";
import ServiceUnavaliabe from "./components/ServiceUnavaliabe";
import CheckOutSection from "./sections/CheckOutSection";
import HeroSection from "./sections/HeroSection";
import MakeTheRightMoveSection from "./sections/MakeTheRightMoveSection";
import ProductsSection from "./sections/ProductsSection";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <HeroSection />
        <MakeTheRightMoveSection />
        <ProductsSection />
        <CheckOutSection />
        {/*  TODO: client section */}
        {/* TODO: let is develop section */}
      </main>

      <ServiceUnavaliabe />
    </Fragment>
  );
}
