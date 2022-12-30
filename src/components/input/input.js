import React from "react";
import { Link } from "react-router-dom";
import DefaultInput from "./structures/defaultInput";
import DangerInput from "./structures/dangerInput";
import DisabledInput from "./structures/disabledInput";
import CounterInput from "./structures/counterInput";
import InputTextarea from "./structures/inputTextarea";

import ClearMethod from "./method/clear";
import IsValidMethod from "./method/isValid";
import RemoveFocusMethod from "./method/removeFocus";
import SetFocusMethod from "./method/setFocus";
import GetInputElementMethod from "./method/getInputElement";

import BdsChange from "./event/bdsChange";
import BdsFocus from "./event/bdsFocus";
import BdsInput from "./event/bdsInput";
import BdsKeyDownBackspace from "./event/bdsKeyDownBackspace";
import BdsOnBlur from "./event/bdsOnBlur";
import BdsPatterValidation from "./event/bdsPatterValidation";
import BdsSubmit from "./event/bdsSubmit";

export default function TemplateComponent() {
  return (
    <>
      <bds-grid container xxs="12" justify-content="center" direction="column">

        <bds-grid margin="b-8" padding="t-3" justify-content="space-between" align-items="center">
          <Link to="/">
          <bds-button-icon size="short" variant="secondary" icon="arrow-left"></bds-button-icon>
          </Link>
          
          <bds-typo variant="fs-32" italic bold="extra-bold" margin="false">
            {/* Component name */}
            Input
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
          <bds-tab group="tab2" label="Method"></bds-tab>
          <bds-tab group="tab3" label="Event"></bds-tab>
        </bds-tabs>
        <bds-grid xxs="11" margin="auto">
          <hr />
        </bds-grid>
        
        <bds-tab-panel group="tab1">
          {/* Import here the structures component */}
          <DefaultInput />
          <DangerInput />
          <DisabledInput />
          <CounterInput />
          <InputTextarea />
        </bds-tab-panel>
        <bds-tab-panel group="tab2">
          {/* Import here the Method component */}
          <ClearMethod />
          <IsValidMethod />
          <RemoveFocusMethod />
          <SetFocusMethod />
          <GetInputElementMethod />
        </bds-tab-panel>
        <bds-tab-panel group="tab3">
          {/* Import here the Event component */}
          <BdsChange />
          <BdsFocus />
          <BdsInput />
          <BdsKeyDownBackspace />
          <BdsOnBlur />
          <BdsPatterValidation />
          <BdsSubmit />
        </bds-tab-panel>
        
      </bds-grid>
    </>
  );
}
