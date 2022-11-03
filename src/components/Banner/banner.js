import React from "react";
import { Link } from "react-router-dom";
import CloseEvent from "./event/eventClose";
import BannerClose from "./structures/CloseBanner/CloseStructures";
import BannerContext from "./structures/ContextBanner/ContextStructures";
import BannerLink from "./structures/LinkBanner/LinkStructures";
import BannerVariant from "./structures/variantBanner/variantStructures";

export default function Banner() {
  return (
    <>
      <bds-grid container xxs="12" justify-content="center" direction="column">

        <bds-grid margin="b-8" padding="t-3" justify-content="space-between" align-items="center">
          <Link to="/">
          <bds-button-icon size="short" variant="secondary" icon="arrow-left"></bds-button-icon>
          </Link>
          
          <bds-typo variant="fs-32" italic bold="extra-bold" margin="false">
            {/* Component name */}
            Banner
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
          <bds-tab group="tab2" label="Event"></bds-tab>
        </bds-tabs>
        <bds-grid xxs="11" margin="auto">
          <hr />
        </bds-grid>
        
        <bds-tab-panel group="tab1">
            {/* Import here the structures component */}
            <BannerVariant />
            <BannerClose />
            <BannerLink />
            <BannerContext />
        </bds-tab-panel>
        <bds-tab-panel group="tab2">
            {/* Import here the Method component */}
            <CloseEvent />
          </bds-tab-panel>
        
      </bds-grid>
    </>
  );
}
