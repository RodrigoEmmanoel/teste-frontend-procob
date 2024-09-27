import { Divider } from '@mui/material'
import store from '../../../stores/store'
import { Fragment, useEffect, useState } from 'react'
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

export default function EntiteMorale() {
  const { entiteMorale, dataDetails } = store.DataDashboard()

  // Grafico de pessoas por CNAEs (do tipo bar)
  const [cnaesChartOptions, setCnaesChartOptions] =
    useState<ApexCharts.ApexOptions>({
      chart: {
        type: 'bar'
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: '#fdfdfd'
          }
        }
      },
      legend: {
        labels: {
          colors: '#fdfdfd'
        }
      }
    })
  const [cnaesChartSeries, setCnaesChartSeries] = useState<
    { name: string; data: number[] }[]
  >([
    {
      name: 'Total',
      data: []
    }
  ])

  // Grafico de pessoas por Natureza Juridica (do tipo bar)
  const [naturezaJuridicaChartOptions, setNaturezaJuridicaChartOptions] =
    useState<ApexCharts.ApexOptions>({
      chart: {
        type: 'bar'
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: '#fdfdfd'
          }
        }
      },
      legend: {
        labels: {
          colors: '#fdfdfd'
        }
      }
    })
  const [naturezaJuridicaChartSeries, setNaturezaJuridicaChartSeries] =
    useState<{ name: string; data: number[] }[]>([
      {
        name: 'Total',
        data: []
      }
    ])

  useEffect(() => {
    if (entiteMorale && entiteMorale.cnaes && entiteMorale.naturezaJuridica) {
      // Popula de maneira dinamica o grafico de CNAEs
      setCnaesChartOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: Object.keys(entiteMorale.cnaes)
        }
      }))
      setCnaesChartSeries([
        {
          name: 'Total',
          data: Object.values(entiteMorale.cnaes)
        }
      ])

      // Popula de maneira dinamica o grafico de Natureza Juridica
      setNaturezaJuridicaChartOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: Object.keys(entiteMorale.naturezaJuridica)
        }
      }))
      setNaturezaJuridicaChartSeries([
        {
          name: 'Total',
          data: Object.values(entiteMorale.naturezaJuridica)
        }
      ])
    }
  }, [entiteMorale])

  // Popula o grafico de pessoas por faixa etária (do tipo donut)
  const [faixaEtariaChartOptions] = useState<ApexCharts.ApexOptions>({
    chart: {
      type: 'donut'
    },
    labels: ['1 ano', '5 anos', '10 anos', '+20 anos'],
    legend: {
      labels: {
        colors: '#fdfdfd'
      }
    }
  })
  const [faixaEtariaChartSeries, setFaixaEtariaChartSeries] = useState([
    entiteMorale?.idade?.[1] || 0,
    entiteMorale?.idade?.[5] || 0,
    entiteMorale?.idade?.[10] || 0,
    entiteMorale?.idade?.['+20'] || 0
  ])

  useEffect(() => {
    setFaixaEtariaChartSeries([
      entiteMorale?.idade?.[1] || 0,
      entiteMorale?.idade?.[5] || 0,
      entiteMorale?.idade?.[10] || 0,
      entiteMorale?.idade?.['+20'] || 0
    ])
  }, [entiteMorale])

  // Filtro completo da listagem de Pessoa jurídica, ele filtra por nome, documento, região, idade, carteira e participação na empresa
  const [filter, setFilter] = useState('')

  const handleFilterChange = (value: string) => {
    setFilter(value)
  }

  const filteredData = dataDetails.filter(
    (item) =>
      item.tipoPessoa === 'Juridica' &&
      (item.nome?.toLowerCase().includes(filter.toLowerCase()) ||
        item.documento?.toLowerCase().includes(filter.toLowerCase()) ||
        item.regiao?.toLowerCase().includes(filter.toLowerCase()) ||
        item.idade?.toString().includes(filter) ||
        item.carteira?.toLowerCase().includes(filter.toLowerCase()) ||
        item.natureza_juridica?.toLowerCase().includes(filter.toLowerCase()) ||
        item.cnae_principal?.toLowerCase().includes(filter.toLowerCase()) ||
        item.participaEmpresa?.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <div className="card">
      <div className="card__item">
        <span className="card__type">Total de Pessoas</span>
        <span className="card__total">{entiteMorale?.total || 0}</span>
      </div>
      <div className="card__item">
        <span className="card__type">Total por CNAEs</span>
        <div className="card__multiple-type">
          {Object.entries(entiteMorale?.cnaes || {}).map(([type, total]) => (
            <Fragment key={type}>
              <div className="card__multiple-group">
                <span className="card__total">{total}</span>
                <span className="card__type">{type}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="card__item">
        <span className="card__type">Total por Natureza Jurídica</span>
        <div className="card__multiple-type">
          {Object.entries(entiteMorale?.naturezaJuridica || {}).map(
            ([type, total]) => (
              <Fragment key={type}>
                <div className="card__multiple-group">
                  <span className="card__total">{total}</span>
                  <span className="card__type">{type}</span>
                </div>
              </Fragment>
            )
          )}
        </div>
      </div>
      <div className="card__item">
        <span className="card__type">Total por Faixa Etária</span>
        <div className="card__multiple-type">
          <div className="card__multiple-group">
            <span className="card__total">{entiteMorale?.idade?.[1] || 0}</span>
            <span className="card__type">1 ano</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">{entiteMorale?.idade?.[5] || 0}</span>
            <span className="card__type">5 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {entiteMorale?.idade?.[10] || 0}
            </span>
            <span className="card__type">10 anos</span>
          </div>
          <div className="card__multiple-group">
            <span className="card__total">
              {entiteMorale?.idade?.['+20'] || 0}
            </span>
            <span className="card__type">+20 anos</span>
          </div>
        </div>
      </div>

      <div className="card__graphic">
        <div className="card__graphic-item">
          <div className="card__graphic-title">CNAEs</div>
          <Divider
            className="card__divider card__divider--chart"
            orientation="horizontal"
            flexItem
          />
          <Chart
            options={cnaesChartOptions}
            series={cnaesChartSeries}
            type="bar"
            height={350}
          />
        </div>
        <div className="card__graphic-item">
          <div className="card__graphic-title">Natureza Jurídica</div>
          <Divider
            className="card__divider card__divider--chart"
            orientation="horizontal"
            flexItem
          />
          <Chart
            options={naturezaJuridicaChartOptions}
            series={naturezaJuridicaChartSeries}
            type="bar"
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
            placeholder="Pesquisar"
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
                  <TableCell>Região</TableCell>
                  <TableCell>Idade</TableCell>
                  <TableCell>Carteira</TableCell>
                  <TableCell>Natureza Jurídica</TableCell>
                  <TableCell>CNAE Principal</TableCell>
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
                    <TableCell>{item.regiao}</TableCell>
                    <TableCell>{item.idade}</TableCell>
                    <TableCell>{item.carteira}</TableCell>
                    <TableCell>{item.natureza_juridica}</TableCell>
                    <TableCell>{item.cnae_principal}</TableCell>
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
