/**
*
* Footer
*
*/

import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer footer-big footer-black">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="title">Who are we</h5>
            <span>香港年青媒體工作者的網站，媒體 freelance 的工作一個方便、低成本及高效率聯繫交易平台。</span>
          </div>

          <div className="col-md-3 col-md-offset-1">
            <h5 className="title"> Help and Support</h5>
            <nav>
              <ul>
                <li><Link to="/how-does-it-work">怎樣運作</Link></li>
                <li><Link to="/pricing">收費</Link></li>
                <li><Link to="/for-artistes">演員須知</Link></li>
                <li><Link to="/for-producers">導演須知</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-md-2">
            <h5 className="title">Company</h5>
            <nav>
              <ul>
                <li><Link to="/about-us">關於我們</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-md-3">
            <h5 className="title">Science Park</h5>
            <p>@TODO: Add Science Park logo & info</p>
          </div>

        </div>
        <hr />
        <div className="social-area text-center">
          <h5>Join us on</h5>
          <a href="https://www.facebook.com/pinothk" className="btn btn-social btn-round" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/@pinothk" className="btn btn-social btn-round" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://plus.google.com/+PinotHkMedia" className="btn btn-social btn-round" target="_blank">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; 2016 Pinot (HK) Media Limited
        </div>
      </div>
    </footer>
  );
}

export default Footer;
