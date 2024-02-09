import { PropsWithChildren } from "react";
import Navigation from "./components/navigation/navigation";

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      {children}
    </>
  );
}

export default HomeLayout;
