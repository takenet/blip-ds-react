import React from "react";

export default function Structures() {
  const AccordionBlock = {
    display: "block",
  };
  return (
    <bds-grid xxs="12" direction="column" gap="3" margin="y-3">
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" padding="y-2">
          <bds-typo variant="fs-24" bold="bold">
            Accordion Default
          </bds-typo>
        </bds-grid>
        <bds-grid
          xxs="12"
          md="10"
          justify-content="center"
          style={AccordionBlock}
        >
          <bds-accordion>
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
          <blockquote>
            <code>
              <pre>
                &lt;h1&gt;teste&lt;/h1&gt;
                &lt;h1&gt;teste&lt;/h1&gt;
                &lt;h1&gt;teste&lt;/h1&gt;
              </pre>
            </code>
          </blockquote>
          <bds-input rows="9" disabled is-textarea value='<bds-accordion>
            <bds-accordion-header
              accordion-title="Title accordion"
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
            </bds-accordion-body>
          </bds-accordion>'></bds-input>
          <textarea rows="8" cols="20" value='
          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
            </bds-accordion-body>
          </bds-accordion>'></textarea>
          
        </bds-grid>
      </bds-grid>
      <bds-grid direction="column">
        <bds-grid padding="y-2">
          <bds-typo variant="fs-16">Accordion Group Single Open</bds-typo>
        </bds-grid>
        <bds-grid
          xxs="12"
          md="10"
          justify-content="center"
          style={AccordionBlock}
        >
          <bds-accordion-group collapse="single">
            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon=""
                avatar-name=""
                avatar-thumb=""
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>

            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon="tag"
                avatar-name=""
                avatar-thumb=""
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>

            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon="tag"
                avatar-name="Lucas Murta"
                avatar-thumb=""
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet..
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>

            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon="tag"
                avatar-name="Lucas Murta"
                avatar-thumb="https://..."
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>
          </bds-accordion-group>
        </bds-grid>
      </bds-grid>
      <bds-grid direction="column">
        <bds-grid padding="y-2">
          <bds-typo variant="fs-16">Accordion Group Single Multiple</bds-typo>
        </bds-grid>
        <bds-grid
          xxs="12"
          md="10"
          justify-content="center"
          style={AccordionBlock}
        >
          <bds-accordion-group collapse="multiple">
            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon=""
                avatar-name=""
                avatar-thumb=""
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>

            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon="tag"
                avatar-name=""
                avatar-thumb=""
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>

            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon="tag"
                avatar-name="Lucas Murta"
                avatar-thumb=""
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet..
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>

            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
                icon="tag"
                avatar-name="Lucas Murta"
                avatar-thumb="https://..."
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>
          </bds-accordion-group>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
}
