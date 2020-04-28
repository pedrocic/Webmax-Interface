import React from 'react';

import Main from '../../layout/templates/Main/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!',
};

const DashboardPage = () => {
  return (
    <Main {...headerProps}>
      <div>Hello world</div>
    </Main>
  );
};

export default DashboardPage;
