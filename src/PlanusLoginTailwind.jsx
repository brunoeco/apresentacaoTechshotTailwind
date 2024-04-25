
export function PlanusLoginTailwind() {
  return (
    <div className={`flex items-center justify-center w-full min-h-screen py-10 bg-planusBg`}>
      <form action="" className='flex items-center justify-center w-[27rem] h-[30rem] rounded-2xl bg-white'>
        <div className='flex flex-col gap-4 w-[18.75rem] text-slate-400 '>
          <div>
            <p className="text-5xl font-semibold text-planusText">Planus</p>
            <p>Insira suas credenciais para entrar na plataforma</p>
          </div>

          <div>
            <label className='font-bold' htmlFor="email">E-mail</label>
            <input name='email' type="text" className={`w-full h-7 border-b-2 border-zinc-200 outline-none focus-visible:border-planusBg`} />
          </div>

          <div>
            <label className='font-bold' htmlFor="password">Password</label>
            <input name='password' type="password" className={`w-full h-7 border-b-2 border-zinc-200 outline-none focus-visible:border-planusBg`}/>
          </div>

          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Lembrar</label>
            </div>

            <a href="#">Esqueci a senha</a>
          </div>

          <button className={`w-full h-8 rounded-full mt-8 text-white font-bold bg-planusBg`}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
}
