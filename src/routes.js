import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Store } from './pages/Store'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route>
                    <Route path='/' element={<Store />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp
