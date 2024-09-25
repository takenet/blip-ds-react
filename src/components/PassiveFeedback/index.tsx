import React, { useState, useEffect } from 'react';
import { Props, StateFeedback, StateForm, SubmitType } from './passive-feedback-interface';
import {
  BdsButton,
  BdsGrid,
  BdsIllustration,
  BdsInput,
  BdsPaper,
  BdsSidebar,
  BdsTypo,
  BdsUpload,
} from 'blip-ds/dist/blip-ds-react/components';
import './passive-feedback.scss';

const PassiveFeedback = (props: Props) => {
  const functionTitle = props.functionTitle ? props.functionTitle : null;
  const [stateFeedback, setStateFeedback] = useState<StateFeedback>('default');
  const [StateForm, setStateForm] = useState<StateForm>('closed');
  const [titleCard, setTitleCard] = useState<string>();
  const [descriptionCard, setDescriptionCard] = useState<string>();
  const [titleSidebar, setTitleSidebar] = useState<string>();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [dataSubmit, setDataSubmit] = useState<SubmitType>();

  const onLikeFeedback = new CustomEvent('onLikeFeedback', { detail: `Fuction ${functionTitle} is liked.` });
  const onDisikeFeedback = new CustomEvent('onDisikeFeedback', { detail: `Fuction ${functionTitle} is disliked.` });
  const onSubmitFeedback = new CustomEvent('onSubmitFeedback', { detail: dataSubmit });

  useEffect(() => {
    if (stateFeedback === 'dislike' || stateFeedback === 'like') {
      setDataSubmit({
        functionTitle: functionTitle ? functionTitle : '',
        ...dataSubmit,
        stateFeedback: stateFeedback,
      });
    }
    switch (stateFeedback) {
      case 'default':
        functionTitle && setTitleCard(`Em relação à ${functionTitle}, conte o que você está achando.`);
        break;
      case 'like':
        setTitleCard('Obrigado pela sua opinião');
        setDescriptionCard('Ficamos muito felizes com sua satisfação ');
        window.dispatchEvent(onLikeFeedback);
        break;
      case 'dislike':
        setTitleCard('Nos ajude a melhorar...');
        setDescriptionCard('Por favor, nos conte mais sobre sua experiência');
        window.dispatchEvent(onDisikeFeedback);
        break;
      case 'success':
        setTitleCard('Obrigado por compartilhar');
        setDescriptionCard('Fique a vontade para .....');
        window.dispatchEvent(onSubmitFeedback);
        break;
    }
  }, [stateFeedback]);

  useEffect(() => {
    if (StateForm != 'closed') {
      setDataSubmit({
        ...dataSubmit,
        stateForm: StateForm,
      });
      switch (StateForm) {
        case 'suggestion':
          setTitleSidebar('Fazer uma sugestão');
          break;
        case 'problem':
          setTitleSidebar('Informar um problema');
          break;
        case 'rate':
          setTitleSidebar('Avaliar funcionalidade');
          break;
      }
    }
  }, [StateForm]);

  const onInputDescription = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    setDataSubmit({ ...dataSubmit, description: input ? input.value : '' });
  };

  const likeButton = () => {
    setStateFeedback('like');
  };

  const dislikeButton = () => {
    setStateFeedback('dislike');
  };

  const suggestionButton = () => {
    setStateForm('suggestion');
    setOpenSidebar(true);
  };

  const problemButton = () => {
    setStateForm('problem');
    setOpenSidebar(true);
  };

  const rateButton = () => {
    setStateForm('rate');
    setOpenSidebar(true);
  };

  const sendButton = () => {
    setStateFeedback('success');
    setOpenSidebar(false);
  };

  return (
    <>
      <BdsPaper border>
        <BdsGrid justifyContent="space-between" padding="2" alignItems="center">
          <BdsGrid gap="2" padding="none" alignItems="center">
            {stateFeedback === 'like' && (
              <BdsIllustration type="blip-solid" name="lovely" class="illustration-feedback"></BdsIllustration>
            )}
            {stateFeedback === 'dislike' && (
              <BdsIllustration type="blip-solid" name="sad" class="illustration-feedback"></BdsIllustration>
            )}
            {(stateFeedback === 'default' || stateFeedback === 'success') && (
              <BdsIllustration type="blip-solid" name="heart" class="illustration-feedback"></BdsIllustration>
            )}
            <BdsGrid direction="column" gap="half">
              <BdsTypo variant="fs-16" margin={false} bold="bold">
                {titleCard}
              </BdsTypo>
              {descriptionCard && (
                <BdsTypo variant="fs-14" margin={false}>
                  {descriptionCard}
                </BdsTypo>
              )}
            </BdsGrid>
          </BdsGrid>
          <BdsGrid padding="none" gap="2">
            {stateFeedback === 'default' && (
              <>
                <BdsButton onBdsClick={() => dislikeButton()} variant="tertiary" icon="deslike">
                  Não Gostei
                </BdsButton>
                <BdsButton onBdsClick={() => likeButton()} variant="tertiary" icon="like">
                  Gostei
                </BdsButton>
              </>
            )}
            {stateFeedback === 'like' && (
              <BdsButton onBdsClick={() => suggestionButton()} variant="tertiary" icon="heart">
                Fazer uma sugestão
              </BdsButton>
            )}
            {stateFeedback === 'dislike' && (
              <BdsButton onBdsClick={() => problemButton()} variant="tertiary" icon="target">
                Informar um problema
              </BdsButton>
            )}
            {(stateFeedback === 'dislike' || stateFeedback === 'like') && (
              <BdsButton onBdsClick={() => rateButton()} icon="favorite">
                Avaliar Funcionalidade
              </BdsButton>
            )}
          </BdsGrid>
        </BdsGrid>
      </BdsPaper>
      <BdsSidebar
        width={500}
        sidebarPosition="right"
        isOpen={openSidebar}
        onBdsToggle={(ev) => setOpenSidebar(ev.detail.value)}
      >
        <BdsGrid slot="header" direction="column" gap="1">
          <BdsTypo variant="fs-20" bold="bold" margin={false}>
            {titleSidebar}
          </BdsTypo>
          {(StateForm === 'rate' || StateForm === 'suggestion') && (
            <BdsTypo variant="fs-14" margin={false}>
              Conte-nos como está sendo sua experiência em relação à "{functionTitle}".
            </BdsTypo>
          )}
        </BdsGrid>
        <BdsGrid slot="body" direction="column" gap="2">
          <BdsInput
            type="text"
            isTextarea
            rows={5}
            label="Descreva sua experiência com esse produto"
            placeholder="placeholder"
            onBdsInput={(ev) => onInputDescription(ev)}
          ></BdsInput>
          {StateForm === 'problem' && (
            <>
              <BdsUpload
                multiple
                titleName="Captura de tela"
                subtitle="Uma captura de tela vai nos ajudar a entender melhor o problema (opcional)"
                onBdsUploadChange={(ev) => setDataSubmit({ ...dataSubmit, screenshot: ev.detail.value })}
              ></BdsUpload>
            </>
          )}
        </BdsGrid>
        <BdsGrid justifyContent="space-between" slot="footer">
          <BdsButton onBdsClick={() => setOpenSidebar(false)} variant="secondary">
            Cancelar
          </BdsButton>
          <BdsButton onBdsClick={() => sendButton()}>Enviar</BdsButton>
        </BdsGrid>
      </BdsSidebar>
    </>
  );
};

export default PassiveFeedback;
