import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <bds-typo margin={false} tag="h1" variant="fs-40" bold="bold">
        Bom dia!
      </bds-typo>
      <bds-typo tag="h4" variant="fs-16">
        Para começar, faça o login na sua conta:
      </bds-typo>
      <bds-button icon="google" type-icon="logo" variant="tertiary">
        Login com o Google
      </bds-button>
      <bds-typo>ou</bds-typo>
      <bds-grid gap="2" direction="column" class="inputs">
        <bds-input placeholder="Insira aqui seu e-mail" label="E-mail"></bds-input>
        <bds-input placeholder="Insira aqui sua senha" label="Senha"></bds-input>
      </bds-grid>
      <bds-grid justify-content="flex-end">
        <Link to="/" className="forgot-password">
          <bds-typo variant="fs-14" bold="bold">
            Esqueceu sua senha?
          </bds-typo>
        </Link>
      </bds-grid>

      <bds-grid direction="row" justify-content="space-between" class="actions">
        <bds-button variant="tertiary">Cadastra-se grátis</bds-button>
        <Link to="/">
          <bds-button>Entrar</bds-button>
        </Link>
      </bds-grid>
    </>
  );
};

export default Login;
