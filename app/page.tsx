import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import NewProducts from "./components/NewProducts";
import PopularProduct from "./components/PopularProduct";
import Signup from "./components/Signup";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
    <Header />
    <HeroSection />
    <Features />
    <NewProducts />
    <PopularProduct />
    <Signup />
    <GetInTouch />
    <Footer />
   </>
  );
}
