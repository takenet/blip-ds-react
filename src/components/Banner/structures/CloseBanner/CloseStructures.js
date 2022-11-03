import React from "react";

export default function BannerClose() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Banner with close button
        </bds-typo>
        <hr />
      </bds-grid>

      <bds-grid direction="column" gap="1" xxs="12">
        <bds-typo bold="bold">The structure HTML</bds-typo>
        <bds-paper>
          <bds-grid
            xxs="12"
            direction="column"
            padding="2"
            justify-content="center"
          >
            <bds-typo variant="fs-14" bold="regular">
              <code>
                <pre>
                  {`<bds-banner variant="system" button-close="true">
  Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
</bds-banner>
<bds-banner variant="warning" button-close="true">
  Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
</bds-banner>
<bds-banner variant="info" button-close="true">
  Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
</bds-banner>
<bds-banner variant="error" button-close="true">
  Ops, ocorreu um erro! O servidor está fora do ar.
</bds-banner>`}
                </pre>
              </code>
            </bds-typo>
          </bds-grid>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
          {/* Put here the component example */}
          <bds-banner variant="system" button-close="true">
  Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
</bds-banner>
<bds-banner variant="warning" button-close="true">
  Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
</bds-banner>
<bds-banner variant="info" button-close="true">
  Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
</bds-banner>
<bds-banner variant="error" button-close="true">
  Ops, ocorreu um erro! O servidor está fora do ar.
</bds-banner>
        </bds-paper>
      </bds-grid>

    </bds-grid>
  );
}
