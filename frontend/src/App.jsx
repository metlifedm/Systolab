import { Routes, Route } from 'react-router-dom'
import CapabilitiesPage from './pages/CapabilitiesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CapabilitiesPage />} />
    </Routes>
  )
}