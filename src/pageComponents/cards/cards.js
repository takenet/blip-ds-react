import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card(props) {
    const cardWidth = {
        width: '100%'
    }
  return (
    <bds-grid xxs="3" justify-content="center">
      <Link to={props.link} style={cardWidth}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <bds-paper>
            <bds-grid direction="column" padding="4">
              <bds-typo bold="bold" variant="fs-20" margin="false" gap="2">
                {props.name}
              </bds-typo>
              <bds-typo variant="fs-14">{props.text}</bds-typo>
            </bds-grid>
          </bds-paper>
        </motion.div>
      </Link>
    </bds-grid>
  );
}

export default Card;
