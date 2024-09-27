import './assets/styles/global.scss'
import { Routes, Route } from 'react-router-dom'
import Dashboard from 'pages/dashboard'
import LeftMenu from 'components/leftMenu'
import Box from '@mui/material/Box'

function App() {
  return (
    <Box className="global">
      <LeftMenu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Box>
  )
}

export default App
