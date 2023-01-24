import React from "react";
import { Link } from "react-router-dom";
import ButtonIconDefault from "./structures/buttonIconDefault";

export default function ButtonIcon() {
  return (
    <>
      <bds-grid container xxs="12" justify-content="center" direction="column">

        <bds-grid margin="b-8" padding="t-3" justify-content="space-between" align-items="center">
          <Link to="/">
          <bds-button-icon size="short" variant="secondary" icon="arrow-left"></bds-button-icon>
          </Link>
          
          <bds-typo variant="fs-32" italic bold="extra-bold" margin="false">
            Button Icon
          </bds-typo>
          <bds-grid>
            <bds-grid padding="l-2">
              <bds-typo variant="fs-14">Status:</bds-typo>
            </bds-grid>
            <bds-chip-tag color="success">Funcionando</bds-chip-tag>
          </bds-grid>
        </bds-grid>

        <bds-tabs align="left">
          <bds-tab group="tab1" label="Structures"></bds-tab>
        </bds-tabs>
        <bds-grid xxs="11" margin="auto">
          <hr />
        </bds-grid>
        
        <bds-tab-panel group="tab1">
            {/* Import here the structures component */}
            <ButtonIconDefault />
        </bds-tab-panel>
        
      </bds-grid>
    </>
  );
}
