
function App() {
  return (
    <div className = "container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

           <span className="login-form-title">Bem Vindo!</span>

          <div className="wrap-imput">
            <input type="email"/>
            <span className="focus-input" data-placeholder='Email'></span> 
          </div>

          <div className="wrap-imput">
            <input type="password"/>
            <span className="focus-input" data-placeholder="Password"></span> 
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">Não possui conta?</div>

          <a className="txt2" href="#">Criar conta.</a>

          </form>
        </div>
      </div> 
    </div> 
  );
}

export default App;
