import React from "react";

export default function AvatarSize() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Avatar Size
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
                {`<bds-avatar name="Michael Scott" size="extra-small"></bds-avatar>
<bds-avatar name="Dwight Schrute" size="small"></bds-avatar>
<bds-avatar name="Jim Halpert" size="standard"></bds-avatar>
<bds-avatar name="Pam Beesly" size="large"></bds-avatar>
<bds-avatar name="Ryan Howard" size="extra-large"></bds-avatar>`}
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
           <bds-grid padding="2" direction="row" gap="2" align-items="center">
           <bds-avatar name="Michael Scott" size="extra-small"></bds-avatar>
    <bds-avatar name="Dwight Schrute" size="small"></bds-avatar>
    <bds-avatar name="Jim Halpert" size="standard"></bds-avatar>
    <bds-avatar name="Pam Beesly" size="large"></bds-avatar>
    <bds-avatar name="Ryan Howard" size="extra-large"></bds-avatar>
           </bds-grid>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
