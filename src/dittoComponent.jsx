import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [token, setToken] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Função para autenticar e obter o token
    const authenticate = async () => {
      try {
        const response = await fetch('https://api.dittowords.com/v1/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a34784af-8a91-46a0-a0ef-a8b9fab6cd2c.57a160f0213dba226cd19e3e554a781142d419c2',
          },
        });

        const authData = await response.json();

        if (response.ok) {
          setToken(authData.token);
        } else {
          console.error('Authentication failed:', authData.error);
        }
      } catch (error) {
        console.error('Error during authentication:', error);
      }
    };

    // Função para fazer a chamada de API
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch('https://api.dittowords.com/v1/variables', options);
        const apiData = await response.json();

        if (response.ok) {
          setData(apiData);
        } else {
          console.error('API request failed:', apiData.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Autenticar e fazer a chamada de API ao montar o componente
    authenticate();
    fetchData();
  }, [token]); // Execute sempre que o token for alterado

  return (
    <div>
      <h1>API Component</h1>
      <p>Token: {token}</p>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
};

export default ApiComponent;
