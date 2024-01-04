import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link
        href="/"
        className="text-2xl flex justify-center"
        title="DeMartini RV Home Page"
      >
        DeMartini RV Sales
      </Link>
    </div>
  );
};

export default Header;
