import React from "react";

export default function ClearMethod() {

  const inputClear = async (id) => {
    const input = document.getElementById(id);
    await input.clear();
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
            Clear() Method
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
              The onClick function calls the method that clear the
              input component.
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
                    Press the button to "Clear" the component
                  </bds-typo>
                  <bds-icon name="arrow-right"></bds-icon>
                </bds-grid>
              <bds-button
                onClick={() => inputClear("inputClear")}
                variant="primary"
                size="short"
              >
                Clear
              </bds-button>
              </bds-grid>
              <bds-input id="inputClear" value="Lorem ipsum"></bds-input>
            </bds-paper>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The call</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {
                          '<bds-button onClick={() => inputClear("inputClear")}>Clear</bds-button>'
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
                        {`const inputClear = async (id) => {
  const input = document.getElementById(id);
  await input.clear();
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
                        {`<bds-input id="inputClear" value="Lorem ipsum"></bds-input>`}
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
