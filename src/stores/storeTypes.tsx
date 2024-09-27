type Gender = {
  masculino: number
  feminino: number
  indefinido: number
}

type Age = {
  '-18': number
  '19a25': number
  '26a40': number
  '41a60': number
  '61a80': number
  '+80': number
}

type CompanyParticipation = {
  sim: number
  nao: number
}

type Wallet = {
  cobranca: number
  ecommerce: number
  aposentados: number
  outros: number
}

type Individual = {
  total: number
  sexo: Gender
  idade: Age
  participaEmpresa: CompanyParticipation
  carteira: Wallet
}

type Cnaes = {
  [key: string]: number
}

type LegalNature = {
  [key: string]: number
}

type LegalAge = {
  '1': number
  '5': number
  '10': number
  '+20': number
}

type LegalEntity = {
  total: number
  cnaes: Cnaes
  naturezaJuridica: LegalNature
  idade: LegalAge
}

type PersonType = {
  pessoaFisica: Individual
  pessoaJuridica: LegalEntity
}

type TotalPeopleByRegion = {
  Norte: number
  Sul: number
  Leste: number
  Oeste: number
}

type Dashboard = {
  tipoPessoa: PersonType
  totalPessoasPorRegiao: TotalPeopleByRegion
}

type DetailedData = {
  documento: string
  tipoPessoa: string
  nome: string
  sexo: string
  regiao: string
  idade: number
  participaEmpresa: string
  carteira: string
  cnae_principal: string
  natureza_juridica: string
}

export interface IRootObject {
  dashboard: Dashboard
  dados_detalhados: DetailedData[]
}

export interface IDataDashboard {
  entiteMorale: LegalEntity
  personnePhysique: Individual
  totalPeopleByRegion: TotalPeopleByRegion
  dataDetails: DetailedData[]
  setDataDashboard: (data: IRootObject) => void
}
