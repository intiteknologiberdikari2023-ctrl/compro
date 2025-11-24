import Values from "./values";
import Describe from "./description";
import Mision from "./mision";
import Team from "./team";
import Cta from "../components/cta";
export default function About() {
  return (
    <>
      <Describe />
      <Mision/>
      <Values />
      {/* <Team/> */}
      <Cta/>
      
    </>
  );
}
