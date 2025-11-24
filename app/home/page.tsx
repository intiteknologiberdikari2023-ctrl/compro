import Hero from "./hero";
import Cta from "../components/cta";
import Portofolio from "./portofolio";
import Testimoni from "./testimoni";
import Servisces from "./services";


export default function Home() {
  return (
    <>
      <Hero/>
      <Servisces/>
      <Portofolio/>
      <Testimoni/>
      <Cta/>

    </>
  );
}
