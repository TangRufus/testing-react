/**
*
* NavLinks
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function NavLinks({ additionalClassName }) {
  const ulClassName = `nav navbar-nav ${additionalClassName}`;

  return (
      <div className="collapse navbar-collapse">
        <ul ref="navLinks" className={ulClassName}>
          <li><Link to="/how-does-it-work" activeClassName="active">怎樣運作</Link></li>
          <li><Link to="/pricing" activeClassName="active">收費</Link></li>
        </ul>
    </div>
  );
}

NavLinks.propTypes = {
  additionalClassName: PropTypes.string
};

export default NavLinks;
