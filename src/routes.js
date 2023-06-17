import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Store } from './pages/Store';
import { Descricao } from './pages/Descricao';
import { Erro } from './pages/erro';
import Login from './pages/Login';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route>
                    <Route path='/' element={<Store />} />
                    <Route path='/Descricao' element={<Descricao />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='*' element={<Erro />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;
