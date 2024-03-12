import { PropsWithChildren } from "react";

import CurrencyModal from "./components/header-section/currency-modal/currency-modal";
import Header from "./components/header-section/header";
import LanguageModal from "./components/header-section/language-modal/language-modal";
import FooterSection from "./components/footer-section/footer-section";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <FooterSection />
      <CurrencyModal />
      <LanguageModal />
    </>
  );
}

export default HomeLayout;
