import './login.css'

export function PlanusLoginCss() {
  return (
    <div className='page-container'>
      <form action="" className='form' >
        <div className='form-container'>
          <div>
            <p className='logo-text'>Planus</p>

            <p>Insira suas credenciais para entrar na plataforma</p>
          </div>

          <div className='input-container'>
            <label htmlFor="email">E-mail</label>
            <input name='email' type="text"  />
          </div>

          <div className='input-container'>
            <label htmlFor="password">Password</label>
            <input name='password' type="password" />
          </div>

          <div className='check-input-wrapper'>
            <div >
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Lembrar</label>
            </div>

            <a href="#">Esqueci a senha</a>
          </div>

          <button className='button'>
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
}
