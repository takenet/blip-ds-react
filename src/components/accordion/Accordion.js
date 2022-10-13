import React from "react";
import Method from "./method";
import Structures from "./structures";

export default function Accordion() {
  return (
    <>
      <bds-grid container xxs="12" justify-content="center" direction="column">
        <bds-grid margin="y-3" justify-content="space-between">
          <bds-typo variant="fs-32" italic bold="extra-bold">
            Componente Accordion
          </bds-typo>
          <bds-grid>
            <bds-grid padding="l-2">
              <bds-typo variant="fs-14">Status:</bds-typo>
            </bds-grid>
            <bds-chip-tag color="success">Funcionando</bds-chip-tag>
          </bds-grid>
        </bds-grid>

        <bds-tabs>
          <bds-tab group="tab1" label="Structures"></bds-tab>
          <bds-tab group="tab2" label="Method"></bds-tab>
          <bds-tab group="tab3" label="Do it youself"></bds-tab>
        </bds-tabs>
        <bds-tab-panel group="tab1"><Structures /></bds-tab-panel>
        <bds-tab-panel group="tab2"><Method /></bds-tab-panel>
        <bds-tab-panel group="tab3">Under construction</bds-tab-panel>
        
      </bds-grid>
    </>
  );
}
