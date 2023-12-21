import React from 'react';
import './home.scss';
import {
  BdsAvatar,
  BdsButton,
  BdsCard,
  BdsCardBody,
  BdsGrid,
  BdsIcon,
  BdsIllustration,
  BdsPaper,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';

const data = [
  { name: 'Nome do Chatbot', value: 1, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 2, type: 'Roteador' },
  { name: 'Nome do Chatbot', value: 3, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 4, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 5, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 6, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 7, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 8, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 9, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 10, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 11, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 12, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 13, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 14, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 15, type: 'Builder' },
  { name: 'Nome do Chatbot', value: 16, type: 'Builder' },
];

const Home = () => {
  return (
    <>
      <BdsGrid margin="y-4" container container-fluid flex-wrap="wrap">
        <BdsGrid xxs="12" xs="12" sm="12" md="12" lg="12" xg="12" margin="y-2" direction="column">
          <BdsPaper class="w-100">
            <BdsGrid margin="y-4" container container-fluid align-items="center" flex-wrap="wrap">
              <BdsGrid xxs="12" xs="12" sm="12" md="3" lg="3" xg="3" margin="y-2" direction="column" padding="x-6">
                <BdsIllustration type="blip-solid" name="agent" class="illustration-bot"></BdsIllustration>
              </BdsGrid>
              <BdsGrid xxs="12" xs="12" sm="12" md="9" lg="9" xg="9" margin="y-2" direction="column">
                <BdsGrid direction="column" padding="none" margin="b-2">
                  <BdsTypo variant="fs-16" bold="bold">
                    Olá Thiago
                  </BdsTypo>
                  <BdsTypo variant="fs-16">
                    Para começar a sua jornada, que tal criar seu primeiro contato inteligênte?
                  </BdsTypo>
                </BdsGrid>
                <BdsButton icon="message-ballon" variant="tertiary">
                  Criar chatbot
                </BdsButton>
              </BdsGrid>
            </BdsGrid>
          </BdsPaper>
        </BdsGrid>
        <BdsGrid xxs="12" xs="12" sm="12" md="4" lg="4" xg="4" margin="y-2" direction="column">
          <BdsCard clickable width="100%" class="card-initial-config">
            <BdsCardBody class="card-initial-config-body">
              <BdsGrid container container-fluid height="160px" align-items="center" flex-wrap="wrap">
                <BdsGrid xxs="3" xs="3" sm="2" md="2" lg="2" xg="2" justify-content="center">
                  <BdsIcon theme="outline" name="business" size="x-large" class="icon-card"></BdsIcon>
                </BdsGrid>
                <BdsGrid xxs="9" xs="9" sm="10" md="10" lg="10" xg="10" margin="y-2" direction="column">
                  <BdsTypo variant="fs-16" bold="bold">
                    Painel de contrato
                  </BdsTypo>
                  <BdsTypo variant="fs-16">Gerencie membros e informações importantes do seu contrato.</BdsTypo>
                </BdsGrid>
              </BdsGrid>
            </BdsCardBody>
          </BdsCard>
        </BdsGrid>
        <BdsGrid xxs="12" xs="12" sm="12" md="4" lg="4" xg="4" margin="y-2" direction="column">
          <BdsCard clickable width="100%" class="card-initial-config">
            <BdsCardBody class="card-initial-config-body">
              <BdsGrid container container-fluid height="160px" align-items="center" flex-wrap="wrap">
                <BdsGrid xxs="3" xs="3" sm="2" md="2" lg="2" xg="2" justify-content="center">
                  <BdsIcon theme="outline" name="builder-publish-bot" size="x-large" class="icon-card"></BdsIcon>
                </BdsGrid>
                <BdsGrid xxs="9" xs="9" sm="10" md="10" lg="10" xg="10" margin="y-2" direction="column">
                  <BdsTypo variant="fs-16" bold="bold">
                    Aprenda a utilizar o Blip
                  </BdsTypo>
                  <BdsTypo variant="fs-16">
                    Conheça nossos conteúdos e aprenda a utilizar o máximo da plataforma
                  </BdsTypo>
                </BdsGrid>
              </BdsGrid>
            </BdsCardBody>
          </BdsCard>
        </BdsGrid>
        <BdsGrid xxs="12" xs="12" sm="12" md="4" lg="4" xg="4" margin="y-2" direction="column">
          <BdsCard clickable width="100%" class="card-initial-config">
            <BdsCardBody class="card-initial-config-body">
              <BdsGrid container container-fluid height="160px" align-items="center" flex-wrap="wrap">
                <BdsGrid xxs="3" xs="3" sm="2" md="2" lg="2" xg="2" justify-content="center">
                  <BdsIcon theme="outline" name="question" size="x-large" class="icon-card"></BdsIcon>
                </BdsGrid>
                <BdsGrid xxs="9" xs="9" sm="10" md="10" lg="10" xg="10" margin="y-2" direction="column">
                  <BdsTypo variant="fs-16" bold="bold">
                    Tire suas dúvidas com a Blip Community
                  </BdsTypo>
                  <BdsTypo variant="fs-16">Potencialize seus resultados com os nossos conteúdos.</BdsTypo>
                </BdsGrid>
              </BdsGrid>
            </BdsCardBody>
          </BdsCard>
        </BdsGrid>
        <BdsGrid
          xxs="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xg="12"
          margin="t-2"
          justify-content="space-between"
          align-items="center"
        ></BdsGrid>
        <BdsGrid xxs="12" margin="y-2" justify-content="space-between" align-items="center">
          <BdsTypo variant="fs-20" bold="bold" margin={false}>
            Chatbotss em Contrato 1
          </BdsTypo>
          <BdsButton icon="message-sent" variant="tertiary">
            Criar Chatbot
          </BdsButton>
        </BdsGrid>
        <BdsGrid xxs="12" margin="b-4" justify-content="space-between" align-items="center">
          <div className="divisor"></div>
        </BdsGrid>
        {data.map((item, index) => (
          <BdsGrid key={index} xxs="12" xs="12" sm="3" md="3" lg="2" xg="2" margin="y-2" direction="column">
            <BdsCard clickable width="100%" class="card-chatbot-body">
              <BdsCardBody>
                <BdsGrid
                  height="160px"
                  align-items="center"
                  padding="y-2"
                  direction="column"
                  gap="1"
                  justify-content="center"
                  xxs="12"
                >
                  <BdsAvatar name={item.name} size="extra-large" />
                  <BdsTypo variant="fs-16" bold="bold" margin={false}>
                    {item.name}
                  </BdsTypo>
                  <BdsTypo variant="fs-12" margin={false}>
                    {item.type}
                  </BdsTypo>
                </BdsGrid>
              </BdsCardBody>
            </BdsCard>
          </BdsGrid>
        ))}
        ;
      </BdsGrid>
    </>
  );
};
export default Home;
