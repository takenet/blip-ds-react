import React from "react";

export default function ButtonLoading() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Button Loading
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
                  {`<bds-button variant="primary" bds-loading bds-loading-color="light" disabled="true">
Button primary
</bds-button>
<bds-button variant="secondary" bds-loading bds-loading-color="main" disabled="true">
Button secondary
</bds-button>
<bds-button variant="tertiary" bds-loading bds-loading-color="main" disabled="true">
Button tertiary
</bds-button>
<bds-button variant="ghost" bds-loading bds-loading-color="main" disabled="true">
Button ghost
</bds-button>
<bds-button variant="delete" bds-loading bds-loading-color="light" disabled="true">
Button delete
</bds-button>`}
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
          <bds-grid padding="3" gap="3">
            <bds-button
              variant="primary"
              bds-loading
              bds-loading-color="light"
              disabled="true"
            >
              Button primary
            </bds-button>
            <bds-button
              variant="secondary"
              bds-loading
              bds-loading-color="main"
              disabled="true"
            >
              Button secondary
            </bds-button>
            <bds-button
              variant="tertiary"
              bds-loading
              bds-loading-color="main"
              disabled="true"
            >
              Button tertiary
            </bds-button>
            <bds-button
              variant="ghost"
              bds-loading
              bds-loading-color="main"
              disabled="true"
            >
              Button ghost
            </bds-button>
            <bds-button
              variant="delete"
              bds-loading
              bds-loading-color="light"
              disabled="true"
            >
              Button delete
            </bds-button>
          </bds-grid>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  );
}
