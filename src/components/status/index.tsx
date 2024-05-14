import { BdsButtonIcon } from 'blip-ds/dist/blip-ds-react/components';
import React, { useState, useEffect } from 'react';
import './styles.scss';

const Status = () => {
  const [status, setStatus] = useState('');
  const [components, setComponents] = useState([]);
  const [responseTime, setResponseTime] = useState(Number);
  const [problem, setProblem] = useState([]);
  const time_update = 5000;
  const [updateTime, setUpdateTime] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(0);
  const [detailUrl, setDetailUrl] = useState('');

  const fetchStatus = async () => {
    try {
      const startTime = Date.now();
      const response = await fetch('https://status.blip.ai/api/v2/summary.json');
      const endTime = Date.now();
      setResponseTime(endTime - startTime);
      if (!response.ok) {
        throw new Error('Failed to fetch status');
      }
    } catch (error) {
      setStatus('server-off');
    }
  };

  const checkMaintenance = async () => {
    try {
      const startTime = Date.now();
      const response = await fetch('https://status.blip.ai/api/v2/summary.json');
      const endTime = Date.now();
      setResponseTime(endTime - startTime);
      if (!response.ok) {
        throw new Error('Failed to fetch status');
      }
      const data = await response.json();
      const maintenanceComponents = data.components.filter(
        (component: { status: string }) => component.status === 'under_maintenance'
      );
      console.log(data);
      setDetailUrl(data.page.url);
      const isUnderMaintenance = maintenanceComponents.length > 0;
      setStatus(isUnderMaintenance ? 'maintenance' : 'operational');
      setComponents(maintenanceComponents);
      setProblem(data.incidents);
    } catch (error) {
      setStatus('server-off');
    }
  };

  useEffect(() => {
    setTimeout(fetchStatus, time_update);
    setTimeout(checkMaintenance, time_update);
  }, []);

  const handleUpdate = () => {
    setResponseTime(0);
    setComponents([]);
    setStatus('');
    setLastUpdateTime(Date.now());
    setTimeout(fetchStatus, time_update);
    setTimeout(checkMaintenance, time_update);
  };

  useEffect(() => {
    const interval = setInterval(fetchStatus, time_update);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateTime = () => {
    const now = Date.now();
    const differenceInSeconds = Math.floor((now - lastUpdateTime) / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    setUpdateTime(differenceInMinutes);
    if (differenceInMinutes >= 60) {
      handleUpdate();
    }
  };

  useEffect(() => {
    if (lastUpdateTime !== 0) {
      handleUpdateTime();
    }
    const interval = setInterval(handleUpdateTime, 60000);
    return () => clearInterval(interval);
  }, [lastUpdateTime]);

  const handleCard = () => {
    const card = document.querySelector('.status_card');
    card?.classList.toggle('active');
  };

  return (
    <bds-grid xxs="12" direction="row" height="100%">
      <bds-grid
        class="status_bar"
        padding="half"
        direction="row"
        gap="1"
        justify-content="space-between"
        onClick={() => handleCard()}
      >
        <bds-grid gap="half" align-items="center">
          {responseTime !== 0 ? (
            <bds-badge
              icon={status === 'server-off' ? 'close' : responseTime < time_update ? 'check' : 'warning'}
              color={status === 'server-off' ? 'danger' : responseTime < time_update ? 'success' : 'warning'}
            ></bds-badge>
          ) : (
            <bds-loading-spinner size="extra-small"></bds-loading-spinner>
          )}
          <bds-typo variant="fs-14">
            {responseTime === 0 ? 'Verificando conexão' : status === 'server-off' ? 'Sem conexão' : 'Conexão'}
          </bds-typo>
        </bds-grid>
        <div className="divisor"></div>
        <bds-grid gap="half" align-items="center">
          {status !== '' ? (
            <bds-badge
              icon={status === 'server-off' ? 'close' : status === 'operational' ? 'check' : 'warning'}
              color={status === 'server-off' ? 'danger' : status === 'operational' ? 'success' : 'warning'}
            ></bds-badge>
          ) : (
            <bds-loading-spinner size="extra-small"></bds-loading-spinner>
          )}

          <bds-typo variant="fs-14">
            {responseTime === 0
              ? 'Verificando os serviços Blip'
              : status === 'operational'
              ? 'Serviços Blip'
              : 'Serviços Blip instáveis'}
          </bds-typo>
        </bds-grid>
      </bds-grid>
      {/* Card de status */}
      <bds-grid class="status_card">
        <bds-card width="100%">
          <bds-grid direction='column' gap="2" padding="none">
            <bds-grid align-items="center" justify-content="space-between" margin='l-1' padding="none">
               <bds-typo variant="fs-16" bold="bold">
              Status dos serviços
            </bds-typo>
            <bds-grid gap="1" align-items="center">
              <bds-typo variant="fs-10">Atualizado há {updateTime} minutos</bds-typo>
              <BdsButtonIcon
                onBdsClick={() => handleUpdate()}
                variant="tertiary"
                size="short"
                icon="refresh"
              ></BdsButtonIcon>
              <BdsButtonIcon
                onBdsClick={() => handleCard()}
                variant="tertiary"
                size="short"
                icon="less"
              ></BdsButtonIcon>
            </bds-grid>
          
            </bds-grid>

            <bds-grid padding='none' class="problem-card">
              <bds-grid direction="column" padding='none' gap="1" xxs="12">
              {/* Card de conexão do usuário */}
              <bds-paper border elevation="none" width="100%">
                <bds-grid padding="1" xxs="12" justify-content="space-between" align-items="center">
                  <bds-grid xxs="11" align-items="center" gap="1">
                    <bds-icon name="plugin"></bds-icon>
                    <bds-grid xxs="11" direction="column">
                      <bds-typo variant="fs-16" bold="semi-bold">
                        Conexão
                      </bds-typo>
                      <bds-grid padding="none" align-items="center" justify-content="space-between">
                        <bds-typo variant="fs-12">
                          {responseTime === 0
                            ? 'Verificando conexão'
                            : status === 'server-off'
                            ? 'Sem conexão'
                            : 'Sua conexão está funcionando corretamente.'}
                        </bds-typo>
                        <bds-typo variant="fs-10">{responseTime} ms</bds-typo>
                      </bds-grid>
                    </bds-grid>
                  </bds-grid>
                  <bds-grid xxs="1" justify-content="center">
                    {responseTime !== 0 ? (
                      <bds-badge
                        icon={responseTime < time_update ? 'check' : 'warning'}
                        color={responseTime < time_update ? 'success' : 'warning'}
                      ></bds-badge>
                    ) : (
                      <bds-loading-spinner size="extra-small"></bds-loading-spinner>
                    )}
                  </bds-grid>
                </bds-grid>
              </bds-paper>
              {/* --------------------------- */}

              {/* Card de serviços Blip */}
              <bds-paper border elevation="none" width="100%">
                <bds-grid direction="column" class="problem_row">
                  <bds-grid padding="none" margin="y-1" xxs="12" justify-content="space-between" align-items="center">
                    <bds-grid xxs="11" align-items="center" gap="1">
                      <bds-icon name="cloud"></bds-icon>
                      <bds-grid xxs="11" direction="column">
                        <bds-typo variant="fs-16" bold="semi-bold">
                          Serviços Blip
                        </bds-typo>
                        <bds-grid padding="none" align-items="center" justify-content="space-between">
                          <bds-typo variant="fs-12">
                            {responseTime === 0
                              ? 'Verificando os serviços Blip'
                              : status === 'operational'
                              ? 'Os serviços Blip estão funcionando normalmente.'
                              : 'Serviços Blip instáveis'}
                          </bds-typo>
                        </bds-grid>
                      </bds-grid>
                    </bds-grid>
                    <bds-grid xxs="1" justify-content="center">
                      {status === 'operational' ? (
                        <bds-badge icon="check" color="success"></bds-badge>
                      ) : status !== '' && status !== 'operational' ? (
                        ''
                      ) : (
                        <bds-loading-spinner size="extra-small"></bds-loading-spinner>
                      )}
                    </bds-grid>
                  </bds-grid>

                  {status === 'maintenance' && components
                    ? components.map((obj: { name: string }) => (
                        <bds-grid key={obj.name} margin="y-3" padding="x-2" xxs="12" justify-content="space-between">
                          <bds-grid padding="l-1" direction="column">
                            <bds-typo variant="fs-14" bold="bold">
                              {obj.name}
                            </bds-typo>
                            <bds-typo variant="fs-14">
                              Estamos atuando na manutenção desse serviço. Você pode encontrar algumas interrupções no
                              funcionamento.
                            </bds-typo>
                          </bds-grid>
                          <bds-badge color="warning" icon="settings-builder"></bds-badge>
                        </bds-grid>
                      ))
                    : null}
                  {status === 'maintenance' && problem
                    ? problem.map((obj: any) => (
                        <bds-grid key={obj.name} margin="y-3" padding="x-2" xxs="12" justify-content="space-between">
                          <bds-grid padding="l-1" direction="column">
                            <bds-typo variant="fs-14" bold="bold">
                              {obj.name}
                            </bds-typo>
                            <bds-typo variant="fs-14">{obj.incident_updates[0].body}</bds-typo>
                          </bds-grid>
                          <bds-badge color="warning" icon="settings-builder"></bds-badge>
                        </bds-grid>
                      ))
                    : null}
                </bds-grid>
              </bds-paper>
              {/* -------------------------------- */}
              <bds-grid justify-content="flex-end" margin="y-2">
                <bds-button
                  variant="tertiary"
                  size="short"
                  onClick={() => {
                    window.open(detailUrl);
                  }}
                >
                  Mais detalhes
                </bds-button>
              </bds-grid>
            </bds-grid>
            </bds-grid>
          </bds-grid>
           
        
            
          
        </bds-card>
      </bds-grid>
    </bds-grid>
  );
};

export default Status;
