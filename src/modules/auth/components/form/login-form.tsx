export default function LoginForm() {
  return (
    <div className="p-12 min-w-[33rem] text-black/80">
      <div className="mb-10">
        <h1 className="font-bold text-2xl">
          Fashion - <span>Store</span>
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-4">Encantado de verte de nuevo</h1>

        <form>
          <p className="font-light mb-2">Login</p>
          <div>
            <input className="bg-slate-100 p-3 w-full" type="email" placeholder="Email" autoComplete="email"/>
          </div>

          <div>
            <label htmlFor="password" className="font-light mb-2">Password</label>
            <input className="bg-slate-100 p-3 w-ful" type="password" autoComplete="current-password" />
          </div>
        </form>
      </div>
    </div>
  );
}
