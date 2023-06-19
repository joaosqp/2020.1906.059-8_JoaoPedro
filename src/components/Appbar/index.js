import { Link } from 'react-router-dom'
import './appbar.css'


export const Appbar = () => {

  const toHome = () => {
    if(window.location.pathname === '/'){
      window.location.reload();
    }else {
      window.location.href='/';
    }
  }

  return (
    <header>
      <div className='menu1'>
        <div className='titulo'>
          <label htmlFor='Sagrado'>
            <Link className='nomeSagrado' onClick={toHome}>
              Sagrado Prazer
            </Link>
          </label>
        </div>
        <div>
          <input className='pesquisar' type='text' name='Sagrado' placeholder='Digite oque você procura...' />
        </div>
        <div className='login'>
          <label>
            <Link to={'/login'} className='linkLogin'>
              LOGIN
            </Link>
          </label>
        </div>
        <div className='carrinho'>
          <label>
            <Link to={'/carrinho'} className='linkCarrinho'>
              CARRINHO
            </Link>
          </label>
        </div>
      </div>
    </header>
  );
}