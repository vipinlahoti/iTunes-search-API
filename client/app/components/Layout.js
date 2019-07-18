import React from 'react';
import Header from "./Header";
import SearchBox from "./SearchBox";
import Favourates from "./Favourates";

const Layout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Header />
          <SearchBox />
          <Favourates />
        </div>
      </div>
    </div>
  );
}

export default Layout;
