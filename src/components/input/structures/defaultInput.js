import React from "react";

export default function DefaultInput() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Default Input
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
                  {`<bds-input placeholder="nome completo"></bds-input>`}
                </pre>
              </code>
            </bds-typo>
          </bds-grid>
        </bds-paper>
      </bds-grid>
      
      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
          <bds-grid padding="3" direction="column" gap="3">
            {/* Put here the component example */}
            <bds-input placeholder="nome completo"></bds-input>
          </bds-grid>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
