import { PropsWithChildren } from "react";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header";
import CurrencyModal from "./components/currency-modal/currency-modal";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <CurrencyModal />
    </>
  );
}

export default HomeLayout;
