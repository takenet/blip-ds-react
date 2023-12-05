import React from 'react';
import { Props } from './theme-interface';

import Portal from './portal';
import Login from './login';

const Theme = (props: Props) => {
  const selectedTheme = props.theme;

  return <>{selectedTheme === 'login' ? <Login slot={props.slot}></Login> : <Portal slot={props.slot}></Portal>}</>;
};

export default Theme;
