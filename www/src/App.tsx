import { Fragment } from "react";
import NavBar from "./components/NavBar";
import ServiceUnavaliabe from "./components/ServiceUnavaliabe";
import CheckOutSection from "./sections/CheckOutSection";
import ClientSection from "./sections/ClientSection";
import HeroSection from "./sections/HeroSection";
import LetItDevelopSection from "./sections/LetItDevelopSection";
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
        <ClientSection />
        <LetItDevelopSection />
      </main>

      <ServiceUnavaliabe />
    </Fragment>
  );
}
