import { PropsWithChildren } from "react";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header";
import CurrencyModal from "./components/currency-modal/currency-modal";
import LanguageModal from "./components/language-modal/language-modal";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <CurrencyModal />
      <LanguageModal />
    </>
  );
}

export default HomeLayout;
