import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';

class Navbar extends Component {
  render() {

    // let s1 = {backgroundColor: 'red'};
    // let s2 = {textAlign: 'right'};

    return (
      <div>
        <Appbar>
          <ul className="appbar-nav-left">
            <li className="appbar-nav-left-link"><a href="#">OLYMPIKESOFT</a></li>
          </ul>
          <ul className="appbar-nav-right">
            <li className="appbar-nav-right-link"><a href="#">Pages</a></li>
            <li className="appbar-nav-right-link"><a href="#">Blog</a></li>
            <li className="appbar-nav-right-link"><a href="#">News</a></li>
            <li className="appbar-nav-right-link"><a href="#">About</a></li>
          </ul>
        </Appbar>
      </div>
    );
  }
}

export default Navbar;
