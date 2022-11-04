import React from "react";

export default function CloseMethod() {

  const btClose = async (id) => {
    const acc = document.getElementById(id);
    await acc.close();
  };

  return (
    <bds-grid
      xxs="12"
      direction="column"
      gap="4"
      margin="y-8"
      align-items="center"
    >
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" direction="column">
          <bds-typo class="title-2" variant="fs-24" bold="bold">
            Close() Method
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
              The onClick function calls the method that closes the
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
                    Press the button to Close the accordion
                  </bds-typo>
                  <bds-icon name="arrow-right"></bds-icon>
                </bds-grid>
                <bds-button
                  onClick={() => btClose("accClose")}
                  variant="primary"
                  size="short"
                >
                  Close
                </bds-button>
              </bds-grid>
              <bds-accordion id="accClose">
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
                          '<bds-button onClick={() => btToggle("accClose")}>Close</bds-button>'
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
                        {`const btClose = async (id) => {
  const acc = document.getElementId(id);
  await acc.close();
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
                        {`<bds-accordion id="accClose">
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
    </bds-grid>
  );
}
