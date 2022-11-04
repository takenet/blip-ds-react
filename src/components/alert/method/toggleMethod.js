import React from "react";

export default function ToggleMethod() {

  // Put here the method function

  const toggleMethod = async (id) => {
    const alert = document.getElementById(id);
    await alert.toggle();
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
            {/* Put here the Method name */}
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
              {/* Put here the use explanation */}
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
                    Press the button to "Toggle" the component
                  </bds-typo>
                  <bds-icon name="arrow-right"></bds-icon>
                </bds-grid>
                <bds-button onClick={() => toggleMethod("alert")}>Toggle Method</bds-button>
              </bds-grid>
              {/* Put here the component example */}
              <bds-alert id="alert">
                <bds-alert-header variant="system" icon="info">
                  Atenção!
                </bds-alert-header>
                <bds-alert-body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione 	  nulla a quos error!
                </bds-alert-body>
                <bds-alert-actions>
                  <bds-button variant="secondary" bold="true" onClick={() => toggleMethod("alert")}>Cancelar</bds-button>
                  <bds-button variant="secondary" bold="true" onClick={() => toggleMethod("alert")}>Confirmar</bds-button>
                </bds-alert-actions>
              </bds-alert>
            </bds-paper>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The call</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {
                          '<bds-button onClick={() => toggleMethod("alert")}>Toggle Method</bds-button>'
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
                        {`  const toggleMethod = async (id) => {
    const alert = document.getElementById(id);
    await alert.toggle();
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
                        {`<bds-alert id="alert">
  <bds-alert-header variant="system" icon="info">
    Atenção!
  </bds-alert-header>
  <bds-alert-body>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    At corporis eligendi cumque ratione 	  nulla a quos error!
  </bds-alert-body>
  <bds-alert-actions>
   <bds-button variant="secondary" bold="true" onClick={() => toggleMethod("alert")}>
    Cancelar
   </bds-button>
   <bds-button variant="secondary" bold="true" onClick={() => toggleMethod("alert")}>
    Confirmar
    </bds-button>
  </bds-alert-actions>
</bds-alert>`}
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
