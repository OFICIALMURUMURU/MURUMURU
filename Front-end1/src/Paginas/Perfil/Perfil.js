import './Perfil.css';
import Conteudo from './Componentes/Conteudo/ConteudoPerfil';
import React, { useEffect, useState } from 'react';

function Perfil() {
  document.title = 'MURUMURU | Perfil';

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/usuario/list');
        const data = await response.json();
        if (data.length > 0) {
          setUserData(data[0]);
        }
      } catch (error) {
        console.error('Erro ao obter os dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="cu">
      {userData ? (
        <Conteudo user={userData} />
      ) : (
        <div>Dados do usuário não encontrados.</div>
      )}
    </div>
  );
}

export default Perfil;
