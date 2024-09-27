import './style.scss'
import { Tab, Tabs } from '@mui/material'
import { useEffect, useState } from 'react'
import store from '../../stores/store'
import PersonnePhysique from './personnePhysique'
import EntiteMorale from './entiteMorale'

export default function Dashboard() {
  const { setDataDashboard } = store.DataDashboard()
  const [dashboardSelected, setDashboardSelected] = useState<Number>(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: Number) => {
    setDashboardSelected(newValue)
  }

  async function fetchDashboard() {
    const response = await fetch(
      new URL('../../constants/teste_json.json', import.meta.url)
    )
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON')
    }
    const json = await response.json()

    setDataDashboard(json)
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className="dashboard">
      <Tabs
        value={dashboardSelected}
        onChange={handleChange}
        className="dashboard__tabs"
        sx={{
          '.MuiTab-root': {
            color: '#FDFDFD'
          },
          '.Mui-selected': {
            color: '#FF5454'
          }
        }}
      >
        <Tab value={0} label="Pessoa Física" className="dashboard__tab" />
        <Tab value={1} label="Pessoa Jurídica" className="dashboard__tab" />
      </Tabs>

      {dashboardSelected === 0 ? <PersonnePhysique /> : <EntiteMorale />}
    </div>
  )
}
