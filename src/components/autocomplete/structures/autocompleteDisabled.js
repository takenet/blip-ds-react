import React from "react";

export default function AutocompleteDisabled() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Autocomplete Disabled
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
                {`<bds-autocomplete disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>`}
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
           <bds-autocomplete disabled value="1">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
