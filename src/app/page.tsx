import Image from "next/image";
import Navbar from "./components/Navbar";
import Component from "./components/Header";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <BackgroundBoxesDemo /> */}
      <Component />
    </>
  );
}
