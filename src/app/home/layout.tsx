import { PropsWithChildren } from "react";

import CurrencyModal from "./components/header-section/currency-modal/currency-modal";
import Header from "./components/header-section/header";
import LanguageModal from "./components/header-section/language-modal/language-modal";

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
