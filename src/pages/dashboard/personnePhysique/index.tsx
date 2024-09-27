import { Divider } from '@mui/material'
import store from '../../../stores/store'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import InputText from 'components/inputText'
import EmptyState from 'components/emptyState'

export default function PersonnePhysique() {
  const { personnePhysique, totalPeopleByRegion, dataDetails } =
    store.DataDashboard()

  // Popula o grafico de pessoas por região (do tipo donut)
  const [regiaoChartOptions] = useState<ApexCharts.ApexOptions>({
    chart: {
      type: 'donut'
    },
    labels: ['Norte', 'Sul', 'Leste', 'Oeste'],
    legend: {
      labels: {
        colors: '#fdfdfd'
      }
    }
  })
  const [regiaoChartSeries, setRegiaoChartSeries] = useState<number[]>([])

  useEffect(() => {
    if (totalPeopleByRegion) {
      setRegiaoChartSeries([
        totalPeopleByRegion.Norte || 0,
        totalPeopleByRegion.Sul || 0,
        totalPeopleByRegion.Leste || 0,
        totalPeopleByRegion.Oeste || 0
      ])
    }
  }, [totalPeopleByRegion])

  // Popula o grafico de pessoas por faixa etária (do tipo donut)
  const [faixaEtariaChartOptions] = useState<ApexCharts.ApexOptions>({
    chart: {
      type: 'donut'
    },
    labels: [
      '-18 anos',
      '19 a 25 anos',
      '26 a 40 anos',
      '41 a 60 anos',
      '61 a 80 anos',
      '+80 anos'
    ],
    legend: {
      labels: {
        colors: '#fdfdfd'
      }
    }
  })
  const [faixaEtariaChartSeries, setFaixaEtariaChartSeries] = useState<
    number[]
  >([])

  useEffect(() => {
    if (personnePhysique) {
      setFaixaEtariaChartSeries([
        personnePhysique.idade['-18'] || 0,
        personnePhysique.idade['19a25'] || 0,
        personnePhysique.idade['26a40'] || 0,
        personnePhysique.idade['41a60'] || 0,
        personnePhysique.idade['61a80'] || 0,
        personnePhysique.idade['+80'] || 0
      ])
    }
  }, [personnePhysique])

  // Filtro completo da listagem de Pessoa jurídica, ele filtra por nome, documento, sexo, região, idade, carteira e participação na empresa
  const [filter, setFilter] = useState('')

  const handleFilterChange = (value: string) => {
    setFilter(value)
  }

  const filteredData = dataDetails.filter(
    (item) =>
      item.tipoPessoa === 'Fisica' &&
      (item.nome?.toLowerCase().includes(filter.toLowerCase()) ||
        item.documento?.toLowerCase().includes(filter.toLowerCase()) ||
        item.sexo?.toLowerCase().includes(filter.toLowerCase()) ||
        item.regiao?.toLowerCase().includes(filter.toLowerCase()) ||
        item.idade?.toString().includes(filter) ||
        item.carteira?.toLowerCase().includes(filter.toLowerCase()) ||
        item.participaEmpresa?.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <div className="card">
      <div className="card__item">
        <span className="card__type">Total de Pessoas</span>
        <span className="card__total">{personnePhysique.total}</span>
      </div>

      <div className="card__item">
        <span className="card__type">Total por Sexo</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.sexo.masculino}
            </span>
            <span className="card__type">Masculino</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.sexo.feminino}
            </span>
            <span className="card__type">Feminino</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.sexo.indefinido}
            </span>
            <span className="card__type">Indefinido</span>
          </div>
        </div>
      </div>

      <div className="card__item">
        <span className="card__type">Total com Participação em Empresas</span>
        <span className="card__total">
          {personnePhysique.participaEmpresa.sim}
        </span>
      </div>

      <div className="card__item">
        <span className="card__type">Categorias de Carteira de registro</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.cobranca}
            </span>
            <span className="card__type">Cobrança</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.ecommerce}
            </span>
            <span className="card__type">Ecommerce</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.aposentados}
            </span>
            <span className="card__type">Aposentados</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.carteira.outros}
            </span>
            <span className="card__type">Outros</span>
          </div>
        </div>
      </div>

      <div className="card__item">
        <span className="card__type">Total por Faixa Etária</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">{personnePhysique.idade['-18']}</span>
            <span className="card__type">-18 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['19a25']}
            </span>
            <span className="card__type">19 a 25 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['26a40']}
            </span>
            <span className="card__type">26 a 40 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['41a60']}
            </span>
            <span className="card__type">41 a 60 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {personnePhysique.idade['61a80']}
            </span>
            <span className="card__type">61 a 80 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">{personnePhysique.idade['+80']}</span>
            <span className="card__type">+80 anos</span>
          </div>
        </div>
      </div>

      <div className="card__graphic">
        <div className="card__graphic-item">
          <div className="card__graphic-title">Pessoas por Região</div>
          <Divider
            className="card__divider card__divider--chart"
            orientation="horizontal"
            flexItem
          />
          <Chart
            options={regiaoChartOptions}
            series={regiaoChartSeries}
            type="donut"
            height={350}
          />
        </div>
        <div className="card__graphic-item">
          <div className="card__graphic-title">Faixa Etária</div>
          <Divider
            className="card__divider card__divider--chart"
            orientation="horizontal"
            flexItem
          />
          <Chart
            options={faixaEtariaChartOptions}
            series={faixaEtariaChartSeries}
            type="donut"
            height={350}
          />
        </div>
      </div>

      <div className="card__table">
        <div className="card__table-header">
          <span className="card__table-title">Lista de pessoas</span>
          <InputText
            placeholder="Filtro de pessoas"
            onValueChange={handleFilterChange}
          />
        </div>
        <Divider
          className="card__divider card__divider--people"
          orientation="horizontal"
          flexItem
        />
        {filteredData.length > 0 ? (
          <TableContainer className="card__table-list" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="people table">
              <TableHead>
                <TableRow>
                  <TableCell>Documento</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Sexo</TableCell>
                  <TableCell>Região</TableCell>
                  <TableCell>Idade</TableCell>
                  <TableCell>Carteira</TableCell>
                  <TableCell>Participa da Empresa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.documento}
                    </TableCell>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell>{item.sexo}</TableCell>
                    <TableCell>{item.regiao}</TableCell>
                    <TableCell>{item.idade}</TableCell>
                    <TableCell>{item.carteira}</TableCell>
                    <TableCell>{item.participaEmpresa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="card__table-empty">
            <EmptyState />
            <span>Nenhum resultado encontrado</span>
          </div>
        )}
      </div>
    </div>
  )
}
