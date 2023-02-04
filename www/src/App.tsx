import { Fragment } from "react";
import NavBar from "./components/NavBar";
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
        {/* TODO: make the right move */}
        <MakeTheRightMoveSection />
        <ProductsSection />
        <CheckOutSection />
        {/*  TODO: client section */}
      </main>
    </Fragment>
  );
}
