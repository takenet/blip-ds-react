import React, { useRef, useEffect, useState } from "react";
import {motion} from 'framer-motion';

export default function BdsPatterValidation() {

  // Put here the event function
  
  const elementRf = useRef(null);
  const [result, setResult] = useState('');

  const eventReturn = (event) => {
    setResult(event.detail)
  }

  useEffect(() => {
    const elementRef = elementRf.current;
      elementRef.addEventListener('bdsPatterValidation', (event) => {
       eventReturn(event);
      });
      return () => {
        elementRef.removeEventListener('bdsPatterValidation', (event) => {
         eventReturn(event);
        });
      };
  }, [elementRf]);

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
            BdsPatterValidation
          </bds-typo>
          <hr />
        </bds-grid>
        <bds-grid
          xxs="12"
          justify-content="center"
        >
          <bds-grid
            xxs="12"
            direction="column"
            gap="4"
            justify-content="space-around"
            margin="t-3"
          >
            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">
                The component using the event
              </bds-typo>
              <bds-grid padding="3" direction="column">
                {/* <bds-banner id="banner" variant="system" button-close="true">
                  Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
                </bds-banner> */}
                <bds-input ref={elementRf} placeholder="nome completo"></bds-input>
                {result ? (
                  <motion.div
                  animate={{ x: 100 }}
                  transition={{ ease: "easeOut", duration: 2 }}>
                    <bds-paper>
                  <bds-grid padding="2" justify-content="center">
                        <bds-typo>{`This text appeared as a result of the bdsPatterValidation "${result}"`}</bds-typo>
                  </bds-grid>
                </bds-paper>
                  </motion.div>
                ) : ''}
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
                        {
                          `<bds-input ref={elementRf} placeholder="nome completo"></bds-input>`
                        }
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
                        {`const elementRf = useRef(null);
const [result, setResult] = useState('');
const eventReturn = (event) => {
  setResult(event.detail)
}

useEffect(() => {
  const elementRef = elementRf.current;
    elementRef.addEventListener('bdsPatterValidation', (event) => {
     eventReturn(event);
    });
    return () => {
      elementRef.removeEventListener('bdsPatterValidation', (event) => {
       eventReturn(event);
      });
    };
}, [elementRf]);`}
                        
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
