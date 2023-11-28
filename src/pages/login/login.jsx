import React from "react";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <bds-grid xxs="12" direction="row" height="100%">
        <bds-grid xxs="12" md="6" justify-content="center" align-items="center">
          <bds-grid height="100%">
            <bds-illustration
              class="logo-brand"
              type="brand"
              name="blip-ballon-blue-black-horizontal"
              alt="logo take blip"
            ></bds-illustration>
          </bds-grid>
          <bds-grid gap="2" xxs="10" direction="column">
            <bds-typo margin="false" tag="h1" variant="fs-40" bold="bold">
              Bom dia!
            </bds-typo>
            <bds-typo tag="h4" variant="fs-16">
              Para começar, faça o login na sua conta:
            </bds-typo>
            <bds-button icon="google" type-icon="logo" variant="tertiary">
              Login com o Google
            </bds-button>
            <bds-typo>ou</bds-typo>
            <bds-grid gap="2" direction="column" className="inputs">
              <bds-input
                placeholder="Insira aqui seu e-mail"
                label="E-mail"
              ></bds-input>
              <bds-input
                placeholder="Insira aqui sua senha"
                label="Senha"
              ></bds-input>
            </bds-grid>
            <bds-grid justify-content="flex-end">
              <Link to="/" className="forgot-password">
                <bds-typo variant="fs-14" bold="bold">
                  Esqueceu sua senha?
                </bds-typo>
              </Link>
            </bds-grid>

            <bds-grid
              direction="row"
              justify-content="space-between"
              className="actions"
            >
              <bds-button variant="tertiary">Cadastra-se grátis</bds-button>
              <Link to="/main/chatbot">
                <bds-button>Entrar</bds-button>
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
