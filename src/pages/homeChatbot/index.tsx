import React from 'react';
import './home.scss';
import {
  BdsAvatar,
  BdsAvatarGroup,
  BdsBadge,
  BdsButton,
  BdsButtonIcon,
  BdsGrid,
  BdsIcon,
  BdsList,
  BdsListItem,
  BdsListItemContent,
  BdsPaper,
  BdsSelect,
  BdsSelectOption,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';
import { AvatarDataList } from 'blip-ds/dist/types/components/avatar-group/avatar-group-interface';

const dataUsers = [
  { id: '1', name: 'Michael Scott' },
  { id: '2', name: 'Dwight Schrute' },
  { id: '3', name: 'Jim Halpert' },
  { id: '4', name: 'Pam Beesly' },
  { id: '5', name: 'Ryan Howard' },
  { id: '6', name: 'Andy Bernard' },
];

const dataFirstAction = [
  { title: 'Entendendo o builder', describe: 'Conheça a ferramenta de criação de contatos inteligentes do Blip.', conclude: true },
  { title: 'Conhecendo os canais', describe: 'Confira onde você pode publicar o seu bot.', conclude: false },
  { title: 'Ativando o módulo de atendimento humano', describe: 'Saiba como trazer sua operação de atendimento para seu contato inteligente', conclude: false },
  { title: 'Coletando os dados do seu contato inteligente', describe: 'Saiba como utilizar eventos personalizados para acompanhar as métricas do seu contato', conclude: false },
];

const HomeChatbot = () => {
  return (
    <>
      <BdsGrid margin="y-2" container container-fluid flex-wrap="wrap" class="home-chatbot">
        <BdsGrid xxs="12" xs="12" sm="12" md="12" lg="12" xg="12" margin="y-2" direction="column">
          <BdsList>
            <BdsListItem>
              <BdsListItemContent>
                <BdsAvatar name="Name Bot" size="extra-large"></BdsAvatar>
              </BdsListItemContent>
              <BdsListItemContent>
                <BdsTypo>Bot Name</BdsTypo>
                <BdsTypo variant="fs-12">ID: botName</BdsTypo>
              </BdsListItemContent>
              <BdsListItemContent direction="row" gap="1">
                <BdsIcon theme="outline" size="medium" name="edit"></BdsIcon>
              </BdsListItemContent>
              <BdsGrid slot="action-area" class="bot-date">
                <BdsTypo variant="fs-12"> Criado em 27/07/2021 </BdsTypo>
              </BdsGrid>
            </BdsListItem>
          </BdsList>
        </BdsGrid>
        <BdsGrid xxs="12" xs="12" sm="12" md="6" lg="6" xg="6" direction="column">
          <BdsPaper class="w-100">
            <BdsGrid flex-wrap="wrap" direction="column" padding="y-4">
              <BdsGrid padding="x-3" flex-wrap="wrap" direction="column">
                <BdsTypo variant="fs-20" bold="bold">
                  Primeiros passos
                </BdsTypo>
              </BdsGrid>
              <BdsGrid padding="none" direction="column" gap="2">
                {dataFirstAction.map((item, index) => (
                  <BdsListItem key={index}>
                    <BdsListItemContent>
                      <BdsBadge
                        color={item.conclude ? "success" : "neutral"}
                        icon={item.conclude ? "check" : undefined}
                        number={!item.conclude ? index + 1 : undefined}
                        shape="circle"
                      />
                    </BdsListItemContent>
                    <BdsListItemContent>
                      <BdsTypo>{item.title}</BdsTypo>
                      <BdsTypo variant="fs-12">{item.describe}</BdsTypo>
                    </BdsListItemContent>
                    <BdsGrid slot="action-area">
                      <BdsButtonIcon icon="arrow-right" variant="secondary" size="short"></BdsButtonIcon>
                    </BdsGrid>
                  </BdsListItem>
                ))}
              </BdsGrid>
            </BdsGrid>
          </BdsPaper>
        </BdsGrid>
        <BdsGrid xxs="12" xs="12" sm="12" md="6" lg="6" xg="6" direction="column" gap="2" padding="none">
          <BdsGrid xxs="12" xs="12" sm="12" md="12" lg="12" xg="12" flexWrap="wrap" padding="none" class="actions-port">
            <BdsGrid xxs="12" xs="12" sm="12" md="6" lg="6" xg="6" >
              <BdsPaper class="w-100">
                <BdsGrid flex-wrap="wrap" direction="column" padding="4" gap="2">
                  <BdsTypo variant="fs-20" bold="bold" margin={false}>
                    Canais
                  </BdsTypo>
                  <BdsGrid gap="1" padding="none">
                    <BdsIcon type="logo" name="blip-chat"></BdsIcon>
                    <BdsIcon type="logo" name="email"></BdsIcon>
                  </BdsGrid>
                  <BdsGrid padding="none" justifyContent="flex-end">
                    <BdsButton variant="tertiary"> Ver Canais </BdsButton>
                  </BdsGrid>
                </BdsGrid>
              </BdsPaper>
            </BdsGrid>
            <BdsGrid xxs="12" xs="12" sm="12" md="6" lg="6" xg="6" >
              <BdsPaper class="w-100">
                <BdsGrid flex-wrap="wrap" direction="column" padding="4" gap="2">
                  <BdsTypo variant="fs-20" bold="bold" margin={false}>
                    Equipe
                  </BdsTypo>
                  <BdsAvatarGroup size="micro" users={dataUsers as AvatarDataList[]}></BdsAvatarGroup>
                  <BdsGrid padding="none" justifyContent="flex-end">
                    <BdsButton variant="tertiary"> Adicionar equipe </BdsButton>
                  </BdsGrid>
                </BdsGrid>
              </BdsPaper>
            </BdsGrid>
          </BdsGrid>
          <BdsGrid xxs="12" xs="12" sm="12" md="12" lg="12" xg="12" flexWrap="wrap">
            <BdsPaper class="w-100">
              <BdsGrid flex-wrap="wrap" direction="column" padding="4" gap="2">
                <BdsTypo variant="fs-20" bold="bold" margin={false}>
                  Preferências
                </BdsTypo>
                <BdsGrid gap="1" padding="none">
                  <BdsSelect label="Cultura" value={1} optionsPosition="top">
                    <BdsSelectOption value="1">
                      Portuguese
                    </BdsSelectOption>
                    <BdsSelectOption value="2">
                      Portuguese
                    </BdsSelectOption>
                    <BdsSelectOption value="3">
                      Portuguese
                    </BdsSelectOption>
                    <BdsSelectOption value="4">
                      Portuguese
                    </BdsSelectOption>
                    <BdsSelectOption value="5">
                      Portuguese
                    </BdsSelectOption>
                    <BdsSelectOption value="6">
                      Portuguese
                    </BdsSelectOption>
                  </BdsSelect>
                  <BdsSelect label="Fuso Horário" value={1} optionsPosition="top">
                    <BdsSelectOption value="1">
                      (UTC-03:00) Brasilia
                    </BdsSelectOption>
                    <BdsSelectOption value="2">
                      (UTC-03:00) Brasilia
                    </BdsSelectOption>
                    <BdsSelectOption value="3">
                      (UTC-03:00) Brasilia
                    </BdsSelectOption>
                    <BdsSelectOption value="4">
                      (UTC-03:00) Brasilia
                    </BdsSelectOption>
                    <BdsSelectOption value="5">
                      (UTC-03:00) Brasilia
                    </BdsSelectOption>
                    <BdsSelectOption value="6">
                      (UTC-03:00) Brasilia
                    </BdsSelectOption>
                  </BdsSelect>
                  <BdsSelect label="Plano" value={1} optionsPosition="top" disabled>
                    <BdsSelectOption value="1">
                      Standard
                    </BdsSelectOption>
                    <BdsSelectOption value="2">
                      Standard
                    </BdsSelectOption>
                    <BdsSelectOption value="3">
                      Standard
                    </BdsSelectOption>
                  </BdsSelect>
                </BdsGrid>
                <BdsGrid padding="none" justifyContent="flex-end">
                  <BdsButton variant="primary" disabled> Aplicar alterações </BdsButton>
                </BdsGrid>
              </BdsGrid>
            </BdsPaper>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </>
  );
};
export default HomeChatbot;
