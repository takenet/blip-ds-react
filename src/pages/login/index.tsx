import { BdsButton, BdsGrid, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <BdsTypo margin={false} tag="h1" variant="fs-40" bold="bold">
        Bom dia!
      </BdsTypo>
      <BdsTypo tag="h4" variant="fs-16">
        Para começar, faça o login na sua conta:
      </BdsTypo>
      <BdsButton icon="google" type-icon="logo" variant="tertiary">
        Login com o Google
      </BdsButton>
      <BdsTypo>ou</BdsTypo>
      <BdsGrid gap="2" direction="column" class="inputs">
        <bds-input placeholder="Insira aqui seu e-mail" label="E-mail"></bds-input>
        <bds-input placeholder="Insira aqui sua senha" label="Senha"></bds-input>
      </BdsGrid>
      <BdsGrid justify-content="flex-end">
        <Link to="/" className="forgot-password">
          <BdsTypo variant="fs-14" bold="bold">
            Esqueceu sua senha?
          </BdsTypo>
        </Link>
      </BdsGrid>

      <BdsGrid direction="row" justify-content="space-between" class="actions">
        <BdsButton variant="tertiary">Cadastra-se grátis</BdsButton>
        <Link to="/">
          <BdsButton>Entrar</BdsButton>
        </Link>
      </BdsGrid>
    </>
  );
};

export default Login;
