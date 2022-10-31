import React from "react";

export default function ToggleMethod() {

  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };

  return (
    <bds-grid
      xxs="12"
      direction="column"
      gap="4"
      margin="y-8"
      align-items="center"
    >
        <bds-grid xxs="12" direction="column">
          <bds-typo class="title-2" variant="fs-24" bold="bold">
            Toggle() Method
          </bds-typo>
          <hr />
        </bds-grid>
        <bds-grid
          xxs="12"
          justify-content="center"
        >
          <bds-grid
            xxs="12"
            direction="column"
            gap="4"
            justify-content="space-around"
            margin="t-3"
          >
            <bds-typo>
              The onClick function calls the method that opens or closes the
              accordion component.
            </bds-typo>

            <bds-paper>
              <bds-grid
                direction="row"
                justify-content="center"
                gap="4"
                align-items="center"
                margin="y-2"
              >
                <bds-grid>
                  <bds-typo bold="bold">
                    Press the button to open the accordion
                  </bds-typo>
                  <bds-icon name="arrow-right"></bds-icon>
                </bds-grid>
                <bds-button
                  onClick={() => btToggle("accsingle")}
                  variant="primary"
                  size="short"
                >
                  Toggle
                </bds-button>
              </bds-grid>
              <bds-accordion id="accsingle">
                <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
                <bds-accordion-body>
                  <bds-typo variant="fs-16">
                    Lorem ipsum dolor sit amet...
                  </bds-typo>
                </bds-accordion-body>
              </bds-accordion>
            </bds-paper>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The call</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {
                          '<bds-button onClick={() => btToggle("accsingle")}>Toggle</bds-button>'
                        }
                      </pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The function</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {`const btToggle = async (id) => {
  const acc = document.getElementId(id);
  await acc.toggle();
};`}
                      </pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The element affected</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {`<bds-accordion id="accsingle">
  <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
  <bds-accordion-body>
    <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
  </bds-accordion-body>
</bds-accordion>`}
                      </pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>
          </bds-grid>
        </bds-grid>
      </bds-grid>
  );
}
