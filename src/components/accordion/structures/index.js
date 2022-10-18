import React from "react";

export default function Structures() {
  const AccordionBlock = {
    display: "block",
  };
  const accordionTextarea = {
    width: '100%',
    border: 'none',
    resize: 'none',
  }
  return (
    <bds-grid xxs="12" direction="column" gap="3">
      {/* Accordion Default */}
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" padding="y-2" margin="t-3">
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
            <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <textarea style={accordionTextarea} rows="8" cols="20" readOnly={true} value='
          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
            </bds-accordion-body>
          </bds-accordion>'></textarea>
        </bds-grid>
      </bds-grid>

      {/* Accordion Group Single Open */}
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" padding="y-2" margin="t-3">
          <bds-typo variant="fs-24" bold="bold">Accordion Group Single Open</bds-typo>
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
          <textarea style={accordionTextarea} rows="40" cols="20" readOnly={true} value='
          <bds-accordion-group collapse="single">
          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet...
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>

          <bds-accordion>
            <bds-accordion-header
              accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet...
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>

          <bds-accordion>
            <bds-accordion-header
              accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet..
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>

          <bds-accordion>
            <bds-accordion-header
              accordion-title="Title accordion" icon="tag" avatar-name="Lucas Murta"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet...
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-accordion-group>'></textarea>
        </bds-grid>
      </bds-grid>
      {/* Accordion Group Single Open */}
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" padding="y-2">
          <bds-typo variant="fs-24" bold="bold">Accordion Group Single Multiple</bds-typo>
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
          <textarea style={accordionTextarea} rows="40" cols="20" readOnly={true} value='
          <bds-accordion-group collapse="multiple">
          <bds-accordion>
            <bds-accordion-header
              accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet...
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>

          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion" icon="tag"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet...
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>

          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion" icon="tag" avatar-name="Lucas Murta">
            </bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet..
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>

          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion" icon="tag" avatar-name="Lucas Murta">
          </bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet...
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-accordion-group>'></textarea>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
}
