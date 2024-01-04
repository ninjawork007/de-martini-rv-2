import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <div>(800)576-1921 sales@demartini.com</div>
      <div className="flex gap-2">
        <input placeholder="What RV are you looking for?" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
