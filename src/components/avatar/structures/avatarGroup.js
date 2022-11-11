import React from "react";

export default function AvatarGroup() {
  const users = [
    {"id": "1", "name": "Michael Scott"},
    {"id": "2", "name": "Dwight Schrute"},
    {"id": "3", "name": "Jim Halpert"},
    {"id": "4", "name": "Pam Beesly"},
    {"id": "5", "name": "Ryan Howard"},
    {"id": "6", "name": "Andy Bernard"}
  ]

  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Avatar Group
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
                {`<bds-avatar-group size="standard" users={JSON.stringify(arrayUsers)}>
    </bds-avatar-group>`}
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
           <bds-grid padding="2">
            <bds-avatar-group size="standard" users={JSON.stringify(users)}>
    </bds-avatar-group>
           </bds-grid>
           
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
