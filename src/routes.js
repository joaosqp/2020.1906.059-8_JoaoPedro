import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Store } from './pages/Store'
import { Descricao } from './pages/Descricao'
import { Footer } from './components/Footer'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route>
                    <Route path='/' element={<Store />} />
                    <Route path='/Descricao' element={<Descricao />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default RoutesApp
