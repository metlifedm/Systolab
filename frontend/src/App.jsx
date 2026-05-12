import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapabilitiesPage from './pages/CapabilitiesPage'
import HomePage from './pages/HomePage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FieldResultsPage from './pages/FieldResultsPage'
import OperatorsPage from './pages/OperatorsPage'
import InitiatePage from './pages/InitiatePage'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/field-results" element={<FieldResultsPage />} />
        <Route path="/operators" element={<OperatorsPage />} />
        <Route path="/initiate" element={<InitiatePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}