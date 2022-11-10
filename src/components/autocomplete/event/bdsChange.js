import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ChangeEvent() {
  // Put here the event function

  const [resultChange, setResultChange] = useState(false);
  const [valueChange, setValueChange] = useState('');

  useEffect(() => {
    const element = document.getElementById("changeEvent");
    element.addEventListener("bdsChange",(obj) => {
        setResultChange(true);
        setValueChange(obj.detail.value);
      },[]);
  });

  return (
    <bds-grid
      xxs="12"
      direction="column"
      gap="4"
      margin="y-8"
      align-items="center"
    >
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" direction="column">
          <bds-typo class="title-2" variant="fs-24" bold="bold">
            {/* Put here the event name */}
            bdsChange Event
          </bds-typo>
          <hr />
        </bds-grid>
        <bds-grid xxs="12" justify-content="center">
          <bds-grid
            xxs="12"
            direction="column"
            gap="4"
            justify-content="space-around"
            margin="t-3"
          >
            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The component using the event</bds-typo>
              <bds-grid padding="x-3" direction="column" gap="2">
                <bds-autocomplete id="changeEvent" placeholder="Select">
                  <bds-select-option value="1">Millie Bobby</bds-select-option>
                  <bds-select-option value="2">Finn Wolfhard</bds-select-option>
                  <bds-select-option value="3">David Harbour</bds-select-option>
                  <bds-select-option value="4">
                    Gaten Matarazzo
                  </bds-select-option>
                  <bds-select-option value="5">
                    Caleb McLaughlin
                  </bds-select-option>
                  <bds-select-option value="6">Noah Schnapp</bds-select-option>
                </bds-autocomplete>
                {resultChange ? (
                  <motion.div
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                  >
                    <bds-grid xxs="4">
                      <bds-paper>
                        <bds-grid padding="2">
                          <bds-typo>Value called by bdsChange: {valueChange}</bds-typo>
                        </bds-grid>
                      </bds-paper>
                    </bds-grid>
                  </motion.div>
                ) : (
                  ""
                )}
              </bds-grid>
            </bds-grid>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">
                The component code using the event
              </bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {`<bds-autocomplete id="changeEvent" placeholder="Select">
  <bds-select-option value="1">Millie Bobby</bds-select-option>
  <bds-select-option value="2">Finn Wolfhard</bds-select-option>
  <bds-select-option value="3">David Harbour</bds-select-option>
  <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
  <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
  <bds-select-option value="6">Noah Schnapp</bds-select-option>
</bds-autocomplete>`}
                      </pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The function</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {`  const [resultChange, setResultChange] = useState(false);
  const [valueChange, setValueChange] = useState('');

  useEffect(() => {
    const element = document.getElementById("changeEvent");
    element.addEventListener("bdsChange",(obj) => {
        setResultChange(true);
        setValueChange(obj.detail.value);
      },[]);
  });`}
                      </pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>
          </bds-grid>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
}
