import { Header } from "@/components/Header";
import { FirstBlock } from "@/components/FirstBlock";
import { CounterData } from "@/components/CounterData";
import { AcercaDe } from "@/components/AcercaDe";
import { Portafolio } from "@/components/Portafolio";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <AcercaDe />
      <Portafolio />
      <PaymentsMethods />
      <Footer />
    </>
  );
}
