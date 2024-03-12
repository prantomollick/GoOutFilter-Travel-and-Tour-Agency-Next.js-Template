import React from "react";
import Navigation from "./navigation/navigation";

function Header() {
  // sticky bg-darkest-blue
  return (
    <header className="text-white font-medium w-100 bg-transparent absolute">
      <div className="container-fluid">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;