import Footer from "./components/Footer";
import Main from "./components/Main";
import Sections from "./components/Sections";
import { IMAGES } from "./data";

function App() {
  const modelThree = IMAGES[0].imgModel3;
  const modelX = IMAGES[0].imgModelX;
  const modelS = IMAGES[0].imgModelS;
  const cybertruck = IMAGES[0].cybertruck;
  const solarpanels = IMAGES[0].solarpanels;
  const solarRoof = IMAGES[0].solarroof;
  const powerwall = IMAGES[0].powerwall;
  const accessories = IMAGES[0].accessories;
  return (
    <div>
      <Main />
      <Sections
        imageUrl={modelThree}
        title="Model 3"
        price="From $299/mo*"
        desc="Est. Lease Price Before Gas Savings"
        primaryDetails="ExCludes taxes and fees with price subject to change. Available in select states. See Details"
        color="text-[white]"
      />
      <Sections
        imageUrl={modelX}
        title="Model X"
        price="From $63,990*"
        desc="After Federal Tax Credit & Est. Gas Savings"
        primaryDetails="*Price Before and Savings is $77,990, excluding taxes and fees. Subject to change."
        learn="Learn about est.gas Savings"
        textcolor="text-[white]"
        underline={"border-b underline-white"}
      />
      <Sections
        imageUrl={modelS}
        title="Model S"
        price="From $66,490*"
        desc="After Est. Gas Savings"
        primaryDetails="*Price Before and Savings is $72,990, excluding taxes and fees. Subject to change."
        learn="Learn about est.gas Savings"
        textcolor="text-[black]"
        underline="border-b border-black"
      />
      <Sections imageUrl={cybertruck} />
      <Sections
        imageUrl={solarpanels}
        title="Solar Panels"
        desc="Sehedule a Virtual Consultation"
        titleColor="text-[white]"
      />
      <Sections
        imageUrl={solarRoof}
        desc="Produce Clean Energy From Your Roof"
        title="SolarRoof"
        titleColor="text-[black]"
      />
      <Sections
        imageUrl={powerwall}
        title="Powerwall"
        titleColor="text-[black]"
      />
      <Footer imageUrl={accessories} titleColor="text-[black]" />
    </div>
  );
}

export default App;
