import React from 'react';
import { useLocation } from 'react-router-dom';
import './portal.scss';
import { Props } from './theme-interface';
import {
  BdsAvatar,
  BdsButton,
  BdsButtonIcon,
  BdsDropdown,
  BdsGrid,
  BdsIcon,
  BdsIllustration,
  BdsList,
  BdsListItem,
  BdsNavbar,
  BdsNavbarContent,
  BdsThemeProvider,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';
import Status from '../components/status';

const Portal = (props: Props) => {
  const location = useLocation();
  return (
    <bds-grid height="100%" xxs="12" direction="column">
      <BdsThemeProvider theme="dark" class="header">
        <bds-grid height="100%" align-items="center">
          <BdsDropdown class="contract-maneger" position="bottom-right">
            <bds-grid slot="dropdown-activator">
              <BdsListItem clickable text="Contrato 1" avatarName="Contrato 1" secondaryText="Standard">
                <bds-grid slot="action-area">
                  <bds-button-icon icon="arrow-down" size="short" variant="secondary" />
                </bds-grid>
              </BdsListItem>
            </bds-grid>
            <bds-grid slot="dropdown-content">
              <BdsList type-list="default">
                <BdsListItem clickable value="01">
                  <bds-list-item-content>
                    <bds-typo>Contrato 1</bds-typo>
                  </bds-list-item-content>
                </BdsListItem>
                <BdsListItem clickable value="01">
                  <bds-list-item-content>
                    <bds-typo>Contrato 2</bds-typo>
                  </bds-list-item-content>
                </BdsListItem>
                <BdsListItem clickable value="01">
                  <bds-list-item-content>
                    <bds-typo>Contrato 3</bds-typo>
                  </bds-list-item-content>
                </BdsListItem>
              </BdsList>
            </bds-grid>
          </BdsDropdown>
          <div className="divisor"></div>
          <BdsNavbar orientation="horizontal" backgroundColor="surface-2" class="nav-header">
            <BdsNavbarContent class="nav-header-itens">
              <bds-typo class="item">Home</bds-typo>
              <bds-typo class="item">Blip Store</bds-typo>
            </BdsNavbarContent>
          </BdsNavbar>
        </bds-grid>
        <BdsIllustration type="brand" name="blip-ballon-blue-white-horizontal" class="logo"></BdsIllustration>
        <BdsNavbar backgroundColor="surface-3" orientation="horizontal" class="user-maneger">
          <BdsNavbarContent>
            <BdsButtonIcon size="short" variant="secondary" icon="settings-general"></BdsButtonIcon>
            <BdsButtonIcon size="short" variant="secondary" icon="question"></BdsButtonIcon>
            <BdsButtonIcon size="short" variant="secondary" icon="bell"></BdsButtonIcon>
            <BdsAvatar name="Dwight Schrute" size="small"></BdsAvatar>
          </BdsNavbarContent>
        </BdsNavbar>
      </BdsThemeProvider>
      {location.pathname === "/home-chatbot" &&
        <BdsThemeProvider theme="light" class="nav-chatbot">
          <bds-grid height="fit-content" xxs="12" direction="column" class="work-contract">
            <bds-grid container container-fluid>
              <bds-grid height="100%" xxs="12" direction="column">
                <BdsNavbar orientation="horizontal" justifyContent="space-between">
                  <BdsNavbarContent>
                    <BdsDropdown class="contract-maneger" position="bottom-right">
                      <bds-grid slot="dropdown-activator">
                        <BdsListItem clickable text="Bot Name" avatarName="Bot Name" secondaryText="Standard">
                          <bds-grid slot="action-area">
                            <bds-button-icon icon="arrow-down" size="short" variant="secondary" />
                          </bds-grid>
                        </BdsListItem>
                      </bds-grid>
                      <bds-grid slot="dropdown-content">
                        <BdsList type-list="default">
                          <BdsListItem clickable value="01">
                            <bds-list-item-content>
                              <bds-typo>Contrato 1</bds-typo>
                            </bds-list-item-content>
                          </BdsListItem>
                          <BdsListItem clickable value="01">
                            <bds-list-item-content>
                              <bds-typo>Contrato 2</bds-typo>
                            </bds-list-item-content>
                          </BdsListItem>
                          <BdsListItem clickable value="01">
                            <bds-list-item-content>
                              <bds-typo>Contrato 3</bds-typo>
                            </bds-list-item-content>
                          </BdsListItem>
                        </BdsList>
                      </bds-grid>
                    </BdsDropdown>
                  </BdsNavbarContent>
                  <BdsNavbarContent>
                    <BdsGrid gap="4" padding="none">
                      <BdsTypo margin={false}>Builder</BdsTypo>
                      <BdsTypo margin={false}>Atendimento</BdsTypo>
                      <BdsTypo margin={false}>Análise</BdsTypo>
                      <BdsTypo margin={false}>Growth</BdsTypo>
                      <BdsTypo margin={false}>Canais</BdsTypo>
                      <BdsIcon theme="outline" name="more-options-horizontal" size="medium"></BdsIcon>
                    </BdsGrid>
                  </BdsNavbarContent>
                  <BdsNavbarContent>
                    <BdsGrid gap="2" padding="none">
                      <BdsIcon theme="outline" name="integration" size="medium"></BdsIcon>
                      <BdsIcon theme="outline" name="settings-general" size="medium"></BdsIcon>
                      <BdsIcon theme="outline" name="team" size="medium"></BdsIcon>
                      <BdsIcon theme="outline" name="builder-test-bot" size="medium"></BdsIcon>
                    </BdsGrid>
                  </BdsNavbarContent>
                </BdsNavbar>
              </bds-grid>
            </bds-grid>
          </bds-grid>
        </BdsThemeProvider>
      }
      {location.pathname === "/home" &&
        <bds-grid height="fit-content" xxs="12" direction="column" class="work-contract">
          <bds-grid container container-fluid>
            <bds-grid height="100%" xxs="12" direction="column" justifyContent='space-between'>
              <BdsNavbar orientation="horizontal" justifyContent="space-between">
                <BdsNavbarContent>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    Espaço de trabalho de Contrato 1
                  </bds-typo>
                </BdsNavbarContent>
                <BdsNavbarContent>
                  <BdsIcon theme="outline" name="search" size="medium"></BdsIcon>
                  <BdsButton icon="message-sent" variant="tertiary">
                    Criar Roteador
                  </BdsButton>
                  <BdsButton icon="message-ballon"> Criar Chatbot </BdsButton>
                </BdsNavbarContent>
              </BdsNavbar>
            </bds-grid>
          </bds-grid>
        </bds-grid>
      }
      <bds-grid height="100%" xxs="12" direction="column" class="content" justify-content='space-between'>
        {props.slot}
        <bds-grid xxs="12" container margin="y-2" padding='x-5' flex-wrap="wrap" align-items="center" direction="row" justify-content="space-between" class="footer">
          <bds-grid justify-content="center" gap="1">
            <BdsTypo variant="fs-12">© 2022 Blip - Powered by Take</BdsTypo>
            <BdsTypo variant="fs-12">|</BdsTypo>
            <BdsTypo variant="fs-12">Todos os direitos reservados</BdsTypo>
            <BdsTypo variant="fs-12">|</BdsTypo>
            <BdsTypo variant="fs-12">Termos de uso</BdsTypo>
          </bds-grid>
          <bds-grid>
            <Status />
          </bds-grid>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
};
export default Portal;
