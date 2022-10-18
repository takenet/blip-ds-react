import React from "react";
import { Link } from "react-router-dom";

function ComponentList() {
  return (
    <>
      <bds-grid xxs="12" justify-content="center" padding="4">
        <bds-typo class="component-header" bold="bold" variant="fs-40">
          Component List React
        </bds-typo>
      </bds-grid>
      <bds-grid xxs="12" justify-content="space-evenly">
        <Link to="/accordion">
          <bds-paper class="card-component">
            <bds-grid padding="4">
              <bds-typo variant="fs-24" bold="bold" margin="false">
                Accordion
              </bds-typo>
            </bds-grid>
          </bds-paper>
        </Link>
      </bds-grid>
    </>
  );
}

export default ComponentList;
