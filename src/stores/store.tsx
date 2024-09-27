import { create } from 'zustand'
import { IDataDashboard, IRootObject } from './storeTypes'

const DataDashboard = create<IDataDashboard>((set) => ({
  entiteMorale: {
    total: 0,
    cnaes: {},
    naturezaJuridica: {},
    idade: {
      '1': 0,
      '5': 0,
      '10': 0,
      '+20': 0
    }
  },
  personnePhysique: {
    total: 0,
    sexo: {
      masculino: 0,
      feminino: 0,
      indefinido: 0
    },
    idade: {
      '-18': 0,
      '19a25': 0,
      '26a40': 0,
      '41a60': 0,
      '61a80': 0,
      '+80': 0
    },
    participaEmpresa: {
      sim: 0,
      nao: 0
    },
    carteira: {
      cobranca: 0,
      ecommerce: 0,
      aposentados: 0,
      outros: 0
    }
  },
  totalPeopleByRegion: {
    Norte: 0,
    Sul: 0,
    Leste: 0,
    Oeste: 0
  },
  dataDetails: [],
  setDataDashboard: (data: IRootObject) =>
    set(() => ({
      personnePhysique: data.dashboard.tipoPessoa.pessoaFisica,
      entiteMorale: data.dashboard.tipoPessoa.pessoaJuridica,
      totalPeopleByRegion: data.dashboard.totalPessoasPorRegiao,
      dataDetails: data.dados_detalhados
    }))
}))

export default {
  DataDashboard
}
