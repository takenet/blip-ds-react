import React from "react";

export default function AccordionGroupSingleOpen() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          Accordion Group Single Open
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
                  {`<bds-accordion-group collapse="single">
  <bds-accordion>
    <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
    <bds-accordion-body>
      <bds-typo variant="fs-16">
        Lorem ipsum dolor sit amet...
      </bds-typo>
    </bds-accordion-body>
  </bds-accordion>

  <bds-accordion>
    <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
    <bds-accordion-body>
      <bds-typo variant="fs-16">
        Lorem ipsum dolor sit amet...
      </bds-typo>
    </bds-accordion-body>
  </bds-accordion>

  <bds-accordion>
    <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
    <bds-accordion-body>
      <bds-typo variant="fs-16">
        Lorem ipsum dolor sit amet..
      </bds-typo>
    </bds-accordion-body>
  </bds-accordion>

  <bds-accordion>
    <bds-accordion-header accordion-title="Title accordion" 
    avatar-name="Willian Lomeu"></bds-accordion-header>
    <bds-accordion-body>
      <bds-typo variant="fs-16">
        Lorem ipsum dolor sit amet...
      </bds-typo>
    </bds-accordion-body>
  </bds-accordion>
</bds-accordion-group>`}
                </pre>
              </code>
            </bds-typo>
          </bds-grid>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
          <bds-accordion-group collapse="single">
            <bds-accordion>
              <bds-accordion-header
                accordion-title="Title accordion"
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
                avatar-name="Willian Lomeu"
              ></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">
                  Lorem ipsum dolor sit amet...
                </bds-typo>
              </bds-accordion-body>
            </bds-accordion>
          </bds-accordion-group>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  );
}
