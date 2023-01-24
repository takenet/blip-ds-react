import React from "react";

export default function ButtonWithIcon() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Button With Icon
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
                {`<bds-button icon="file-new" size="standard">
Text button
</bds-button>
<bds-button arrow size="standard">
Text button
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
           <bds-button icon="file-new" size="standard">
Text button
</bds-button>
<bds-button arrow size="standard">
Text button
</bds-button>
           </bds-grid>
           
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
