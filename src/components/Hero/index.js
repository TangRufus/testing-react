/**
*
* Hero
*
*/

import React, { PropTypes } from 'react';

function Hero({ title, subtitle }) {
  const styles = require('./styles.scss');
  return (
     <div className="parallax">
       <div className="parallax-image">
           <img src="http://localhost:3000/header.jpg" alt="pinot-hero" />
             <div className="small-info">
                 <h1 className={styles.smallInfo} id="anchor">{title}</h1>
                 {(subtitle) ? <h3>{subtitle}</h3> : ''}
             </div>
     </div>
   </div>
   );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Hero;
