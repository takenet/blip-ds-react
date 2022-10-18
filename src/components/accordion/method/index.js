import React from "react";

export default function Method() {
  const AccordionBlock = {
    display: "block",
  };
  const accordionTextarea = {
    width: '100%',
    border: 'none',
    resize: 'none',
  }

  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };

  return (
    <bds-grid xxs="12" direction="column" gap="3" margin="y-3" align-items="center">
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" padding="y-2">
          <bds-typo variant="fs-24" bold="bold">Toggle() Method</bds-typo>
          <bds-typo>
            
          </bds-typo>
        </bds-grid>
        <bds-grid
          xxs="12"
          md="10"
          justify-content="center"
          style={AccordionBlock}
        >
          <bds-grid xxs="12" direction="column" gap="3" justify-content="space-around">
            <bds-button
            onClick={() => btToggle("accsingle")}
            variant="primary"
            size="short"
          >
            Toggle
          </bds-button>
          <textarea style={accordionTextarea} rows="4" cols="4" readOnly={true} value='const btToggle = async (id) => {
            const acc = document.getElementById(id);
            await acc.toggle();
          };'></textarea>
          </bds-grid>
          
          <bds-accordion id="accsingle">
            <bds-accordion-header
              accordion-title="Title accordion"
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
}
