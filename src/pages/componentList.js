import React from "react";
import Card from "../pageComponents/cards/cards";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import dsReact from '../assets/ds-react.svg';

ChartJS.register(ArcElement, Tooltip);
export const data = {
  labels: ["Tested", "Not tested"],
  datasets: [
    {
      label: "My First Dataset",
      data: [5, 34],
      backgroundColor: ["rgb(33, 204, 121)", "rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};

export const status = {
  labels: ["Ok", "Problem identified", "Under Construction"],
  datasets: [
    {
      label: "My First Dataset",
      data: [3, 2, 34],
      backgroundColor: ["rgb(33, 204, 121)", "rgb(255, 99, 132)", "rgb(255, 246, 168)" ],
      hoverOffset: 4,
    },
  ],
};

function ComponentList() {
  // Any of the following formats may be used

  const img = {
    width: '100%'
  }

  return (
    <>
      <bds-grid
        class="header"
        container
        justify-content="center"
        direction="column"
        gap="3"
      >
        <bds-grid xxs="12" margin="y-4">
          <bds-typo class="title-header" margin="false" bold="extra-bold" variant="fs-32">
            Components React
          </bds-typo>
        </bds-grid>
        <bds-grid xxs="6" margin="auto">
          <img style={img} src={dsReact} alt="logo do blip-ds e React" />
        </bds-grid>

        <bds-grid xxs="12" justify-content="space-evenly" flex-wrap="wrap" margin="b-2">
          <bds-grid xxs="12">
            <bds-typo variant="fs-20" bold="bold">Components Info</bds-typo>
          </bds-grid>
          <bds-grid xxs="12" xs="7" md="5" lg="4" margin="t-2"  direction="row" gap="2" align-items="center">
            <bds-paper elevation="primary">
              <bds-grid xxs="12" flex-wrap="wrap" padding="2" align-items="center">
                <bds-grid xxs="12" padding="b-2">
                  <bds-typo class="text-card" variant="fs-16" margin="false" bold="bold">
                    Tested components avaliable
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

          <bds-grid xxs="12" xs="7" md="5" lg="4" margin="t-2"  direction="row" gap="2" align-items="center">
            <bds-paper elevation="primary">
              <bds-grid xxs="12" flex-wrap="wrap" padding="2" align-items="center">
                <bds-grid xxs="12" padding="b-2">
                  <bds-typo class="text-card" variant="fs-16" margin="false" bold="bold">
                    Components status
                  </bds-typo>
                </bds-grid>
                <bds-grid xxs="6">
                  <Pie data={status} />
                </bds-grid>
                <bds-grid direction="column" xxs="6" gap="2">
                  <bds-chip-tag color="success">ok</bds-chip-tag>
                  <bds-chip-tag color="danger">Problem identified</bds-chip-tag>
                  <bds-chip-tag color="warning">Under Construction</bds-chip-tag>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-grid>

          <bds-grid  xxs="12" xs="7" md="5" lg="4" margin="t-2" direction="row" gap="2" align-items="center">
            <bds-paper elevation="primary">
              <bds-grid xxs="12" flex-wrap="wrap" padding="2" align-items="center">
                <bds-grid xxs="12" padding="b-2">
                  <bds-typo class="text-card" variant="fs-16" margin="false" bold="bold">
                    Avaliable components
                  </bds-typo>
                </bds-grid>
                <bds-grid xxs="6">
                  <bds-illustration name="organizations"></bds-illustration>
                </bds-grid>
                <bds-grid justify-content="center" xxs="6">
                  <bds-typo variant="fs-32" margin="false" bold="extra-bold">39</bds-typo>
                </bds-grid>
              </bds-grid>
            </bds-paper>
          </bds-grid>

          <bds-grid  xxs="12" xs="7" md="5" lg="4" margin="t-2" direction="row" gap="2" align-items="center">
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
          <Card name="Autocomplete" link="autocomplete" status="success" statusText="Ok" />
          <Card name="Avatar" link="avatar" status="danger" statusText="Problem identified" />
          <Card name="Banner" link="banner" status="success" statusText="Ok" />
          <Card name="Button" status="warning" statusText="Under Contruction" />
          <Card name="Button Icon" status="warning" statusText="Under Contruction" />
          <Card name="Chip Tag" status="warning" statusText="Under Contruction" />
          <Card name="Chip Clickable" status="warning" statusText="Under Contruction" />
          <Card name="Chip Selected" status="warning" statusText="Under Contruction" />
          <Card name="Checkbox" status="warning" statusText="Under Contruction" />
          <Card name="Date Picker" status="warning" statusText="Under Contruction" />
          <Card name="Grid" status="warning" statusText="Under Contruction" />
          <Card name="Icon" status="warning" statusText="Under Contruction" />
          <Card name="Illustration" status="warning" statusText="Under Contruction" />
          <Card name="Input" link="input" status="warning" statusText="Under Contruction" />
          <Card name="Input Chips" status="success" statusText="Ok" />
          <Card name="Input Editable" status="warning" statusText="Under Contruction" />
          <Card name="Input Password" status="warning" statusText="Under Contruction" />
          <Card name="Input Phone Number" status="warning" statusText="Under Contruction" />
          <Card name="Loading Bar" status="warning" statusText="Under Contruction" />
          <Card name="Loading Spinner" status="warning" statusText="Under Contruction" />
          <Card name="Loading Page" status="warning" statusText="Under Contruction" />
          <Card name="Modal" status="warning" statusText="Under Contruction" />
          <Card name="Menu" status="warning" statusText="Under Contruction" />
          <Card name="Radio Button" status="warning" statusText="Under Contruction" />
          <Card name="Pagination" status="warning" statusText="Under Contruction" />
          <Card name="Paper" status="warning" statusText="Under Contruction" />
          <Card name="Progress Bar" status="warning" statusText="Under Contruction" />
          <Card name="Select" status="warning" statusText="Under Contruction" />
          <Card name="Select Chips" status="warning" statusText="Under Contruction" />
          <Card name="Sidebar" status="warning" statusText="Under Contruction" />
          <Card name="Stepper" status="warning" statusText="Under Contruction" />
          <Card name="Switch" status="warning" statusText="Under Contruction" />
          <Card name="Tabs" status="warning" statusText="Under Contruction" />
          <Card name="Tooltip" status="warning" statusText="Under Contruction" />
          <Card name="Toast" status="warning" statusText="Under Contruction" />
          <Card name="Typo" status="warning" statusText="Under Contruction" />
          <Card name="Upload" status="warning" statusText="Under Contruction" />
        </bds-grid>
      </bds-grid>
    </>
  );
}

export default ComponentList;
