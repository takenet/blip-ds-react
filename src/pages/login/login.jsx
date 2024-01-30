import React from "react";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";
import { project_656489f80b5e8dc83b61551a as dito } from "../../ditto";

class Login extends React.Component {
  render() {
    return (
      <bds-grid xxs="12" direction="row" height="100%">
        <bds-grid class="form_space" xxs="12" md="6" justify-content="center" align-items="center">
          <bds-grid height="100%">
            <bds-illustration
              class="logo-brand"
              type="brand"
              name="blip-ballon-blue-black-horizontal"
              alt="logo take blip"
            ></bds-illustration>
          </bds-grid>
          <bds-grid gap="2" xxs="10" xs="6" md-offset="1" md="6"  direction="column">
            <bds-typo margin="false" tag="h1" variant="fs-40" bold="bold">
              {dito.base.bomdia}
            </bds-typo>
            <bds-typo tag="h4" variant="fs-16">
              {dito.base.paracomecarfacaologinnasuaconta}
            </bds-typo>
            <bds-button icon="google" type-icon="logo" variant="tertiary">
              {dito.base.logincomogoogle}
            </bds-button>
            <bds-typo>{dito.base.ou}</bds-typo>
            <bds-grid gap="2" direction="column" className="inputs">
              <bds-input
                placeholder={dito.base.insiraaquioseue_mail}
                label={dito.base.e_mail}
              ></bds-input>
              <bds-input
                placeholder={dito.base.insiraaquisuasenha}
                label={dito.base.senha}
              ></bds-input>
            </bds-grid>
            <bds-grid justify-content="flex-end">
              <Link to="/" className="forgot-password">
                <bds-typo variant="fs-14" bold="bold">
                {dito.base.esqueceusuasenha}
                </bds-typo>
              </Link>
            </bds-grid>

            <bds-grid
              direction="row"
              justify-content="space-between"
              className="actions"
            >
              <bds-button variant="tertiary">{dito.base.cadastre_segratis}</bds-button>
              <Link to="/main/chatbot">
                <bds-button>{dito.base.login}</bds-button>
              </Link>
            </bds-grid>
          </bds-grid>
        </bds-grid>
        <bds-grid height="100%" class="aside" xxs="6"></bds-grid>
        <Outlet />
      </bds-grid>
    );
  }
}

export default Login;
