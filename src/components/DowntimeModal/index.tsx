import React, { useState, useEffect } from 'react';
import {
  BdsButton,
  BdsChipTag,
  BdsGrid,
  BdsIllustration,
  BdsModal,
  BdsModalAction,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';
import { Props } from './DowntimeModal-interface';
import showWebNotification from '../Notification';
import { iconType } from '../Notification/Notification-interface';

const DownTimeModal = (props: Props) => {
  const downtime = props.downtime ? props.downtime : 1200;
  const waintingTime = props.waintingTime ? props.waintingTime : 300;
  const [openWaintingTimeModal, setOpenWaintingTimeModal] = useState(false);
  const [openDowntimeModal, setOpenDowntimeModal] = useState(false);
  const [secondsDowntime, setSecondsDowntime] = useState(0);
  const [secondsWaintingTime, setSecondsWaintingTime] = useState(0);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      setSecondsDowntime((v) => v + 1);
    }, 1000);
    return () => {
      clearInterval(secondInterval);
    };
  }, []);

  useEffect(() => {
    if (secondsDowntime == downtime) {
      showWebNotification(
        notificationData.title,
        notificationData.description,
        notificationData.icon as iconType,
        notificationData.uptime
      );
      setOpenWaintingTimeModal(true);
    }
  }, [secondsDowntime]);

  useEffect(() => {
    if (openWaintingTimeModal) {
      const secondInterval = setInterval(() => {
        setSecondsWaintingTime((v) => v + 1);
      }, 1000);
      return () => {
        clearInterval(secondInterval);
      };
    } else {
      setSecondsWaintingTime(0);
    }
  }, [openWaintingTimeModal]);

  useEffect(() => {
    if (secondsWaintingTime == waintingTime) {
      setOpenWaintingTimeModal(false);
      setOpenDowntimeModal(true);
    }
  }, [secondsWaintingTime]);

  const notificationData = {
    title: 'Você ainda está aí?',
    description: 'Sua sessão está inativa e será desconectada automaticamente.',
    icon: {
      type: 'brand',
      name: 'blip-ballon-blue',
    },
    uptime: 10,
  };

  // Request notification in the browser.
  Notification.requestPermission();

  const getNotification = (ev: CustomEvent) => {
    const notification = ev.detail as Notification;
    notification.addEventListener('click', () => {
      window.focus();
    });
  };

  const formatSeconds = (s: number) => {
    const timeFormat = new Date(s * 1000).toISOString().substring(14, 19);
    return timeFormat;
  };

  window.addEventListener('pushWebNotification', (ev) => getNotification(ev as CustomEvent), false);

  window.onmousemove = () => {
    setSecondsDowntime(0);
  };

  window.onclick = () => {
    setSecondsDowntime(0);
  };

  window.onkeydown = () => {
    setSecondsDowntime(0);
  };

  const doSomethingLogOut = () => {
    setOpenWaintingTimeModal(false);
    setOpenDowntimeModal(false);
  };

  const doSomethingContinue = () => {
    setOpenWaintingTimeModal(false);
    setOpenDowntimeModal(false);
  };

  return (
    <>
      <BdsModal open={openWaintingTimeModal} closeButton={false} outzoneClose={false}>
        <span></span>
        <BdsGrid flexWrap="wrap" alignItems="center">
          <BdsGrid xxs="4" padding="2" direction="column">
            <BdsIllustration type="spots" name="empty" />
          </BdsGrid>
          <BdsGrid xxs="8" padding="l-4" direction="column" gap="2">
            {secondsWaintingTime > 0 && <BdsChipTag>{formatSeconds(waintingTime - secondsWaintingTime)}</BdsChipTag>}
            <BdsTypo variant="fs-20" bold="bold" margin={false}>
              Você ainda está aí?
            </BdsTypo>
            <BdsTypo variant="fs-16">Sua sessão está inativa e será desconectada automaticamente.</BdsTypo>
            <BdsTypo variant="fs-16">Clique no botão para continuar na sessão.</BdsTypo>
            <BdsTypo variant="fs-16">
              <b>Importante:</b> os dados que não forem salvos serão perdidos.
            </BdsTypo>
          </BdsGrid>
        </BdsGrid>
        <BdsModalAction>
          <BdsGrid xxs="12" gap="2" justifyContent="flex-end">
            <BdsButton onBdsClick={() => doSomethingLogOut()} variant="tertiary">
              Sair
            </BdsButton>
            <BdsButton onBdsClick={() => doSomethingContinue()}>Continuar</BdsButton>
          </BdsGrid>
        </BdsModalAction>
      </BdsModal>
      <BdsModal open={openDowntimeModal} closeButton={false} outzoneClose={false}>
        <span></span>
        <BdsGrid flexWrap="wrap" alignItems="center">
          <BdsGrid xxs="4" padding="2" direction="column">
            <BdsIllustration type="spots" name="clock-1" />
          </BdsGrid>
          <BdsGrid xxs="8" padding="l-4" direction="column" gap="2">
            <BdsTypo variant="fs-20" bold="bold" margin={false}>
              Tempo limite de sessão!
            </BdsTypo>
            <BdsTypo variant="fs-16">Você atingiu o tempo limite da sua sessão. </BdsTypo>
            <BdsTypo variant="fs-16">Clique no botão para fazer o login novamente. </BdsTypo>
          </BdsGrid>
        </BdsGrid>
        <BdsModalAction>
          <BdsGrid xxs="12" gap="2" justifyContent="flex-end">
            <BdsButton onBdsClick={() => doSomethingLogOut()}>Logar novamente</BdsButton>
          </BdsGrid>
        </BdsModalAction>
      </BdsModal>
    </>
  );
};

export default DownTimeModal;
