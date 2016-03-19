import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import { Footer, NavBar, RightMenu } from 'components';

function App({ children }) {
  return (
    <div>
      <Helmet {...config.app.head} />
      <NavBar />
      <div className="wrapper">
        {children}
      </div>
      <Footer />
      <RightMenu />
    </div>
  );
}

App.propTypes = { children: React.PropTypes.object.isRequired };

export default App;
