import React from 'react';

import { HeaderArea } from './style';

const Header = ({ icon, title, subtitle }) => (
  <HeaderArea className="d-none d-sm-flex flex-column">
    <h1 className="mt-3">
      <i className={`fa fa-${icon}`} />
      {title}
    </h1>
    <p className="lead text-muted">{subtitle}</p>
  </HeaderArea>
);

export default Header;
