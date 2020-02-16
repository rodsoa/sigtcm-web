export const dashboardOptions = [
  // {
  //   name: 'SERVICE',
  //   title: 'Atendimento',
  //   route: 'Service',
  // },

  {
    id: 1,
    firstBt: {
      name: 'MATRIX',
      title: 'Matriz',
      route: 'matrix',
      disabledButton: false,
    },
    secondBt: {
      name: 'UNITS',
      title: 'Unidades',
      route: 'newunit',
      disabledButton: false,
    },
  },
  {
    id: 2,
    firstBt: {
      name: 'TEAM',
      title: 'Equipe',
      route: 'team',
      disabledButton: true,
    },
    secondBt: {
      name: 'CLIENTS',
      title: 'Clientes',
      route: 'clients',
      disabledButton: false,
    },
  },
  {
    id: 3,
    firstBt: {
      name: 'TREATMENTS',
      title: 'Tratamentos',
      route: 'treatments',
      disabledButton: false,
    },
    secondBt: {
      name: 'PROTCOLS',
      title: 'Protocolos',
      route: 'protocols',
      disabledButton: true,
    },
  },
  {
    id: 4,
    firstBt: {
      name: 'TERMS',
      title: 'Termos',
      route: 'terms',
      disabledButton: false,
    },
    secondBt: {
      name: 'REPORTING',
      title: 'Relatórios',
      route: 'reporting',
      disabledButton: true,
    },
  },
];
