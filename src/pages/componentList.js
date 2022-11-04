import React from "react";
import Card from "../pageComponents/cards/cards";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);
export const data = {
  labels: ["Tested", "Not tested"],
  datasets: [
    {
      label: "My First Dataset",
      data: [2, 36],
      backgroundColor: ["rgb(33, 204, 121)", "rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};

function ComponentList() {
  // Any of the following formats may be used

  return (
    <>
      <bds-grid
        class="header"
        container
        justify-content="center"
        direction="column"
        gap="4"
      >
        <bds-grid xxs="12" margin="y-4">
          <bds-typo class="title-header" margin="false" bold="extra-bold" variant="fs-32">
            Components React
          </bds-typo>
        </bds-grid>

        <bds-grid xxs="12" justify-content="space-between" flex-wrap="wrap" margin="b-2">
          <bds-grid xxs="12">
            <bds-typo variant="fs-20" bold="bold">Components Info</bds-typo>
          </bds-grid>
          <bds-grid xxs="12" xs="6" md="4" margin="t-2"  direction="row" gap="2" align-items="center">
            <bds-paper elevation="primary">
              <bds-grid xxs="12" flex-wrap="wrap" padding="2" align-items="center">
                <bds-grid xxs="12" padding="b-2">
                  <bds-typo class="text-card" variant="fs-16" margin="false" bold="bold">
                    Components Avaliable
                  </bds-typo>
                </bds-grid>
                <bds-grid xxs="6">
                  <Pie data={data} />
                </bds-grid>
                <bds-grid direction="column" xxs="6" gap="2">
                  <bds-chip-tag color="success">Tested</bds-chip-tag>
                  <bds-chip-tag color="danger">Not Tested</bds-chip-tag>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-grid>

          <bds-grid  xxs="12" xs="6" md="4" margin="t-2" direction="row" gap="2" align-items="center">
            <bds-paper elevation="primary">
              <bds-grid xxs="12" flex-wrap="wrap" padding="2" align-items="center">
                <bds-grid xxs="12" padding="b-2">
                  <bds-typo class="text-card" variant="fs-16" margin="false" bold="bold">
                    Components Avaliable
                  </bds-typo>
                </bds-grid>
                <bds-grid xxs="6">
                  <bds-illustration name="organizations"></bds-illustration>
                </bds-grid>
                <bds-grid justify-content="center" xxs="6">
                  <bds-typo variant="fs-32" margin="false" bold="extra-bold">38</bds-typo>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-grid>

          <bds-grid  xxs="12" xs="6" md="4" margin="t-2" direction="row" gap="2" align-items="center">
            <bds-paper elevation="primary">
              <bds-grid xxs="12" flex-wrap="wrap" padding="2" align-items="center">
                <bds-grid xxs="12" padding="b-2">
                  <bds-typo class="text-card" variant="fs-16" margin="false" bold="bold">
                    Components under construction
                  </bds-typo>
                </bds-grid>
                <bds-grid xxs="6">
                  <bds-illustration name="management"></bds-illustration>
                </bds-grid>
                <bds-grid justify-content="center" xxs="6">
                  <bds-typo variant="fs-32" margin="false" bold="extra-bold">8</bds-typo>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-grid>
        </bds-grid>

        <bds-grid xxs="12" flex-wrap="wrap">
          <bds-grid xxs="12">
            <bds-typo variant="fs-20" margin="false" bold="bold">Components List</bds-typo>
          </bds-grid>
          <Card  name="Accordion" link="accordion" status="success" statusText="Ok" />
          <Card name="Alert" link="alert" status="success" statusText="Ok" />
          <Card name="Autocomplete" status="warning" statusText="Under Contruction" />
          <Card name="Avatar" status="warning" statusText="Under Contruction" />
          <Card name="Banner" link="banner" status="success" statusText="Ok" />
          <Card name="Button" status="warning" statusText="Under Contruction" />
          <Card name="Button Icon" status="warning" statusText="Under Contruction" />
          <Card name="Chip Tag" status="warning" statusText="Under Contruction" />
        </bds-grid>
      </bds-grid>
    </>
  );
}

export default ComponentList;
