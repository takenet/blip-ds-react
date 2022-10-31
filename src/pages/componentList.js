import React from "react";
import Card from "../pageComponents/cards/cards";

function ComponentList() {
  return (
    <>
      <bds-grid xxs="12" justify-content="center" padding="4">
        <bds-typo class="component-header" bold="bold" variant="fs-40">
          Component List React
        </bds-typo>
      </bds-grid>
      <bds-grid container>
        <bds-grid xxs="12" flex-wrap="wrap" gap="3">
          <Card name="Accordion" link="accordion"/>
          <Card name="Alert"/>
          <Card name="Autocomplete"/>
          <Card name="Avatar"/>
      </bds-grid>
      </bds-grid>
      
    </>
  );
}

export default ComponentList;
