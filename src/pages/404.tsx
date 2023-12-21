import React from 'react';
import './error/Error.scss';
import { BdsGrid, BdsIllustration, BdsTypo, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

const PageNotFound = () => {
  return (
    <>
      <BdsGrid class="error-body" padding="2">
        <BdsGrid containerFluid alignItems="center" flexWrap="wrap">
          <BdsGrid xxs="12" xs="12" xg="12" sm="6" md="5" lg="4" justifyContent="center">
            <BdsIllustration class="illustration-error" type="default" name="robot-4"></BdsIllustration>
          </BdsGrid>
          <BdsGrid class="align-content" xxs="12" xs="12" xg="12" sm="6" md="7" lg="8" direction="column" gap="8">
            <BdsGrid direction="column" gap="2">
              <BdsTypo variant="fs-40" margin={false}>
                Página não encontrada
              </BdsTypo>
              <BdsTypo>
                A página que você procura não foi encontrada. Verifique se o endereço está correto ou volte para a
                página principal do Blip.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid direction="column" gap="2">
              <BdsGrid class="align-button">
                <BdsButton>Ir para a página principal</BdsButton>
              </BdsGrid>
            </BdsGrid>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </>
  );
};
export default PageNotFound;
