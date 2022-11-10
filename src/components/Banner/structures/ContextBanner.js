import React from "react";

export default function BannerContext() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Banner Context
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
                  {`<bds-banner variant="warning" context="inside">
        Este é um banner do tipo inside.
        Ele pode conter várias linhas, mas a sugestão é que possua textos curtos e objetivos.
      </bds-banner>
      <div>
        <div>
          <bds-typo bold="bold" variant="fs-16">
            Aprenda a utilizar o Blip
          </bds-typo>
          <bds-typo>
            Conheça nossos conteúdos e aprenda a utilizar o máximo da plataforma
          </bds-typo>
          </div>
      </div>`}
                </pre>
              </code>
            </bds-typo>
          </bds-grid>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-grid xxs="6">
          <bds-paper>
          {/* Put here the component example */}
          <bds-grid padding="2" direction="column">
            <bds-banner variant="warning" context="inside">
              Este é um banner do tipo inside.
              Ele pode conter várias linhas, mas a sugestão é que possua textos curtos e objetivos.
            </bds-banner>
            <bds-grid direction="column" gap="1" margin="t-2">
              <bds-typo bold="bold" variant="fs-16">
                Aprenda a utilizar o Blip
              </bds-typo>
              <bds-typo>
                Conheça nossos conteúdos e aprenda a utilizar o máximo da plataforma
              </bds-typo>
            </bds-grid>
          </bds-grid>

        </bds-paper>
        </bds-grid>
        
      </bds-grid>

    </bds-grid>
  );
}
