import React from "react";

export default function Method() {
  const AccordionBlock = {
    display: "block",
  };

  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };

  return (
    <bds-grid xxs="12" direction="column" gap="3" margin="y-3" align-items="center">
      <bds-grid direction="column">
        <bds-grid padding="y-2">
          <bds-typo variant="fs-16">Close Method</bds-typo>
          <bds-typo>
            
          </bds-typo>
        </bds-grid>
        <bds-grid
          xxs="12"
          md="10"
          justify-content="center"
          style={AccordionBlock}
        >
          <bds-button
            onClick={() => btToggle("accsingle")}
            variant="primary"
            size="short"
          >
            Toggle
          </bds-button>
          <bds-accordion id="accsingle">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon=""
              avatar-name=""
              avatar-thumb=""
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
