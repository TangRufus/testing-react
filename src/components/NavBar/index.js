/**
*
* NavBar
*
*/

import React from 'react';
import { IndexLink } from 'react-router';
import { NavLinks } from 'components';

function NavBar() {
  return (
    <nav className="navbar navbar-inverse navbar-transparent navbar-fixed-top" role="navigation">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button id="menu-toggle" type="button" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar bar1"></span>
            <span className="icon-bar bar2"></span>
            <span className="icon-bar bar3"></span>

          </button>
          <IndexLink to="/" className="navbar-brand">
            Pinot
          </IndexLink>
        </div>

        {/* Collect the nav links, forms, and other content for toggling */}
        <NavLinks additionalClassName="navbar-right" />
      </div>
    </nav>
  );
}

export default NavBar;
