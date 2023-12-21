import React from 'react';
import './login.scss';
import { Outlet } from 'react-router-dom';
import { Props } from './theme-interface';

const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');

const Login = (props: Props) => {
  return (
    <bds-grid xxs="12" direction="row" height="100%">
      <bds-grid xxs="12" md="6" justify-content="center" align-items="center" class="login-page">
        <bds-grid height="100%">
          <bds-illustration
            class="logo-brand"
            type="brand"
            name={browserTheme.matches ? 'blip-ballon-blue-white-horizontal' : 'blip-ballon-blue-black-horizontal'}
          ></bds-illustration>
        </bds-grid>
        <bds-grid gap="2" xxs="10" direction="column">
          {props.slot}
        </bds-grid>
      </bds-grid>
      <bds-grid height="100%" class="aside" xxs="6"></bds-grid>
      <Outlet />
    </bds-grid>
  );
};

export default Login;
