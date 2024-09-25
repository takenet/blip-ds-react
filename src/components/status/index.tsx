import { BdsButtonIcon, BdsCheckbox, BdsIcon, BdsTooltip } from 'blip-ds/dist/blip-ds-react/components';
import { useState, useEffect } from 'react';
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

  // FUNÇÃO PARA VERIFICAR O PING
  const fetchStatus = async () => {
    try {
      // Armazena o tempo atual em milissegundos (início do processo de medição do tempo de resposta)
      const startTime = Date.now();

      // Faz uma requisição HTTP GET para o endpoint especificado
      const response = await fetch('https://status.blip.ai/api/v2/summary.json');

      // Armazena o tempo atual em milissegundos (fim do processo de medição do tempo de resposta)
      const endTime = Date.now();

      // Calcula o tempo de resposta subtraindo startTime de endTime
      setResponseTime(endTime - startTime);

      // Verifica se a resposta não é OK (status HTTP não está na faixa de 200-299)
      if (!response.ok) {
        throw new Error('Failed to fetch status');
      }
    } catch (error) {
      // setStatus é uma função que lida com o estado do servidor, definindo-o como 'server-off'
      setStatus('server-off');
    }
  };

  // FUNÇÃO PARA OBTER OS DADOS DA API

  const checkMaintenance = async () => {
    try {
      // Faz uma requisição HTTP GET para o endpoint especificado
      const response = await fetch('https://status.blip.ai/api/v2/summary.json');

      // Converte a resposta em JSON
      const data = await response.json();

      // Filtra os componentes da resposta que estão em manutenção
      const maintenanceComponents = data.components.filter(
        (component: { status: string }) => component.status === 'under_maintenance'
      );

      // Define a URL da página de detalhes do status, extraída da resposta da API
      setDetailUrl(data.page.url);

      // Verifica se há componentes em manutenção
      const isUnderMaintenance = maintenanceComponents.length > 0;

      // Define o status como 'maintenance' se houver componentes em manutenção, ou 'operational' caso contrário
      setStatus(isUnderMaintenance ? 'operational' : 'maintenance');

      // Armazena os componentes em manutenção
      setComponents(maintenanceComponents);

      // Armazena os incidentes atuais extraídos da resposta da API
      setProblem(data.incidents);
    } catch (error) {
      // Se ocorrer qualquer erro durante a execução do bloco try, o código no bloco catch será executado
      // Define o status do servidor como 'server-off' em caso de erro
      setStatus('server-off');
    }
  };

  useEffect(() => {
    setTimeout(fetchStatus, time_update);
    setTimeout(checkMaintenance, time_update);
  }, []);

  // Função para lidar com a atualização manual
  const handleUpdate = () => {
    // Reseta o tempo de resposta para 0
    setResponseTime(0);
    // Limpa a lista de componentes
    setComponents([]);
    // Reseta o status
    setStatus('');
    // Define o tempo da última atualização para o tempo atual
    setLastUpdateTime(Date.now());
    // Configura um temporizador para chamar fetchStatus após um tempo definido (time_update)
    setTimeout(fetchStatus, time_update);
    // Configura um temporizador para chamar checkMaintenance após um tempo definido (time_update)
    setTimeout(checkMaintenance, time_update);
  };

  useEffect(() => {
    const interval = setInterval(fetchStatus, time_update);
    return () => clearInterval(interval);
  }, []);

  // Função para lidar com a atualização do tempo
  const handleUpdateTime = () => {
    // Obtém o tempo atual em milissegundos
    const now = Date.now();

    // Calcula a diferença em segundos entre o tempo atual e o tempo da última atualização
    const differenceInSeconds = Math.floor((now - lastUpdateTime) / 1000);

    // Converte a diferença de segundos para minutos
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);

    // Define o tempo de atualização (em minutos)
    setUpdateTime(differenceInMinutes);

    // Se a diferença em minutos for maior ou igual a 60, chama a função handleUpdate
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

  // Função para abrir o status card
  const handleCard = () => {
    const card = document.querySelector('.status_card');
    card?.classList.toggle('active');
  };

  return (
    <bds-grid xxs="12" direction="row" height="100%">
      {/* Barra de status minificado */}
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
      {/* Fim da Barra de status minificado */}

      {/* Card de status */}
      <bds-grid class="status_card">
        <bds-card width="100%">
          <bds-grid direction="column" gap="2" padding="none">
            <bds-grid align-items="center" justify-content="space-between" margin="l-1" padding="none">
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

            <bds-grid padding="none" class="problem-card">
              <bds-grid direction="column" padding="none" gap="1" xxs="12">
                {/* Bloco de conexão do usuário */}
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
                <bds-paper border elevation="none" width="100%" class='paper-problem_row'>
                  <bds-grid direction="column" class="problem_row">
                    <bds-grid padding="none" margin="y-1" xxs="12" justify-content="space-between" align-items="center">
                      <bds-grid xxs={status !== 'operational' ? '6' : '11'} align-items="center" gap="1">
                        <bds-icon name="cloud"></bds-icon>
                        <bds-grid xxs='12' direction="column">
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
                      <bds-grid xxs={status !== 'operational' ? '4' : '1'} justify-content="center">
                        {status === 'operational' ? (
                          <bds-badge icon="check" color="success"></bds-badge>
                        ) : status !== '' && status !== 'operational' ? (
                          <bds-button
                            variant="tertiary"
                            size="short"
                            onClick={() => {
                              window.open(detailUrl);
                            }}
                          >
                            Mais detalhes
                          </bds-button>
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
                  </bds-grid>
                  {status === 'maintenance' && (
                    <bds-grid height="27px" class="fading-bottom"></bds-grid>
                  )}
                  
                </bds-paper>
                {/* -------------------------------- */}

                {/* Botão de mais detalhes */}
                <bds-grid justify-content="flex-start" margin="y-2" gap="1" alignItems="center">
                  <BdsCheckbox refer="check" name="check" label="Não exibir esse alerta novamente" />
                  <BdsTooltip
                    tooltipText="Ative essa opção para desabilitar alertas de oscilação
em sua conexão ou incidentes nos serviços Blip."
                    position="top-right"
                  >
                    <BdsIcon name="info"></BdsIcon>
                  </BdsTooltip>
                </bds-grid>
                {/* ----------------------------------------- */}
              </bds-grid>
            </bds-grid>
          </bds-grid>
        </bds-card>
      </bds-grid>
    </bds-grid>
  );
};

export default Status;
