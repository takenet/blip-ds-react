import React from "react";
import { Link } from "react-router-dom";
import BlurEvent from "./event/bdsBlur";
import CancelEvent from "./event/bdsCancel";
import ChangeEvent from "./event/bdsChange";
import FocusEvent from "./event/bdsFocus";
import InputEvent from "./event/bdsInput";
import SelectedChangeEvent from "./event/bdsSelectedChange";
import AutocompleteDefault from "./structures/autocompleteDefault";
import AutocompleteDisabled from "./structures/autocompleteDisabled";
import AutocompleteIcon from "./structures/autocompleteIcon";
import AutocompleteOptions from "./structures/autocompleteOptions";

export default function Autocomplete() {
  return (
    <>
      <bds-grid container xxs="12" justify-content="center" direction="column">

        <bds-grid margin="b-8" padding="t-3" justify-content="space-between" align-items="center">
          <Link to="/">
          <bds-button-icon size="short" variant="secondary" icon="arrow-left"></bds-button-icon>
          </Link>
          
          <bds-typo variant="fs-32" italic bold="extra-bold" margin="false">
            {/* Component name */}
            Autocomplete
          </bds-typo>
          <bds-grid>
            <bds-grid padding="l-2">
              <bds-typo variant="fs-14">Status:</bds-typo>
            </bds-grid>
            <bds-chip-tag color="danger">Error</bds-chip-tag>
          </bds-grid>
        </bds-grid>

        <bds-tabs align="left">
          <bds-tab group="tab1" label="Structures"></bds-tab>
          <bds-tab group="tab2" label="Event"></bds-tab>
        </bds-tabs>
        <bds-grid xxs="11" margin="auto">
          <hr />
        </bds-grid>
        
        <bds-tab-panel group="tab1">
            {/* Import here the structures component */}
            <AutocompleteDefault />
            <AutocompleteIcon />
            <AutocompleteDisabled />
            <AutocompleteOptions />
        </bds-tab-panel>
        <bds-tab-panel group="tab2">
            {/* Import here the Method component */}
            <BlurEvent />
            <CancelEvent />
            <ChangeEvent />
            <FocusEvent />
            <InputEvent />
            <SelectedChangeEvent />
          </bds-tab-panel>
        
      </bds-grid>
    </>
  );
}
