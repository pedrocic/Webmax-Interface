import React from 'react';
import Header from '../Header/Header';

import { ContentArea } from './style';

const content = (props) => (
  <>
    <Header {...props} />
    <ContentArea>{props.children}</ContentArea>
  </>
);
export default content;
