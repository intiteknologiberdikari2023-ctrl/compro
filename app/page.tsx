import Hero from "./home/hero";
import Cta from "./components/cta";
import Portofolio from "./home/portofolio";
import Testimoni from "./home/testimoni";
import Servisces from "./home/services";


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
