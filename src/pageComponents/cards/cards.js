import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card(props) {
    const cardWidth = {
        width: '90%'
    }
  return (
    <bds-grid xxs="3" margin="y-2" justify-content="center">
      <Link to={props.link} style={cardWidth}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <bds-paper>
            <bds-grid direction="column" padding="2" flex-wrap="wrap" gap="2">
                <bds-typo bold="bold" variant="fs-16" margin="false">
                {props.name}
              </bds-typo>
              <bds-chip-tag color={props.status}>{props.statusText}</bds-chip-tag>
            </bds-grid>
          </bds-paper>
        </motion.div>
      </Link>
    </bds-grid>
  );
}

export default Card;
