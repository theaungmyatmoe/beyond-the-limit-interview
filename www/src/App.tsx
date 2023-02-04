import { Fragment } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </Fragment>
  );
}
