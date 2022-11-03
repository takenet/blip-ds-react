import React from "react";

function CardDash(props) {
  const cards = {
    width: "100%",
  };
  return (
    <bds-grid xxs="4">
      <bds-paper style={cards}>
        <bds-grid
          direction="column"
          xxs="12"
          padding="2"
          align-items="flex-start"
          gap="1"
        >
          <bds-typo
            class="text-card"
            variant="fs-14"
            margin="false"
            bold="bold"
          >
            {props.text}
          </bds-typo>
          <bds-typo variant="fs-24" margin="false" bold="extra-bold">
            {props.info}
          </bds-typo>
        </bds-grid>
      </bds-paper>
    </bds-grid>
  );
}

export default CardDash;
