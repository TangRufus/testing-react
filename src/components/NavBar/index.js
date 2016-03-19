/**
*
* NavBar
*
*/

import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { NavLinks } from 'components';

// TODO: Handle window resize

export default class NavBar extends Component {
  state = {
    menuOpened: false
  };

  handleToggleClick = () => {
    if (window.innerWidth < 768) {
      this.setState({ menuOpened: !this.state.menuOpened });
    } else {
      this.setState({ menuOpened: false });
    }
  }

  render() {
    const divClassName = (this.state.menuOpened) ? 'nav-open' : '';
    return (
      <div className={divClassName}>

        <nav className="navbar navbar-ct-azure navbar-fixed-top">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button id="menu-toggle" type="button" className="navbar-toggle"
                onClick={this.handleToggleClick}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar bar1"></span>
                <span className="icon-bar bar2"></span>
                <span className="icon-bar bar3"></span>

              </button>
              <IndexLink to="/" className="navbar-brand">
                Pinot {this.state.dimensions}
              </IndexLink>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <NavLinks additionalClassName="navbar-right" />
          </div>
        </nav>

        {/* Right Menu */}
        <div className="side-nav-menu">
          <NavLinks />
        </div>

      </div>
    );
  }
}
