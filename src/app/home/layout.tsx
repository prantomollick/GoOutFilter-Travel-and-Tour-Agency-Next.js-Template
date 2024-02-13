import { PropsWithChildren } from "react";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HomeLayout;
