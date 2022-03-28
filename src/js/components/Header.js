import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <img src={require('../../img/logo.png')} alt="My Radio Logo" />
        <h1>
          Rad<span className="rose">.io</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
