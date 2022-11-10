import React from "react";

export default function AlertWarning() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Alert Warning
        </bds-typo>
        <hr />
      </bds-grid>

<bds-grid direction="column" gap="1" xxs="12">
    <bds-typo bold="bold">The structure HTML</bds-typo>
      <bds-paper>
        <bds-grid
          xxs="12"
          direction="column"
          padding="2"
          justify-content="center"
        >
          <bds-typo variant="fs-14" bold="regular">
            <code>
              <pre>
                {`<bds-alert open="true">
	<bds-alert-header variant="warning" icon="warning">
      Atenção!
    </bds-alert-header>
    <bds-alert-body>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione 	  
      nulla a quos error!
    </bds-alert-body> 
    <bds-alert-actions>
    	<bds-button variant="secondary" bold="true">Cancelar</bds-button>
        <bds-button variant="secondary" bold="true">Confirmar</bds-button>
      </bds-alert-actions>
 </bds-alert>`}
              </pre>
            </code>
          </bds-typo>
        </bds-grid>
      </bds-paper>
</bds-grid>
      
      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
           {/* Put here the component example */}
           <iframe src="https://takenet.github.io/blip-ds/iframe.html?args=&globals=backgrounds.grid:false;backgrounds.value:transparent&id=alert--warning-alert&viewMode=story" title="alert blip-ds component"></iframe>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
