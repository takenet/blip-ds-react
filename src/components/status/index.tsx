import { BdsButtonIcon } from 'blip-ds/dist/blip-ds-react/components';
import React, { useState, useEffect } from 'react';
import './styles.scss';

const Status = () => {
  const [status, setStatus] = useState('');
  const [components, setComponents] = useState([]);
  const [responseTime, setResponseTime] = useState(Number);
  const [problem, setProblem] = useState([]);
  const time_update = 50000;

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

      const isUnderMaintenance = maintenanceComponents.length > 0;

      setStatus(isUnderMaintenance ? 'maintenance' : 'operational');
      setComponents(maintenanceComponents);
      setProblem(data.incidents);
    } catch (error) {
      setStatus('server-off');
    }
  };

  useEffect(() => {
    setTimeout(fetchStatus, 3000);
    setTimeout(checkMaintenance, 3000);
  }, []);

  const handleUpdate = () => {
    setComponents([]);
    setStatus('');
    setTimeout(fetchStatus, 3000);
    setTimeout(checkMaintenance, 3000);
  };

  useEffect(() => {
    const interval = setInterval(fetchStatus, time_update);
    return () => clearInterval(interval);
  }, []);

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
              icon={status === 'server-off' ? 'close' : responseTime < 3000 ? 'check' : 'warning'}
              color={status === 'server-off' ? 'danger' : responseTime < 3000 ? 'success' : 'warning'}
            ></bds-badge>
          ) : (
            <bds-loading-spinner size="extra-small"></bds-loading-spinner>
          )}
          <bds-typo variant="fs-14" bold="semi-bold">
            {responseTime === 0 ? 'Verificando conexão' : status === 'server-off' ? 'Sem conexão' : 'Conexão'}
          </bds-typo>
        </bds-grid>
        <bds-grid class="divisor"></bds-grid>

        <bds-grid gap="half" align-items="center">
          {status !== '' ? (
            <bds-badge
              icon={status === 'server-off' ? 'close' : status === 'operational' ? 'check' : 'warning'}
              color={status === 'server-off' ? 'danger' : status === 'operational' ? 'success' : 'warning'}
            ></bds-badge>
          ) : (
            <bds-loading-spinner size="extra-small"></bds-loading-spinner>
          )}

          <bds-typo variant="fs-14" bold="semi-bold">
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
        <bds-card width="500px">
          <bds-card-header>
            <bds-typo variant="fs-16" bold="bold">
              Status dos serviços
            </bds-typo>
            <bds-grid gap="1" align-items="center">
              <bds-typo variant="fs-10">Atualizado há {time_update / 1000} segundos</bds-typo>
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
          </bds-card-header>
          <bds-card-body>
            <bds-grid direction="column" gap="half" xxs="12">
              {/* Card de conexão do usuário */}
              <bds-paper border elevation="none" width="100%">
                <bds-grid padding="1" xxs="12" justify-content="space-between" align-items="center">
                  <bds-grid xxs="11" align-items="center" gap="1">
                    <bds-icon name="plugin"></bds-icon>
                    <bds-grid xxs="11" direction="column">
                      <bds-typo variant="fs-16" bold="semi-bold">
                        Conexão
                      </bds-typo>
                      <bds-grid align-items="center" justify-content="space-between">
                        <bds-typo variant="fs-12">Sua conexão está funcionando normalmente</bds-typo>
                        <bds-typo variant="fs-10">{responseTime} ms</bds-typo>
                      </bds-grid>
                    </bds-grid>
                  </bds-grid>
                  <bds-grid xxs="1" justify-content="center">
                    {responseTime !== 0 ? (
                      <bds-badge
                        icon={responseTime < 3000 ? 'check' : 'warning'}
                        color={responseTime < 3000 ? 'success' : 'warning'}
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
                <bds-grid direction="column">
                  <bds-grid padding="1" xxs="12" justify-content="space-between" align-items="center">
                    <bds-grid xxs="11" align-items="center" gap="1">
                      <bds-icon name="cloud"></bds-icon>
                      <bds-grid xxs="11" direction="column">
                        <bds-typo variant="fs-16" bold="semi-bold">
                          Serviços Blip
                        </bds-typo>
                        <bds-grid align-items="center" justify-content="space-between">
                          <bds-typo variant="fs-12">
                            {responseTime === 0
                              ? 'Verificando os serviços Blip'
                              : status === 'operational'
                              ? 'Serviços Blip'
                              : 'Serviços Blip instáveis'}
                          </bds-typo>
                        </bds-grid>
                      </bds-grid>
                    </bds-grid>
                    <bds-grid xxs="1" justify-content="center">
                      {status !== '' && status === 'operational' ? (
                        <bds-badge icon="operational" color="success"></bds-badge>
                      ) : responseTime === 0 ? (
                        <bds-loading-spinner size="extra-small"></bds-loading-spinner>
                      ) : (
                        ''
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
                <bds-button variant="tertiary" size="short">
                  Mais detalhes
                </bds-button>
              </bds-grid>
            </bds-grid>
          </bds-card-body>
        </bds-card>
      </bds-grid>
    </bds-grid>
  );
};

export default Status;
