import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Store } from './pages/Store';
import { Descricao } from './pages/Descricao';
import { Erro } from './pages/erro';
import { Registro } from './pages/Registro';
import { Root } from './pages/Root';
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
                    <Route path='/Registro' element={<Registro />} />
                    <Route path='/Root' element={<Root />} />
                    <Route path='/descricao/:id' element={<Descricao />} />
                    <Route path='*' element={<Erro />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;
